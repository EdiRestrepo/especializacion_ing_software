🚀 PRODUCT BACKLOG – PROYECTO TCC

🔵 TEMA 1: Gestión de Acceso y Seguridad
(Basado en RF01, RF02, RNF05)
Este tema agrupa las iniciativas para garantizar que solo usuarios autorizados accedan a la información confidencial de TCC

🟣 ÉPICA 1.1: Autenticación de usuarios

HU 1: Como usuario, quiero registrarme en la plataforma para tener una cuenta personal.
Tareas: 
Diseñar UI de registro, Crear API de creación de usuario, Validar formato de correo.

HU 1.1.1
Como usuario quiero iniciar sesión  con mis credenciales para acceder a la plataforma
Tareas:
Crear formulario login
Validar credenciales
Integrar API autenticación
Implementar cifrado de contraseñas
Generar tokens de sesión.
Manejar errores

HU 1.1.2
Como sistema quiero validar identidad del usuario para evitar accesos no autorizados
Tareas:
Implementar JWT
Middleware autenticación
Manejo de sesiones

HU 1.1.3
Como usuario quiero recuperar contraseña para restablecer acceso - Como usuario, quiero recuperar mi contraseña para volver a acceder si la olvido
Tareas:
Flujo recuperación - Crear flujo de "olvidé mi contraseña"
Envío correo - Configurar servicio de envío de correos
Actualización contraseña

HU 1.1.4
Como sistema, quiero bloquear el acceso tras 3 intentos fallidos para prevenir ataques maliciosos
Tareas:
Control intentos login - Implementar contador de intentos
Bloqueo temporal - Desarrollar lógica de bloqueo por 1 hora
Notificar al usuario
Logs

HU 5: Como administrador, quiero gestionar los perfiles de usuario para asignar roles específicos.
Tareas: Crear módulo de gestión de perfiles, Definir permisos por rol.

🟣 ÉPICA 1.2: Autorización de usuarios y Roles

HU 1.2.1
Como sistema quiero controlar acceso por roles (cliente / empleado)
Tareas:
Definir roles
Middleware autorización

HU 1.2.2
Como cliente, quiero ver solo mis propios envíos para proteger mi privacidad
Tareas:
Filtrado backend
Validación permisos

HU 1.2.3
Como empleado, quiero ver los envíos de todos los clientes para dar soporte
Tareas:
Configuración permisos

HU 1.2.4
Como sistema quiero proteger datos sensibles
Tareas:
Encriptación
HTTPS

HU 3: Como sistema, quiero validar permisos en cada petición a la API.
HU 4: Como administrador, quiero auditar quién accedió a qué información.

🟣 ÉPICA 1.3: Seguridad y protección

HU 1.3.1
Como sistema quiero proteger contra ataques
Tareas:
Validación inputs
Anti SQL injection

HU 1.3.2
Como sistema quiero detectar accesos sospechosos
Tareas:
Logs seguridad
Alertas

HU 1.3.3
Como sistema quiero registrar auditoría
Tareas:
Registro eventos
Consulta logs

HU 1: Como sistema, quiero cifrar los datos en tránsito y en reposo para cumplir con estándares de seguridad

HU 2: Como sistema, quiero implementar detección de bots para evitar escaneos masivos.

HU 3: Como administrador, quiero configurar certificados SSL/TLS en el servidor.

HU 4: Como sistema, quiero realizar escaneos de vulnerabilidades periódicos

🔵 TEMA 2: Gestión y Consulta de Envíos
(RF03, RF06, RF11)

🟣 ÉPICA 2.1: Consulta de estado de envíos

HU 1: Como cliente, quiero ver una lista de mis envíos activos para un seguimiento rápido
Tareas: Crear componente de lista, Integrar con API de pedidos, Implementar filtros.

HU 2: Como cliente, quiero ver el detalle de un envío incluyendo historial de estados

HU 3: Como cliente, quiero ver la ubicación actual del envío en un mapa.

HU 2.1.1
Como cliente quiero consultar el estado de mi envío
Tareas:
API consulta
UI consulta

HU 2.1.2
Como cliente quiero ver historial del envío
Tareas:
Modelo historial
Vista historial

HU 2.1.3
Como cliente quiero ver detalles completos del envío
Tareas:
Vista detalle
Integración datos

