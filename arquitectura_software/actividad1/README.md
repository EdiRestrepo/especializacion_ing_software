# Principios de Diseño Aplicados

## Entregable README
### Dominio elegido (ej. e-commerce, reservas, streaming, logística, etc.).
### Descripción del problema inicial.
### Principios aplicados.
### Justificación breve de decisiones de diseño.

## Creator (GRASP) + ISP (Interface Segregation Principle)
### Nivel: Diseño fino de contratos

- Creación responsable y diseño de interfaces cohesionadas.
  - ¿Quién debe crear a quién y por qué?
  - ¿Cómo afecta la creación al acoplamiento?
  - ¿Cuándo una interfaz está “gorda”?
  - ¿Dividir interfaces siempre mejora el diseño?
  - ¿Factories pueden violar ISP?
  - ¿Qué smells aparecen?
    - Métodos no usados
    - Implementaciones forzadas
    - Creación dispersa
  
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
