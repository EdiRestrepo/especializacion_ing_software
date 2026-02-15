# Principios de Diseño Aplicados – Exposición Práctica

## 🎯 Objetivo de la Actividad
Analizar, ejemplificar y aplicar principios de diseño de software en un contexto práctico,
evidenciando cómo su correcta aplicación transforma un modelo de clases y su código
asociado, mejorando la mantenibilidad, extensibilidad, cohesión, bajo acoplamiento y
calidad estructural del diseño.
El propósito central de esta actividad es que los equipos tomen decisiones de diseño
fundamentadas, comprendiendo los beneficios, costos y trade-offs asociados a cada
principio, más allá de su definición teórica.
Esta actividad prioriza principios SOLID y GRASP, enfatizando su impacto real en el diseño
de software.

## 🧩 Contexto
Los principios de diseño constituyen la base de un software sostenible y evolutivo. Sin
embargo, suelen abordarse de manera teórica y desarticulada.
En esta actividad los equipos deberán demostrar el valor real de los principios mediante:

- Modelos de clases antes y después de aplicar los principios.
- Código que evidencie problemas de diseño y su posterior refactorización.
- Discusión técnica sobre decisiones, compensaciones y limitaciones.
- Argumentación estructural frente a preguntas críticas.

Cada equipo trabajará con una pareja de principios asignada por el docente.
No se repiten principios entre equipos.

## 🚫 Restricción Metodológica (Obligatoria)
Durante la exposición:

- ❌ NO se permiten diapositivas teóricas.
- ❌ NO se permite proyectar texto explicativo.
- ❌ NO se permite leer definiciones.
- ✅ La exposición deberá apoyarse exclusivamente en:
  - Código
  - Diagramas de clases
- ✅ La explicación será oral y técnica.

El objetivo es que la exposición sea práctica, rigurosa y centrada en decisiones de diseño
reales.

## 📌 Distribución Oficial de Principios (6 Equipos)
Los equipos trabajarán con los siguientes pares, organizados en orden progresivo de
dificultad conceptual:

### 🟢 Equipo 1
SRP (Single Responsibility Principle) + High Cohesion (GRASP)

**Nivel:** Fundamentos estructurales

**Enfoque:** Responsabilidad interna y foco conceptual.

**Preguntas guía:**

- ¿Cómo determinar que una responsabilidad pertenece realmente a una clase?
- ¿Una clase puede tener múltiples métodos y cumplir SRP?
- ¿Cómo se relaciona cohesión con número de razones de cambio?
- ¿Qué métricas ayudan a detectar violaciones (LCOM, razones de cambio)?
- ¿Qué code smells aparecen?
  - God Class
  - Large Class
  - Shotgun Surgery

### 🟢 Equipo 2
Creator (GRASP) + ISP (Interface Segregation Principle)

**Nivel:** Diseño fino de contratos

**Enfoque:** Creación responsable y diseño de interfaces cohesionadas.

**Preguntas guía:**

- ¿Quién debe crear a quién y por qué?
- ¿Cómo afecta la creación al acoplamiento?
- ¿Cuándo una interfaz está “gorda”?
- ¿Dividir interfaces siempre mejora el diseño?
- ¿Factories pueden violar ISP?
- ¿Qué smells aparecen?
  - Métodos no usados
  - Implementaciones forzadas
  - Creación dispersa

### 🟡 Equipo 3
OCP (Open/Closed Principle) + Polymorphism (GRASP)

**Nivel:** Extensibilidad controlada

**Enfoque:** Extender comportamiento sin modificar código existente.

**Preguntas guía:**

- ¿Qué significa realmente “cerrado a modificación”?
- ¿Cómo detectar que un diseño no es extensible?
- ¿Cuándo el polimorfismo es innecesario?
- ¿Interfaces vs clases abstractas?
- ¿Qué smells aparecen?
  - Switch por tipo
  - Condicionales encadenados
- ¿Cómo impacta en pruebas unitarias?

### 🟡 Equipo 4
LSP (Liskov Substitution Principle) + Controller (GRASP)

