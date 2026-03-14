# Modularidad y Organización

- Un proyecto bien organizado es aquel en el que cualquier desarrollador puede encontrar lo que busca de forma intuitiva. La modularidad no es solo estructura de carpetas: es un contrato de separación de responsabilidades que permite que equipos trabajen en paralelo sin pisarse.

## Principios de modularidad

Cohesión y acoplamiento

El objetivo es alta cohesión(elementos relacionados juntos) y bajo acoplamiento (modulos independientes entre sí). Un módumo debe poder reemplazarse.

## Errores comunes en construcción de software

Conocer los antipatrones mas frecuentes es tan importante como conocer las buenas practicas. 
Estos errores se repiten en proyectos de todos los tamaños y pueden convertirse en deuda técnica costosísima si no se atajan a tiempo.

## Los 6 antipatrones más frecuentes.

1. Código spagueti
2. Magic Numbers y strings
3. Manejo de errores ignorado
4. Duplicación silenciosa
5. Clases dios (God Objects)
6. Hardcoding de configuración

## 12 Factor App

0 dependencias ocultas
3x ambientes consistentes
100% config externalizada
 escalabilidad horizontal

La metodología 12-Factor App, publicada por Heroku, define doce principios para construir aplicaciones software-as-a-service modernas que sean portables, resilentes y listas para desplegar en cualquier plataforma cloud. Es el estándar de facto para aplicaciones nativas

   1. Codebase -> Un repositorio, múltiples despliegues. Nunca código compartido entre apps vía copiar/pegar
   2. Dependencies -> Declara y aísla explicitamente todas las dependencias usando un gestor (npm, pip, maven)
   3. Config -> Almacena la configuración en variables de entorno, nunca en el código fuente.
   4. Backing Services -> Trata bases de datos, colas, y servicios como recursos adjuntos intercambiables
   5. Build, Release, Run -> Separa estrictamente las etapas de construcción, empaquetado y ejecución. Nunca modifiques código en producción
   6. Processes -> Ejecuta la app como uno o más procesos stateless. El stado persiste solo en servicios externos.
   7. Port Binding -> La app es completamente autónoma y expone sus servicios vinculando a un puerto (no depende de un servidor externo inyectado)
   8. Concurrency -> Escala horizontalmente añadiendo más procesos (scale out), no verticalmente aumentando recursos del proceso
   9. Disposability -> Los procesos arrancan rápido y se detienen gracefully. Diseña para fallos: la app debe sobrevivir a reinicios inesperados
   10. Dev/Prod Parity -> Mantén los entornos de desarrollo, staging y producción tan similares como sea posible para eliminar sorpresa al desplegar
   11. Logs -> Trata los logs como flujos de eventos. La app escribe a stdout; la infraestructura se encarga de su captura y almacenamiento
   12. Admin Processes -> Ejecuta las tareas administrativas (migraciones, scripts únicos) como procesos puntuales en el mismo entorno de producción
