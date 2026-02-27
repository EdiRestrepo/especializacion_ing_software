# Exposición de Principios Solid

1️⃣ Liskov Substitution Principle (LSP)
2️⃣ Single Responsibility Principle (SRP)
3️⃣ Dependency Inversion Principle (DIP)

1. Resumen de los defectos encontrados por el equipo
 
- La clase `AppointmentController` tiene múltiples responsabilidades, como renderizar vistas, manejar la lógica de negocio y gestionar la persistencia de datos, lo que viola el Single Responsibility Principle (SRP).
  
- La clase `AppointmentService` depende directamente de clases concretas como `Doctor` y `Patient`, lo que viola el Dependency Inversion Principle (DIP) al no depender de abstracciones.


- La clase Doctor  y Patient podrian ser subclases de una clase Persona, lo que violaría el Liskov Substitution Principle (LSP) si no se implementan correctamente los métodos heredados.

- Las clases `FileAppointmentRepository` y `LegacyAppointmentRepository` tienen implementaciones específicas para la persistencia de datos, lo que dificulta la sustitución de una por otra sin afectar el funcionamiento del sistema, violando el Liskov Substitution Principle (LSP). De hecho en la clase `AppointmentService` se está utilizando directamente la clase `FileAppointmentRepository` y la clase `LegacyAppointmentRepository` en lugar de depender de una interfaz común, lo que también viola el Dependency Inversion Principle (DIP) y el Liskov Substitution Principle (LSP).


1. Resumen de los defectos encontrados por la IA.

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

3. Breve explicación de los Principios SOLID encontrados.
- **SRP (Single Responsibility Principle)**: Cada módulo o clase debe tener una sola responsabilidad o motivo para cambiar. Si una clase hace varias cosas (p. ej. construir dependencias, manejar persistencia y coordinar notificaciones), es más difícil mantenerla y probarla.

- **OCP (Open/Closed Principle)**: Las entidades deben estar abiertas para extensión pero cerradas para modificación. Cuando hay que editar una clase para añadir un nuevo repositorio, la clase no cumple OCP.

- **LSP (Liskov Substitution Principle)**: Las subclases o implementaciones deben poder sustituir a sus supertipos sin alterar el comportamiento esperado. Si una implementación cambia el contrato (p. ej. retorna un objeto en vez de `null`), rompe LSP.

- **ISP (Interface Segregation Principle)**: Las interfaces deben ser específicas y no forzar implementaciones a depender de métodos que no usan. En este código, la interfaz del repositorio es pequeña, pero las diferencias de comportamiento sugieren que podrían necesitarse interfaces más claras o contratos adicionales.

- **DIP (Dependency Inversion Principle)**: Los módulos de alto nivel no deben depender de módulos de bajo nivel; ambos deben depender de abstracciones. Construir dependencias concretas dentro de `AppointmentService` viola DIP y complica pruebas.
  
4. Identificación de las consecuencias de las violaciones de principios SOLID.

- **Mantenibilidad reducida**: cambios en una responsabilidad (p. ej. en cómo se envían notificaciones) obligan a modificar múltiples clases; en este repo, AppointmentService mezcla responsabilidades y será costoso cambiar comportamiento sin introducir errores.

- **Difícil de testar**: dependencias construidas internamente (ej. new FileAppointmentRepository, new Logger) impiden inyección de mocks, por lo que las pruebas unitarias son más lentas, frágiles o imposibles.

- **Acoplamiento fuerte**: módulos de alto nivel dependen de implementaciones concretas, lo que impide sustituir o extender componentes sin tocar código existente (viola DIP/OCP). Añadir un nuevo repositorio requerirá editar AppointmentService en vez de sólo extenderlo.

- **Comportamientos inesperados y bugs silenciosos**: violar LSP/contratos (p. ej. LegacyAppointmentRepository::findById que no devuelve null) causa que consumidores asuman invariantes falsas y produzcan fallos lógicos — por ejemplo, una cancelación que no detecta que la cita no existe.

- **Fragmentación del contrato y inconsistencias**: diferencias entre implementaciones de repositorio (normalizaciones, formatos distintos en appointments.json) producen resultados distintos según el backend seleccionado, aumentando la sorpresa para usuarios y desarrolladores.

- **Reutilización limitada**: clases con responsabilidades mezcladas no pueden reutilizarse en otros contextos sin arrastrar dependencias o comportamiento extra (p. ej. llevar NotificationService embebido en AppointmentService).