HU 2.1.4
Como cliente quiero buscar por número de guía
Tareas:
Campo búsqueda
Backend búsqueda

HU 1: Como empleado de SAC, quiero buscar pedidos por diferentes criterios (ID, fecha, cliente)

HU 3: Como empleado, quiero agregar comentarios internos a los pedidos

HU 4: Como sistema, quiero mostrar un historial de cambios realizados por los empleados.

🟣 ÉPICA 2.2: Sincronización y Actualización de información

HU 2.2.1
Como sistema quiero actualizar estados automáticamente
Tareas:
Jobs sincronización
API estados

HU 2.2.2
Como sistema quiero mantener información actualizada - Como sistema, quiero programar tareas de sincronización periódica de estados logísticos.
Tareas:
Integración APIs
Validación datos

HU 2.2.3
Como usuario, quiero ver la información actualizada en tiempo real
Tareas:
Refresco UI
Optimización consultas

HU 4: Como sistema, quiero manejar errores de conexión con fuentes externas sin interrumpir el servicio.

🟣 ÉPICA 2.3: Trazabilidad operativa

HU 2.3.1
Como sistema quiero registrar cada cambio del envío
Tareas:
Logs trazabilidad
Persistencia

HU 2.3.2
Como usuario quiero ver cambios del envío
Tareas:
UI trazabilidad

HU 2.3.3
Como sistema quiero garantizar consistencia de datos
Tareas:
Validaciones
Reglas negocio

🔵 TEMA 3: Centralización e Integración de Información
(RF09, Objetivos del proyecto)

🟣 ÉPICA 3.1: Integración de fuentes

HU 3.1.1
Como sistema quiero integrar múltiples fuentes de datos - Como sistema, quiero conectarme a las bases de datos de TCC para extraer información de pedidos
Tareas:
Configurar cadenas de conexión, Crear modelos de datos, Implementar capas de acceso a datos
APIs externas
Normalización

HU 3.1.2
Como sistema quiero consumir servicios logísticos - Como sistema, quiero consumir APIs externas de transportistas para actualizar estados internacionales
Tareas:
Cliente HTTP
Manejo errores

HU 3.1.3
Como sistema quiero consolidar información - Como sistema, quiero unificar los diferentes formatos de datos en una estructura común.
Tareas:
Modelo unificado
Persistencia

🟣 ÉPICA 3.2: Centralización

HU 3.2.1
Como sistema quiero almacenar toda la información en un solo sistema
Tareas:
Diseño base datos
Integración

HU 3.2.2
Como usuario quiero consultar información centralizada
Tareas:
UI consolidada

🟣 ÉPICA 3.3: Gestión documental
(RF13)

HU 3.3.1
Como usuario quiero consultar documentos del envío - Como cliente, quiero consultar documentos adjuntos (facturas, guías) de mis envíos.
Tareas:
Subida documentos
Consulta documentos

HU 3.3.2
Como sistema quiero almacenar documentos
Tareas:
Storage
Seguridad

HU 1: Como cliente, quiero descargar el resumen de mi pedido en formato PDF
HU 3: Como empleado, quiero generar reportes de satisfacción de clientes.
HU 4: Como cliente, quiero exportar mi historial de envíos a Excel.

🔵 TEMA 4: Comunicación y Experiencia del Usuario - Servicios de Notificación y Valor Agregado
(RF05, RF07, RF08, RF10, RNF02, RNF03)

🟣 ÉPICA 4.1: Sistema de Notificaciones Automáticas

HU 1: Como cliente, quiero recibir un correo electrónico cuando mi envío cambie de estado
Tareas: Configurar servidor SMTP, Crear plantillas de correo, Desarrollar trigger de eventos.

HU 2: Como cliente, quiero activar/desactivar tipos específicos de notificaciones.

HU 4.1.1
Como cliente quiero recibir notificaciones de estado
Tareas:
SMTP
Templates

HU 4.1.2
Como sistema quiero enviar notificaciones automáticas
Tareas:
Eventos backend

HU 4: Como sistema, quiero reintentar el envío de notificaciones fallidas.

🟣 ÉPICA 4.2: Interacción del usuario

HU 4.2.1
Como usuario quiero comentar envíos
Tareas:
CRUD comentarios

