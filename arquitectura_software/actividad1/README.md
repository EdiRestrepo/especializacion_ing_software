# Principios de Diseño Aplicados - Creator (GRASP) + ISP (Interface Segregation Principle)

## Entregable README
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
  
## Estructura de la Exposición
1. Definición breve de los principios (máx. 3 minutos).
2. Presentación del problema inicial.
3. Modelo y código que incumplen los principios.
4. Consecuencias del mal diseño.
5. Refactorización aplicando los principios.
6. Comparación antes vs después.
7. Discusión de trade-offs y costos reales.


# Repositorio Git
Código antes de aplicar los principios.
Código después de la refactorización.
Diagramas de clases correspondientes a ambos estados.
[Model C4](https://medium.com/@javiervivanco/el-modelo-c4-de-documentaci%C3%B3n-para-la-arquitectura-de-software-424704528390)



# Proponer un reto 
- Código -> que evidencie problemas de diseño y su posterior refactorización.
- Diagramas de clases antes y después de aplicar los principios.
  
- Escenario problematico
- ¿Por que hay un problema de diseño?
- IA que nos acerque a un escenario realista, con flujo de codigo, clases, métodos, etc.

- Discusión técnica sobre decisiones, compensaciones y limitaciones.
- Argumentación estructural frente a preguntas críticas.



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
