1. Principios SOLID
   Guian el diseño orientado a objetos de calidad.

2. DRY, KISS y YAGNI
    Principios de simplicidad y economia en el diseño de software:
    1. DRY (Don't Repeat Yourself)
       Evitar la duplicación de código para mejorar la mantenibilidad.
    2. KISS (Keep It Simple, Stupid)
       Mantener el código simple y fácil de entender.
    3. YAGNI (You Aren't Gonna Need It)
        No implementar funcionalidades que no son necesarias en el momento.

3. Clean Code
    Escribir código que sea fácil de leer, entender y mantener.

4. Modularidad y Organizacón.
   Cómo estructurar proyectos para que escalen sin car en el caos.

5. Errores comunes en construcción
   Los antipatrones más frecuentes y cómo evitarlos.

6. 12-Factor App
   Principios para construir aplicaciones modernas, escalables y mantenibles.


Principios SOLID

SOLID es un acrónimo que representa cinco principios fundamentales para el diseño de software orientado a objetos. Estos principios ayudan a los desarrolladores a crear sistemas que son fáciles de mantener, escalables y robustos. A continuación, se describen cada uno de los principios SOLID

1. Single Responsibility Principle (SRP)
   Cada clase debe tener una única responsabilidad o razón para cambiar. Esto significa que una clase debe estar enfocada en una sola tarea o función, lo que facilita su mantenimiento y comprensión.

2. Open/Closed Principle (OCP)
   Las entidades de software (clases, módulos, funciones, etc.) deben estar abiertas para la extensión pero cerradas para la modificación. Esto implica que se debe poder agregar nueva funcionalidad sin modificar el código existente, lo que reduce el riesgo de introducir errores.
   Patron adapter.
   Patron strategy.
   Patron state.
   Patron creational factory method.
   Patron creational abstract factory.

3. Liskov Substitution Principle (LSP)
    Los objetos de una clase derivada deben poder sustituir a los objetos de la clase base sin alterar el correcto funcionamiento del programa. Esto significa que las clases derivadas deben cumplir con las expectativas establecidas por la clase base.

4. Interface Segregation Principle (ISP)
   Los clientes no deben verse obligados a depender de interfaces que no utilizan. Es mejor tener interfaces específicas y pequeñas en lugar de una interfaz general y grande. Esto mejora la flexibilidad y la mantenibilidad del código.

5. Dependency Inversion Principle (DIP)
   Los módulos de alto nivel no deben depender de módulos de bajo nivel. Ambos deben depender de abstracciones. Además, las abstracciones no deben depender de detalles, sino que los detalles deben depender de abstracciones. Esto promueve la desacoplamiento y facilita la reutilización del código.

DRY, KISS y YAGNI

DRY
Cada pieza de conocimiento debe tener una representación autoritativa en el sistema. Evitar la duplicación de código mejora la mantenibilidad y reduce el riesgo de errores.

KISS
Mantener el código simple y fácil de entender. La simplicidad facilita la lectura, el mantenimiento y la colaboración entre desarrolladores.

YAGNI
No implementar funcionalidades que no son necesarias en el momento. Esto ayuda a evitar la sobrecarga de características innecesarias y mantiene el enfoque en lo esencial.

Clean Code
Escribir código que sea fácil de leer, entender y mantener. Esto incluye seguir convenciones de nomenclatura, escribir funciones pequeñas y enfocadas, y evitar la complejidad innecesaria.
Nombres con intención.
Funciones pequeñas y enfocadas. -> si supera las 20-30 líneas, probablemente esté haciendo demasiado.
Comentarios claros y útiles.
Formateo consistente. -> Prittier, eslint, etc.
Manejo de errores adecuado.
Tests como documentación viva -> Tests unitarios y de integración que describen el comportamiento esperado del código.

Modularidad y Organización





