# Principios de Diseño Aplicados - Creator (GRASP) + ISP (Interface Segregation Principle)


## ISP (Interface Segregation Principle)

### Dominio elegido
Gestión de facturación y documentos financieros (facturas tradicionales y facturación electrónica).

### Descripción del problema inicial
El diseño inicial presenta una abstracción `Documento` que obliga a todas las subclases
a implementar tanto `imprimir()` como `enviarPorEmail()`. En la práctica, no todos los
tipos de documento soportan el envío por email (p. ej. una factura en papel). Como resultado
algunas clases (por ejemplo `Factura`) deben implementar `enviarPorEmail()` lanzando
excepciones o con implementaciones inválidas, lo que indica una interfaz demasiado amplia
e insegura.

### Principios aplicados
- ISP (Interface Segregation Principle): separar responsabilidades en interfaces más pequeñas
  (`IImprimir`, `IEnviarPorEmail`) para que cada clase implemente únicamente lo que necesita.

### Justificación breve de decisiones de diseño
- Se introduce `IImprimir` como contrato mínimo para todos los documentos y `IEnviarPorEmail`
  solo para los que realmente soportan envío electrónico (p. ej. `FacturaElectronica`).
- Beneficios:
  - Evita implementaciones forzadas y excepciones en métodos no aplicables.
  - Aumenta la coherencia y expresividad del modelo (cada clase declara lo que puede hacer).
  - Facilita la evolución (añadir nuevas capacidades solo a las clases pertinentes).


## Creator (GRASP) + ISP (Interface Segregation Principle)
### Nivel: Diseño fino de contratos

- Creación responsable y diseño de interfaces cohesionadas.
  - ¿Quién debe crear a quién y por qué?
  - ¿Cómo afecta la creación al acoplamiento?
  
  - ¿Cuándo una interfaz está “gorda"?
    - Cuando agrupa responsabilidades no relacionadas y obliga a implementaciones a
      soportar métodos que no utilizan.
    - Cuando pequeños cambios en la interfaz fuerzan modificaciones en muchas clases.

  - ¿Dividir interfaces siempre mejora el diseño?
    - No necesariamente. Dividir ayuda cuando separa responsabilidades independientes,
      pero una fragmentación excesiva puede aumentar la complejidad. Buscar cohesión y
      un único motivo de cambio para cada interfaz.

  - ¿Factories pueden violar ISP?
    - Sí. Si una factory devuelve tipos con interfaces demasiado amplias o engaña al
      cliente sobre las capacidades reales del objeto, puede forzar a los consumidores
      a depender de métodos innecesarios.

  - ¿Qué smells aparecen?
    - Métodos no usados: operaciones definidas en la interfaz que ninguna implementación
      o cliente utiliza.
    - Implementaciones forzadas: métodos que lanzan excepciones o quedan como "no-op".
    - Creación dispersa: lógica de creación distribuida que dificulta saber qué contrato
      ofrece cada objeto.

  ### Creator (GRASP) — Ejemplo práctico en este repositorio

  #### Dominio elegido
  Gestión de un `CarritoCompra` que agrega `Item`s (líneas de pedido) — dominio sencillo y
  claro para ilustrar responsabilidades de creación.

  #### Descripción del problema inicial
  En la versión `antes` el `CarritoCompra` crea `Item` directamente (`new Item(...)`) al recibir
  una petición `addItem(...)`. Esto mezcla la responsabilidad de agregar items con la lógica
  detallada de construcción de objetos (por ejemplo, valores por defecto, validaciones,
  subtipos), dificultando cambios y pruebas.

  #### Principios aplicados
  - GRASP Creator: asignar la responsabilidad de crear objetos al experto en la información
    necesaria para crear ese objeto. Sin embargo, en el ejemplo "antes" la clase realiza la
    creación por conveniencia, no por ser el mejor responsable.
  - Separación de responsabilidades / Dependency Injection: en el `despues` la creación se
    delega a una fábrica (`ItemFactory`) inyectada, mejorando el acoplamiento y la testabilidad.

  #### Justificación breve de decisiones de diseño
  - En `antes` la decisión de crear con `new` es simple pero provoca acoplamiento fuerte;
    cualquier cambio en `Item` obliga cambios en `CarritoCompra`.
  - En `despues` inyectar una `ItemFactory` permite:
    - Sustituir la lógica de creación (p. ej. para crear subclases, objetos con invariantes, mocks para tests).
    - Mantener a `CarritoCompraRefactor` centrada en la agregación y cálculo del total.

  - ¿Quién debe crear a quién y por qué?
    - Debe crear quien tenga el conocimiento necesario (el "experto en información"). Si la clase necesita detalles internos para construir el objeto, puede tener sentido que cree la instancia. Si la creación depende de políticas, variaciones o es costosa, delegarla a una fábrica o a un builder reduce acoplamiento.

  - ¿Cómo afecta la creación al acoplamiento?
    - Crear directamente con `new` aumenta el acoplamiento con la implementación concreta. Delegar la creación (por interfaz/factory) cambia la dependencia a una abstracción y facilita cambios, pruebas y extensiones.

  - ¿Factories pueden violar ISP?
    - Pueden, indirectamente, si las fábricas devuelven objetos con interfaces demasiado amplias o si ocultan capacidades reales del objeto (por ejemplo, una factory que devuelve un objeto que implementa una interfaz con métodos no aplicables). La responsabilidad es diseñar las fábricas y los tipos que producen con interfaces cohesionadas.

  - ¿Qué smells aparecen en estos ejemplos?
    - Creación rígida: uso de `new` en muchas clases hace difícil cambiar la representación.
    - Clases con múltiples responsabilidades: la clase que crea y administra luego hace más de lo que debe.
    - Dificultad para testear: objetos con `new` hardcodeados requieren técnicas como rewire o pruebas de integración.
    - Interfaces gruesas en objetos producidos por factories pueden ocultar métodos no aplicables.

# Proponer un reto 

[Model C4](https://medium.com/@javiervivanco/el-modelo-c4-de-documentaci%C3%B3n-para-la-arquitectura-de-software-424704528390)

# Crear un nuevo proyecto de Node.js con TypeScript.

1. Crear carpeta del proyecto
mkdir mi-proyecto-ts
cd mi-proyecto-ts

2. Inicializar node
npm init -y

3. Instalar TypeScript y tipos de Node
npm install --save-dev typescript
o
npm install --save-dev typescript @types/node

- ts-node → ejecutar TS sin compilar manualmente
- @types/node → tipado para Node.js

4. Crear configuración TypeScript
npx tsc --init

5. Configurar tsconfig.json
   {
  "compilerOptions": {
    "target": "ES2020",
    "module": "CommonJS",
    "rootDir": "./src",
    "outDir": "./dist",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true
  }
}

rootDir → donde está tu código fuente
outDir → donde se compila
strict → modo profesional (OBLIGATORIO)
esModuleInterop → compatibilidad con módulos

6. Crear estructura del proyecto
mkdir src
touch src/index.ts

ejemplo de código en src/index.ts
function saludar(nombre: string): string {
  return `Hola ${nombre}`;
}
console.log(saludar("Edison"));

7. Compilar
   npx tsc

Se genera
dist/index.js

8. Ejecutar
   node dist/index.js

9. Alternativa rápida (sin compilar manualmente)
   npx ts-node src/index.ts
   npx ts-node src/indexRefactor.ts