HU 4.2.2
Como usuario quiero ver comentarios
Tareas:
UI comentarios

🟣 ÉPICA 4.3: Visualización

HU 4.3.1
Como usuario quiero ver costos del envío - Como cliente, quiero visualizar los costos asociados a mi envío
Tareas:
UI costos

HU 4.3.2
Como usuario quiero ver estimación de entrega
Tareas:
Algoritmo estimación
UI

HU 4.3.3
Como usuario quiero dashboard estadístico
Tareas:
Gráficas
Backend métricas

Épica 2: Inteligencia y Predicción (RF-07, RF-14)

HU 1: Como cliente, quiero ver una estimación de la fecha de entrega basada en datos históricos

HU 2: Como administrador, quiero ver un dashboard estadístico con las tendencias de envíos

HU 3: Como sistema, quiero alertar sobre posibles retrasos detectados en la cadena logística.

HU 4: Como cliente, quiero recibir recomendaciones para optimizar mis tiempos de envío.

Épica 3: Canal de Comunicación (RF-08)
HU 1: Como cliente, quiero dejar comentarios en un envío para resolver dudas

HU 2: Como empleado, quiero responder a los comentarios de los clientes directamente en la plataforma.

HU 3: Como cliente, quiero recibir una notificación cuando un empleado responda mi duda.

HU 4: Como sistema, quiero categorizar los comentarios por tipo (queja, duda, sugerencia).

🔵 TEMA 5: Calidad del Sistema (No Funcionales) - Infraestructura, Rendimiento y Alta Disponibilidad
(RNF01, RNF04, RNF06 + alta disponibilidad)

🟣 ÉPICA 5.1: Alta disponibilidad - Implementación de Alta Disponibilidad

HU 5.1.1
Como sistema quiero estar disponible 24/7 - Como organización, quiero que el sistema tenga una disponibilidad del 99.9% (24/7)
Tareas: Configurar balanceadores de carga, Implementar clusters de servidores, Configurar bases de datos en espejo.
Tareas:
Configurar infraestructura cloud
Health checks

HU 5.1.2
Como sistema quiero tolerancia a fallos
Tareas:
Failover
Replicación

HU 5.1.3
Como sistema quiero recuperación ante fallos
Tareas:
Backups
Restore

HU 2: Como sistema, quiero realizar migraciones de base de datos en menos de 5 minutos para minimizar afectación

HU 3: Como sistema, quiero tener un mecanismo de failover automático ante caídas de servidor.

HU 4: Como administrador, quiero contar con un plan de respaldo y recuperación ante desastres.

HU 5: Como sistema, quiero realizar copias de seguridad automáticas diariamente.

🟣 ÉPICA 5.2: Rendimiento - Optimización de Rendimiento

HU 5.2.1
Como sistema quiero soportar múltiples usuarios
Tareas:
Pruebas carga
Escalabilidad

HU 5.2.2
Como sistema quiero tiempos de respuesta bajos
Tareas:
Optimización queries
Cache

HU 1: Como usuario, quiero que las consultas de información no tarden más de 20 segundos

HU 2: Como sistema, quiero soportar hasta 4500 empleados concurrentes sin degradación

HU 3: Como desarrollador, quiero implementar caché de datos para las consultas más frecuentes.

HU 4: Como sistema, quiero optimizar las consultas SQL para reducir el tiempo de carga.

🟣 ÉPICA 5.3: Usabilidad y portabilidad

HU 5.3.1
Como usuario quiero interfaz amigable - Como usuario, quiero que la interfaz sea intuitiva y fácil de usar
Tareas:
UX/UI
Pruebas usabilidad

HU 5.3.2
Como usuario quiero usar la app en diferentes dispositivos - Como usuario móvil, quiero que la plataforma sea responsive para consultarla desde mi celular
Tareas:
Responsive
Testing cross-device

Épica 3: Mantenibilidad e Interoperabilidad

HU 1: Como desarrollador, quiero implementar una arquitectura de microservicios para facilitar el mantenimiento.

HU 2: Como administrador, quiero monitorizar la salud del sistema (Health Checks) en tiempo real.

HU 3: Como sistema, quiero facilitar la integración con nuevos operadores logísticos en el futuro.

HU 4: Como desarrollador, quiero tener un entorno de pruebas idéntico al de producción.