# Exposición de Principios Solid

1️⃣ Liskov Substitution Principle (LSP)
2️⃣ Single Responsibility Principle (SRP)
3️⃣ Dependency Inversion Principle (DIP)

1. Resumen de los defectos encontrados por el equipo
 
- La clase `AppointmentController` tiene múltiples responsabilidades, como renderizar vistas, manejar la lógica de negocio y gestionar la persistencia de datos, lo que viola el Single Responsibility Principle (SRP).
- La clase `AppointmentService` depende directamente de clases concretas como `Doctor` y `Patient`, lo que viola el Dependency Inversion Principle (DIP) al no depender de abstracciones.
- La clase Doctor  y Patient podrian ser subclases de una clase Persona, lo que violaría el Liskov Substitution Principle (LSP) si no se implementan correctamente los métodos heredados.
- Las clases `FileAppointmentRepository` y `LegacyAppointmentRepository` tienen implementaciones específicas para la persistencia de datos, lo que dificulta la sustitución de una por otra sin afectar el funcionamiento del sistema, violando el Liskov Substitution Principle (LSP). De hecho en la clase `AppointmentService` se está utilizando directamente la clase `FileAppointmentRepository` y la clase `LegacyAppointmentRepository` en lugar de depender de una interfaz común, lo que también viola el Dependency Inversion Principle (DIP) y el Liskov Substitution Principle (LSP).


2. Resumen de los defectos encontrados por la IA.

- SRP (Single Responsibility Principle) — Violado  
  - Clase implicada: [`Hospital\Services\AppointmentService`](src/Services/AppointmentService.php) ([src/Services/AppointmentService.php](src/Services/AppointmentService.php)).  
  - Por qué: instancia dependencias ([`Hospital\Infrastructure\Logger`](src/Infrastructure/Logger.php), [`Hospital\Services\NotificationService`](src/Services/NotificationService.php), [`Hospital\Repositories\FileAppointmentRepository`](src/Repositories/FileAppointmentRepository.php) / [`Hospital\Repositories\LegacyAppointmentRepository`](src/Repositories/LegacyAppointmentRepository.php)) y además contiene validación, reglas de negocio, catálogos en memoria y lógica de notificación/registro. Debería delegar la creación/inyección de dependencias y centrarse en la lógica de dominio.

- DIP (Dependency Inversion Principle) — Violado  
  - Clase implicada: [`Hospital\Services\AppointmentService`](src/Services/AppointmentService.php) ([src/Services/AppointmentService.php](src/Services/AppointmentService.php)).  
  - Por qué: el servicio decide y construye implementaciones concretas de repositorio y logger (`new FileAppointmentRepository`, `new LegacyAppointmentRepository`, `new Logger`, `new NotificationService`) en vez de depender de abstracciones inyectadas. Esto dificulta pruebas y extensión.

- OCP (Open/Closed Principle) — Violado  
  - Archivos implicados: [`src/Services/AppointmentService.php`](src/Services/AppointmentService.php), [`config/config.php`](config/config.php).  
  - Por qué: para añadir otro tipo de repositorio o cambiar la política de creación es necesario modificar `AppointmentService`. Debe extenderse mediante inyección/fábrica sin modificar la clase existente.

- LSP (Liskov Substitution Principle) — Violado claramente  
  - Clase implicada: [`Hospital\Repositories\LegacyAppointmentRepository`](src/Repositories/LegacyAppointmentRepository.php) ([src/Repositories/LegacyAppointmentRepository.php](src/Repositories/LegacyAppointmentRepository.php)).  
  - Contrato base: [`Hospital\Repositories\AppointmentRepository::findById`](src/Repositories/AppointmentRepository.php) especifica "Retorna null si no existe." ([src/Repositories/AppointmentRepository.php](src/Repositories/AppointmentRepository.php)).  
  - Por qué: `LegacyAppointmentRepository::findById` retorna un objeto `Appointment` "vacío" cuando no existe en vez de `null`. Esto rompe la sustitución (clientes esperan `null` para no-existencia, p. ej. `AppointmentService::cancelAppointment` en [src/Services/AppointmentService.php](src/Services/AppointmentService.php) queda engañado y no detecta ausencias). Además `LegacyAppointmentRepository::save` normaliza `cancelled` a `scheduled`, cambiando semántica esperada por la interfaz y provocando comportamientos sorprendente downstream.

- (Observación adicional) Consistencia / contrato del repositorio — Problemática  
  - Archivos: [`src/Repositories/LegacyAppointmentRepository.php`](src/Repositories/LegacyAppointmentRepository.php) y [`src/Repositories/FileAppointmentRepository.php`](src/Repositories/FileAppointmentRepository.php).  
  - Por qué: diferencias de comportamiento (p. ej. `findById` y `save`) entre implementaciones rompen el contrato esperado por el resto del sistema; esto aumenta la fragilidad y viola expectativas de la interfaz.

# Recomendaciones rápidas
- Inyectar dependencias en el constructor de [`Hospital\Services\AppointmentService`](src/Services/AppointmentService.php) (recibir un `AppointmentRepository`, `Logger` y `NotificationService`) y mover la selección/creación al punto de composición (`public/index.php` o un contenedor/fábrica). Ver: [public/index.php](public/index.php).  
- Hacer que todas las implementaciones de repositorio respeten el contrato de la abstracción (`findById` debe devolver `null` si no existe). Archivo referencia: [`src/Repositories/AppointmentRepository.php`](src/Repositories/AppointmentRepository.php).  
- Extraer los "catálogos" (`$doctors`, `$patients`) a un proveedor/dataset separado para reducir responsabilidades en `AppointmentService`.  
- Evitar normalizaciones silenciosas en `LegacyAppointmentRepository::save` o documentarlas y exponerlas como comportamiento opcional/convertible.

# Archivos relevantes (referencia)
- Servicio principal: [`Hospital\Services\AppointmentService`](src/Services/AppointmentService.php) — [src/Services/AppointmentService.php](src/Services/AppointmentService.php)  
- Controlador: [`Hospital\Controllers\AppointmentController`](src/Controllers/AppointmentController.php) — [src/Controllers/AppointmentController.php](src/Controllers/AppointmentController.php)  
- Repositorios:  
  - [`Hospital\Repositories\AppointmentRepository`](src/Repositories/AppointmentRepository.php) — [src/Repositories/AppointmentRepository.php](src/Repositories/AppointmentRepository.php)  
  - [`Hospital\Repositories\FileAppointmentRepository`](src/Repositories/FileAppointmentRepository.php) — [src/Repositories/FileAppointmentRepository.php](src/Repositories/FileAppointmentRepository.php)  
  - [`Hospital\Repositories\LegacyAppointmentRepository`](src/Repositories/LegacyAppointmentRepository.php) — [src/Repositories/LegacyAppointmentRepository.php](src/Repositories/LegacyAppointmentRepository.php)  
- Notificaciones / Logger: [`Hospital\Services\NotificationService`](src/Services/NotificationService.php) — [src/Services/NotificationService.php](src/Services/NotificationService.php); [`Hospital\Infrastructure\Logger`](src/Infrastructure/Logger.php) — [src/Infrastructure/Logger.php](src/Infrastructure/Logger.php)  
- Punto de composición / arranque: [public/index.php](public/index.php)  
- Configuración: [config/config.php](config/config.php)  
- Datos de ejemplo: [storage/appointments.json](storage/appointments.json)



3. Breve explicación de los Principios SOLID encontrados.
4. Identificación de las consecuencias de las violaciones de principios SOLID.
5. Posibles refactorizaciones a realizar en el código.