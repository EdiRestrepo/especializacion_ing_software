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
3. Breve explicación de los Principios SOLID encontrados.
4. Identificación de las consecuencias de las violaciones de principios SOLID.
5. Posibles refactorizaciones a realizar en el código.