- **Mayor coste de incorporación**: nuevo personal tardará más en comprender por qué la lógica está dispersa o duplicada entre servicio, repositorios y controladores.

- **Riesgos operativos**: cambios no previstos (normalizaciones silenciosas, validaciones inconsistentes) pueden llevar a pérdida de datos, registros incorrectos o fallas en integraciones externas.

5. Posibles refactorizaciones a realizar en el código.

A continuación se listan refactorizaciones posibles, ordenadas por prioridad e impacto, para mejorar la adherencia a SOLID y la mantenibilidad del proyecto.

## Prioritarias (alto impacto, bajo riesgo)

- **Inyectar dependencias en `AppointmentService`**
  - Qué: cambiar el constructor para recibir `AppointmentRepository`, `Logger` y `NotificationService` en vez de instanciarlos internamente.
  - Por qué: corrige DIP y SRP; facilita pruebas unitarias y permite cambiar implementaciones sin editar la clase.
  - Dónde: `AppointmentService.php` y punto de composición `index.php`.

- **Arreglar `LegacyAppointmentRepository::findById` para respetar el contrato**
  - Qué: devolver `null` cuando no exista la entidad y evitar normalizaciones silenciosas en `save`.
  - Por qué: corrige LSP y evita bugs por expectativas rotas.
  - Dónde: `LegacyAppointmentRepository.php`.

## Estructurales (mejoran extensibilidad y pruebas)

- **Extraer una fábrica/contener de composición**
  - Qué: mover la lógica de creación de componentes (repositorios, logger, notifier) a `index.php` o a una clase `AppFactory`/`Container`.
  - Por qué: mantiene `AppointmentService` cerrado a modificaciones (OCP) y centraliza configuración.

- **Definir interfaces más explícitas**
  - Qué: añadir interfaces como `LoggerInterface`, `NotificationSenderInterface` y, si procede, `ReadAppointmentRepository`/`WriteAppointmentRepository` si hay métodos diferenciados.
  - Por qué: mejora ISP y permite múltiples implementaciones intercambiables.

- **Extraer proveedores de datos estáticos**
  - Qué: mover listas de doctores/pacientes desde `AppointmentService` a un `DataProvider` o archivo de configuración.
  - Por qué: reduce responsabilidades del servicio y facilita reutilización y pruebas.

## Mejora de calidad (tests, documentación, robustez)

- **Añadir pruebas unitarias y de integración**
  - Qué: crear tests para `AppointmentService` con repositorios mockeados, y tests que validen comportamiento con `FileAppointmentRepository`.
  - Por qué: detecta regresiones introducidas por diferencias entre repositorios.

- **Establecer contrato del repositorio y documentarlo**
  - Qué: documentar explícitamente las precondiciones y postcondiciones de métodos como `findById`, `save`, `listByPatient`.
  - Por qué: reduce ambigüedad entre implementaciones y facilita cumplimiento de LSP.

- **Normalizar manejo de estados y validaciones**
  - Qué: centralizar reglas de negocio (p. ej. validación de horarios, estados permitidos) en `AppointmentService` o en clases de validación específicas.
  - Por qué: evita que repositorios cambien semántica de los objetos.

## Opcionales / a largo plazo

- **Introducir un contenedor de inyección de dependencias ligero** (p.ej. un simple factory o usar una librería pequeña) para composición automática.
- **Separar responsabilidades del controlador**: mover renderizado HTML a vistas/plantillas y dejar solo coordinación en `AppointmentController`.
- **Crear adaptadores para formatos legacy**: si `LegacyAppointmentRepository` necesita mantener transformaciones, introducir un adaptador que traduzca entre formatos en vez de cambiar la semántica del repositorio.

## Plan de ejecución sugerido (pasos pequeños)

1. Cambiar `AppointmentService` para aceptar dependencias por constructor y actualizar `public/index.php` para proporcionarlas.
2. Corregir `LegacyAppointmentRepository::findById` y `save` para respetar contratos.
3. Extraer proveedores `DoctorsProvider` y `PatientsProvider` y actualizar el servicio.
4. Añadir `LoggerInterface` y adaptadores si se desea flexibilidad extra.
5. Añadir tests unitarios para `AppointmentService` y tests de integración para `FileAppointmentRepository`.

---

