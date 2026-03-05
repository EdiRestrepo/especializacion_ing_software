# Autenticación de Auth0 con Angular 

1. Selección del lenguaje: Angular  

 
2. Implementación del flujo de autenticación: 

- Configuración inicial del proyecto.
`npx skills add auth0/agent-skills --skill auth0-quickstart --skill auth0-angular`
`npx @angular/cli@latest new auth0-angular --routing=true --style=css` 
`cd auth0-angular` 
`npm install @auth0/auth0-angular`  

creacion y configuración del archivo environment.ts con las credenciales de Auth0.
configuracion de las URLs de redirección en el panel de Auth0.
creacion y configuración del main component para manejar el flujo de autenticación (login, logout, mostrar información del usuario, etc.).

creacion de los archivos login.component.ts y logout.component.ts para manejar las acciones de inicio y cierre de sesión respectivamente.
cracion del archivo profile.component.ts para mostrar la información del usuario autenticado.

configuracion del archivo app.ts para incluir los componentes y manejar las rutas correspondientes.

por ultimo ejecutar el proyecto con `ng serve` y verificar el funcionamiento del flujo de autenticación.


- Integración con Auth0.  

- Inicio de sesión (Login).  

- Cierre de sesión (Logout). 

1. Evidencias: PDF

- Configuración en el panel de Auth0. 

- Código relevante de la implementación. 

- Funcionamiento correcto del flujo (login exitoso, redirecciones, tokens, etc.). 

 
4. Documentación de dificultades: 

- Problemas o errores encontrados durante la implementación. 

- Cómo se solucionaron. 

- Recursos utilizados (documentación oficial, foros, pruebas realizadas, etc.). 

- Aprendizajes obtenidos durante el proceso. 