**Nivel:** Contratos y comportamiento externo

**Enfoque:** Sustitución correcta y asignación adecuada de responsabilidades de
coordinación.

**Preguntas guía:**

- ¿Cómo detectar violaciones de LSP sin ejecutar código?
- ¿LSP se rompe solo con herencia?
- ¿Puede un Controller inducir violaciones de LSP?
- ¿Qué problemas aparecen?
  - Excepciones inesperadas
  - Condiciones especiales
  - Fat Controller
- ¿Cómo se conecta con arquitectura por capas?

### 🔴 Equipo 5
DIP (Dependency Inversion Principle) + Low Coupling (GRASP)

**Nivel:** Dirección estructural de dependencias

**Enfoque:** Estabilidad y desacoplamiento profundo.

**Preguntas guía:**

- ¿Qué significa depender de abstracciones realmente?
- ¿Interfaces siempre son necesarias?
- ¿Qué diferencia hay entre desacoplar y aplicar DIP?
- ¿Qué ocurre con dependencias a frameworks?
- ¿Qué smells aparecen?
  - Dependencias concretas
  - Rigidez tecnológica
- ¿Cómo impacta en testing y arquitectura?

### 🔴 Equipo 6
OCP + DIP

**Nivel:** Arquitectónico (máxima complejidad conceptual)

**Enfoque:** Extensibilidad estructural profunda y arquitectura estable.

**Preguntas guía:**

- ¿Se puede cumplir OCP sin DIP?
- ¿Qué ocurre si OCP se aplica superficialmente?
- ¿Cómo fluye la dependencia en una arquitectura limpia?
- ¿Qué decisiones arquitectónicas emergen?
- ¿Cuáles son los costos reales?
  - Más clases
  - Mayor abstracción
  - Complejidad accidental
- ¿En qué contextos NO vale la pena aplicar esta combinación?

## 📦 Entregables (Obligatorios)

### 📁 Repositorio Git
Cada equipo deberá compartir un repositorio que contenga:

- Código antes de aplicar los principios.
- Código después de la refactorización.
- Diagramas de clases correspondientes a ambos estados.

### 📄 Archivo README
Guiado por IA y Debe incluir:

- Dominio elegido (ej. e-commerce, reservas, streaming, logística, etc.).
- Descripción del problema inicial.
- Principios aplicados.
- Justificación breve de decisiones de diseño.

## 🧠 Estructura Mínima de la Exposición
Cada equipo deberá construir una narrativa técnica compuesta por:

1. Definición breve de los principios (máx. 3 minutos).
2. Presentación del problema inicial.
3. Modelo y código que incumplen los principios.
4. Consecuencias del mal diseño.
5. Refactorización aplicando los principios.
6. Comparación antes vs después.
7. Discusión de trade-offs y costos reales.

## ⏱️ Dinámica de la Sesión

- Tiempo total por equipo: 25 minutos
  - 15 minutos de exposición.
  - 10 minutos de discusión técnica.

Cada equipo deberá formular un reto técnico a otro equipo asignado al azar.
El equipo retado deberá responder con base en su diseño presentado.
Los demás equipos actuarán como críticos técnicos.
El docente cerrará cada bloque conectando los principios con una visión arquitectónica más
amplia.

## 📊 Evaluación

**Criterio** **Peso**

- Claridad del problema y refactorización 20%
- Uso efectivo de código y diagramas 20%
- Correcta aplicación de principios 20%
- Discusión técnica y defensa argumentativa 40%

La discusión evaluará la capacidad de:

- Justificar decisiones.
- Reconocer limitaciones.
- Argumentar técnicamente.
- Defender el diseño ante crítica.

## 📌 Consideraciones Finales

- No se evaluará cantidad de código, sino calidad del diseño.
- Se espera actitud crítica, técnica y participativa.
- La profundidad conceptual será proporcional al nivel del equipo.
- No es necesario tener un prototipo sobre el dominio elegido. Un par de clases bien
definidas bastará para ejemplificar muy bien los principios.
