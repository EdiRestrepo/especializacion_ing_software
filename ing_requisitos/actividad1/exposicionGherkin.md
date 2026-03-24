# Principios de BDD -> Behavior-Driven-Development

- Metodolopgía agilística basada en múltiples partes interesadas, múltiples escalas y alta automatización.
- Describe un ciclo de iteraciones con entregaas bien definidas, proporcionando un software funcional y de alta calidad
  Dan North

- BDD trata sobre implementar una aplicación describiendo su comportamiento desde la perspectiva de sus stakeholders
  Dan North

Es un conjunto de prácticas de ingeniería de software diseñado con el fin de ayudar a los equipos a crear y entregar software con más valor, mayor calidad y en un tiempo más rápido.

Se basa en prácticas de Agile y Lean que incluyen el desarrollo guiado por pruebas(TDD) y el Diseño Dirigido por Dominio (DDD). Pero el aspecto más importante de BDD es la búsqueda de un lenguaje común, con oraciones simples y estructuras que facilitan la comunicación entre las distintas partes del proyecto: miembros del equipo técnico y las partes interesadas de negocio.

BDD trata de identificar el comportamiento deseado de un requerimiento, que se conocerá con el nombre de Feature. De tal manera que acaban sirviendo como requisitos/criterios de aceptación del producto en la fase previa de desarrollo y sus casos de prueba en la fase posterior al desarrollo. Para ello, se apoyan en lenguajes como Gherkin, uno de los más populares, que nos facilita la escritura de especificaciones formales de compartamiento utilizando sentencias como "Given-When-Then".  Además, con la ayuda de herramientas de automatización, estas especificaciones
pueden convertirse fácilmente en casos de prueba automatizados.

- Especificación enfocada a entregar valor. -Cuando alguien dice "BDD", inmediatamente piensa en "Given-When-Then".
- Enfoque en el comportamiento. Los escenarios de comportamiento son la pieda angular de BDD
- Refinamiento del proceso Agile, no una revisión. Formaliza los criterios de aceptación y la cobertura de las pruebas.
- Cambio de paradigma. Los comportamientos se convierten en el foco principal del equipo

## Beneficios
- Trabajo en equipo. cualquiera puede escribir los escenarios de BDD (Reuniones the Three Amigos)
- Claridad. Los escenarios se centran en el comportamiento esperado del producto, lo que resulta en menos ambiguedad.
- Simplicidad. Requerimientos = Criterios de Aceptación = Test cases. Lo que acelera la automatización.
- Testing desde el principio (Shift-left). La definici´n de casos de prueba se convierte inherentemente en parte de la preparación.
- Artefactos. Los escenarios forman una colección de casos de prueba. Cualquier prueba no automatizada se puede agregar a un  trabajo pendiente de automatización conocido.
- Automatización: Los marcos BDD facilitan la conversión de escenarios en pruebas atumatizadas.
- Test-Driven. La mayoria de los marcos BDD pueden ejecutar escenarios para fallar hasta que se implemente la función.
- Reutilización de código. Los pasos "Given-When-Then" se pueden reutilizar entre escenarios.
- Parametrización. Los pasos se pueden parametrizar e incluso se pueden utilizar tablas de ejemplo que facilitan la ejecución del mismo escenario con diferentes convinaciones de entrada. 
- Adaptabilidad. Los escenarios son fáciles de reescribir a medida que cambian los productos y las funciones.
  
Se reduce tiempo y esfuerzo en comportamientos o especificaciones que no aportan valor, además agiliza los cambios.
Como consecuencia se reducen los costes, ya que reduce tiempo de entrega y mejora calidadd

BDD facilida el cambio o ampliación en las especificaciones o comportamientos, pero ademas como la documentación está viva, ayuda a que todos entienda lo que hace la aplicación. y el conjunto integral de pruebas derivadas de ello contribuye a reducir los riesgos causados por nuevos cambios.

Además gracias a la automatización de las pruebas se pueden acelerar las puestas en producción. Este tipo de pruebas de aceptación se pueden utilizar como punto de partida, evitando así las pruebas manuales antes de cada paso a producción. 

## Feature vs Historias

Segun Feguson Smart, las Historias de Usuario se parecen a las Features. Las HU pueden ayudar a planificar y organizar como se va a construir una Feature.
En algunos equipos las Features estan representadas com HA de más alto nivel, en otros equipos no les resulta necesario romper cada Feature en  historias más pequeños. 

- Una Feature -> es una funcionalidad del software que se entrega a usuarios finales o a otras partes interesadas para alcanzar los objetivos de negocio
- Un HU es una herramienta de planificación que ayuda a profundizar en los detalles de lo que se necesita para ofrecer una caracteristica particular.
  
Las HA estan planeadas como artefactos. son una forma de organizar el trabajo para ofrecer una función o necesida, pero al usuario final no le interesa la forma de organizar las cosas para conseguir la Feature con tal de que esta se entregue.
Una vez que la Feature se entregue la HU puede darse por termianda.


# Gherkin -> 
Es uno de los lenguajes más populares para escribir especificaciones formales de comportamiento, sin entregar en el detalle técnico de la implementación.

Técnicamente es un lenguaje de Dominio Especifico (DSL) muy cercano al lenguaje natural.

Gracias al lenguaje Gherkin, se dispone de una sencilla manera de escribir cómo se debe comportarse una funcionalidad a implementar, validar y testear, fácil de entender para todas, las partes: técnicos y negocio. Además facilita la automatización de preubas ya que estas especificaciones pueden reutilizarse como pruebas ejecutables y entendidas por todos. ayuda a qeu la documentación permanezca viva y tiene soporte por mas de 60 idiomas.
 
## Sintaxis y estructura de una feature

Gherkin hace uso de palabras reservadas: Feture - Scenario - Given - When - And - But - Then - Sceneario - Outline - Examples - Background

Feature -> título de la funcionalidad que se va a probar.
Scenario -> Describe un caso específico de comportamiento dentro de una funcionalidad.
Given -> Define las precondiciones o el contexto inicial antes de ejecutar la acción principal
And -> Permite agregar más condiciones o pasos adicionales al mismo tipo de paso anterior (más Given, When o Then).
When -> Describe la acción o evento que ejecuta el usuario o el sistema. Es el disparador del comportamiento que se quiere probar.
Palabra reservada	Traducción	Significado
Feature	Característica / Funcionalidad	Describe una funcionalidad del sistema desde la perspectiva del negocio. Representa el título de la funcionalidad que se va a probar.
Scenario	Escenario	Describe un caso específico de comportamiento dentro de una funcionalidad. Cada escenario representa una situación concreta que se quiere validar.
Given	Dado	Define las precondiciones o el contexto inicial antes de ejecutar la acción principal. Explica en qué estado está el sistema.
And	Y	Permite agregar más condiciones o pasos adicionales al mismo tipo de paso anterior (más Given, When o Then).
When	Cuando	Describe la acción o evento que ejecuta el usuario o el sistema. Es el disparador del comportamiento que se quiere probar.
Then -> Describe el resultado esperado después de ejecutar la acción

Background ->  Permite anañidir cierto contexto a los escenarios y para evitar la repetición del mismo Given  en los escenarios de una misma Feature.
Scenario Outline -> Ejecuta un mismo escenario varias veces con diferentes combinaciones.

Ejemplo sencillo
``` Feature: Login de usuario

Scenario: Usuario inicia sesión correctamente
  Given el usuario está en la página de login
  And tiene una cuenta registrada
  When ingresa su usuario y contraseña correctos
  Then el sistema muestra el panel principal 
  ``` 
Interpretación:

Feature → Funcionalidad del sistema (Login)
Scenario → Caso de uso específico
Given → Contexto inicial
When → Acción del usuario
Then → Resultado esperado
And → Condiciones adicionales

- Algunas recomenciones a la hora de escribir features en Gherkin:

  * Las features de Gherkin deben probar partes y no la aplicación completa.
  * Espersados en el mismo lenguaje que use negocio  
  * Establecer una buena organización de las features.
  * Los escenarios deben ser lo más independientes posible. 

Modo imperativo
Given I open a browser
And I navigate to "http://example.com/login"
When I type in the username field "bob97"
And I type in the password field "F1d0"
And I click on Submit button
Then I should see the message "Welcome Back Bob"

Modo declarativo
Given I am on the Login Page
When I log in with correct credentials "bob97" and "F1d0"
Then I should see a welcome message

## Escritura tradicional vs Gherkin

Un error común a la hora de escribir especificaciones con Gherkin es no hacerlo con una mentalidad enfocada en el comportamiento, escribiendo pruebas funcionales basadas en procedimientos "tradicionales": Instrucciones paso a paso con acciones y resultados esperados. Este tipo de pruebas muchas veces son imperativas y crean flujos a través del sistema que cubren múltiples comportamientos, resultando ser innecesariamente largos, de costoso mantenimiento y consfusos.

Ejem. prueba que busca imágenes de galletas en Google:

```
Abra un navegador web.
    El navegador web se abre correctamente.
Navegue a https://www.google.com/.
    La página web se carga correctamente y la imagen de Google está visible.
Ingrese "galletas" en la barra de búsqueda.
    Los enlaces relacionados con "panda" se muestran en la página de resultados.
Haga clic en el enlace "Imágenes" en la parte superior de la página de resultados.
    Las imágenes relacionadas con "galletas" se muestran en la página de resultados.
```
Error al traducir con Gherkin.

 ```       
BAD EXAMPLE! Do not copy.
Feature: Búsqueda en Google
Scenario: Búsqueda de imágenes en Google
    Given el usuario abre el navegador
    And el usuario navega a "https://www.google.com/"
    When el usuario introduce "galletas" en la barra del buscador
    Then los enlaces relacionados con "galletas" se muestran en la página de resultados
    When el usuario hace click en el link "Imagenes" en la parte superior de la página de resultados
    Then las imágenes relacionadas con "galletas" se muestran en la página de resultados 
 ```

Este escenario no esta enfocado en el comportamiento, simplemente se han añadido las palabras clave delante de cada paso de una prueba tradicional.
Los primeros pasos no están centrados en el comportamiento, simplemente van a google y pueden ser prescindibles podria cambiarse po ralgo como:

Given un navegador web en la página de inicio de Google

En los siguientes pasos, nos encontramos con dos pares de When-Then, cada par de When-Then denota un comportamiento individual, por lo que se estarián cubriendo dos comportamientos en una misma prueba:

1. Buscar en la barra de búsquedas
2. Realizar una búsqueda de imágenes

Uno de los principios de Gherkin y BDD, es qeu cada escenario cubra un solo comportamiento. Por lo tanto, debería haber dos escenarios en lugar de uno. Además esta división también nos dice que se está cubriendo un comportamiento inncesario, que podría estar cubierto en otro escenario: La búsqueda desde la barra de búsquedas

Se debe respetar en todo momento la integridad de los tipos de pasos:
Given establece el estado inicial
When realiza una acción
Then verifica los resultados.

La feature por lo tanto podría quedarse escrita de la siguiente manera:

```
Feature: Búsqueda en Google

Scenario: Búsqueda desde la barra de búsquedas
    Given un navegador web en la página de inicio de Google
    When el usuario introduce "galletas" en la barra del buscador
    Then los enlaces relacionados con "galletas" se muestran en la página de resultados

Scenario: Búsqueda de imágenes
    Given los resultados de "galletas" de una búsqueda de Google
    When el usuario hace click en el link "Imagenes" en la parte superior de la página de resultados
    Then las imágenes relacionadas con "galletas" se muestran en la página de resultados
```

## Reglas de estilo
> Centrar la feature en las necesidades del cliente.

> Limitar a una feature por archivo de feature. Esto facilita la búsqueda de features.

> Limitar el número de scenarios por feature. Una buena medida es una docena de escenarios por feature.

> Limitar el número de pasos por escenario a menos de diez.

> Limitar la longitud de caracteres de cada paso. (Longitud máxima de 256 caracteres)

> Utilizar la ortografía adecuada.

> Usar la gramática adecuada.

> Escribir con mayúscula la primera palabra de las palabras clave de Gherkin.

> Escribir con mayúscula la primera palabra en los títulos.

> No escribir en mayúsculas las palabras en las frases del paso a paso a menos que sean nombres propios.

> No usar puntuación (específicamente puntos y comas) al final de las frases de paso a paso.

> Usar espacios simples entre palabras.

> Utilizar la sangría para el contenido debajo de cada encabezado de sección.

> Separar las features y los scenarios con una o dos líneas en blanco.

> Separar las tablas de ejemplos por una línea en blanco.

> No separar los pasos dentro de un escenario con líneas en blanco.

> Separar los delimitadores de las tablas ("|") de manera uniforme.

> Adoptar un conjunto estándar de nombres de etiquetas. Evitar los duplicados.

> Escribir todos los nombres de las etiquetas en minúsculas y usar guiones ("-") para separar las palabras.

> Limitar la longitud de los nombres de las etiquetas. (No superar los 50 caracteres)

> La secuencia de verbos de un escenario debe corresponder con el siguiente diagrama:

Comportamiento

Escenario

Given → When → Then

Datos

> En un background se contemplan únicamente los verbos Given. Aunque se podrá hacer uso del verbo When, única y exclusivamente porque es un escenario especial que se ejecuta antes de la ejecución del resto de escenarios de la feature.

> El uso de And o But debe ser precedido siempre por un verbo (Given, When, Then)

# Buenas practicas Gherkin ->

La especificación o features deben ser un resumen de los casos más importantes/críticos de la funcionalidad (en los que existe el riesgo de ser mal interpretado y/o los casos que representen un fallo permanente), esto no significa que la especificación deba reflejar todo el detalle del comportamiento, por lo que ésta no es toda la especificación existente, hay especificaciones mediante otros soportes como documentos de reglas, wireframes, maquetas, etc., y todo el conjunto de especificaciones conforman el DoR de una Feature/UserStory.

Las features son una documentación viva, por lo que habrá que aplicar consideraciones como que los escenarios que se especifiquen deben ser entendibles, mantenibles y automatizables, por lo que si no se cumplen estas condiciones y existe otro formato donde se entiende mejor, entonces úselo.

## Etiquetado

Con el objetivo de poder identificar las diferentes features y/o escenarios entre todas las especificaciones existentes haremos uso del etiquetado (tagging), cuya sintaxis es la siguiente:

@<feature-name>

Algunos ejemplos de etiquetas utilizadas pueden ser las siguientes:

@happyPath     @to-implement     @slow
@pre           @fast             @core
@pro           @all-env
@smokeTest     @qa               @ignoring

## Cobertura

Como cobertura mínima, debe especificarse aquel escenario que representa el @happyPath de una funcionalidad, es decir, el escenario que prueba el objetivo por el que fue desarrollada la funcionalidad, así como los escenarios que tienen un valor crítico/riesgo de cara a negocio.

El escenario @happyPath se considera como el más flexible cuando tengamos la necesidad de agregar más steps que para negocio sean importantes y aporte valor resaltar la operativa (escenario más largo).

## Automatización
Cuando se automatice un escenario debe garantizarse su consecuente OK en los entornos de integración continua. Se pueden automatizar con la mayor cantidad de alternativas posibles (p.e contra servicios reales, servicios moqueados). Se recomienda que en la medida de lo posible sea contra entornos lo más parecidos al entorno final, en el caso de que no se pueda dar un OK en dichos entornos, entonces se recomienda la virtualización.

Para virtualizar escenarios se debe tomar en cuenta el criterio riesgo vs. coste. Es decir, si para automatizar un escenario es necesario virtualizar un servicio, debe considerarse la inversión de tiempo que toma hacerlo, la criticidad del escenario que se quiere automatizar, consultas a tablas, servidores, hosts, etc. Con esta información se podrá determinar si existen casos en los que considerar hacer la prueba manual. Por ejemplo, si se tiene un escenario donde automatizar una consulta a tablas, hosts, obtener algún fichero requiere mucho tiempo de cara a la prueba manual, entonces debe considerarse si se automatiza o no.

Se debe intentar que todas aquellas características de los productos y usuarios que se definan en el Given no se especifiquen explícitamente. Sólo se utilizarán datos concretos si se puede asegurar su mantenibilidad entre entornos; en cualquier otro caso se debe delegar la tarea a la implementación del step.

## Ejemplo de mal uso de Gherkin

Imaginar que se dispone de un sitio web y se quiere que los usuarios
puedan acceder a su espacio personal con un usuario y una contraseña.

La feature para este ejemplo podría ser:

# BAD EXAMPLE! Do not copy.

```
Feature: Login con usuario y contraseña de un
usuario del portal web
    De cara a acceder al espacio personal de la web
    Como usuario
    Quiero hacer login con mi usuario y mi contraseña

Scenario: Login correcto
    Given un usuario registrado en el sistema
    When hace login con su usuario y contraseña
    Then debería tener acceso a su espacio personal

Scenario: Login incorrecto
    Given un usuario registrado en el sistema
    When hace login con su usuario y contraseña incorrecta
    Then no debería tener acceso a su espacio personal
```

* Reescritura de ese mismo escenario correctamente

Los escenarios son muy genéricos, y se puede identificar una
precondición en los escenarios, para la cuál se puede utilizar un
Background. Por lo tanto refactorizando esa feature se podría tener lo
siguiente:

# BAD EXAMPLE! Do not copy.
```
Feature: Login con usuario y contraseña de un
usuario del portal web

(...)

Scenario: Login correcto
    Given un usuario registrado en el sistema
    When hace login con su usuario y contraseña
    Then debería tener acceso a su espacio personal

Scenario: Login incorrecto
    Given un usuario registrado en el sistema
    When hace login con su usuario y contraseña
    incorrecta
    Then no debería tener acceso a su espacio
    personal ??
```

```
Feature: Login con usuario y contraseña de un
usuario del portal web

(...)

Background:
    Given Pepe es un usuario registrado del
    portal web
    And Pepe esta registrado con contraseña
    'secret'

Scenario: Login correcto
    When Pepe hace login con contraseña
    'secret'
    Then debería tener acceso a su espacio
    personal

Scenario: Login incorrecto
    When Pepe hace login con contraseña 'wrong'
    Then debería mostrar el error de contraseña incorrecta
```  
  
## Especificaciones entendibles, mantenibles y automatizables

Todo escenario que se especifique debe ser automatizado, por lo que se debe especificar aquellos escenarios que aporten mayor valor a negocio y que mitiguen un riesgo o cambio de un coste asumible (criterio riesgo vs coste). Una vez tomadas estas premisas en cuenta, todo lo que especifiquemos debe ser entendible, mantenible y automatizable.

### Entendible

Todo lo que se especifique debe ser descrito con frases claras y concisas, de forma que sea entendible. A continuación presentamos un ejemplo de un escenario que no es entendible:

# BAD EXAMPLE! Do not copy.

Scenario Outline: Usuario con acceso administrador cuando el acceso de administrador esta a nivel de aplicación y pantalla

    Given el usuario inicia sesión con "UserManager"
    And el acceso administrador está activo
    And el acceso administrador <pantalla> está activo
    And acceso <pantalla> después de hacer login
    And la configuración del administrador por la pantalla de servicio responde después
    And verifica la <pantalla>
    And verifica que no tiene acceso al botón administrador
    When la configuración del administrador por pantalla responde
    Then verifica que tiene acceso al botón administrador

Escribir escenarios con muchos Steps puede generar confusión con lo que se intenta expresar y hace que la persona que lo lea pierda el foco, no se trata de escribir en lenguaje natural lo que escribirías en un lenguaje de programación. Es mucho más entendible escribir escenarios concretos y expresados a nivel de negocio, como se puede ver en el siguiente ejemplo:

Scenario: Calcular el total de crédito y de débito
    Given tiene una cuenta "corriente con 1000 EUR"
    And tiene una cuenta "débito con 200 EUR"
    And tiene una cuenta "débito con 150 EUR"
    When el cliente consulta en su posición global
    Then tiene un débito de "350 EUR"
    And tiene un crédito de "1000 EUR"

Notar que en el ejemplo las cuentas son referenciadas con alias, ésto se recomienda debido a que si el dato concreto (en este caso la cuenta) cambia, sólo tendremos que actualizar el valor del alias en un fichero, el nombre del alias debe intentar que sea de referencia.

### Mantenible

Un escenario es mantenible cuando un cambio en el software no significa un cambio exponencial de escenarios. A continuación se presenta un ejemplo de escenarios operativos que no son mantenibles:

# BAD EXAMPLE! Do not copy.

Scenario: Un usuario solicita un nuevo pin temporal para una tarjeta de crédito mediante la modalidad SMS
    Given soy un usuario con login "0019-123456789A" y password "123456"
    And se me envía la otp con valor "123456"
    And tengo un producto contratado <tipo>, <alias>, <entidad-plasticos> y <codigo-estandar>
    And creo una sesión con login "0019-123456789A" y password "123456"
    And consulto la posición global
    Then selecciono la tarjeta con nombre "Mi tarjeta de crédito" como tarjeta origen
    And creo un pin temporal para mi tarjeta usando la modalidad "SMS"
    And recibo un código de resultado "ok"
    And la respuesta contiene <campo>, <tipo> y <condicion>

# BAD EXAMPLE! Do not copy.

Scenario: Un usuario solicita un nuevo pin temporal para una tarjeta de crédito mediante la modalidad ONLINE
    Given soy un usuario con login "0019-123456789A" y password "123456"
    And se me envía la otp con valor "123456"
    And tengo un producto contratado <tipo>, <alias>, <entidad-plasticos> y <codigo-estandar>
    And creo una sesión con login "0019-123456789A" y password "123456"
    And consulto la posición global
    Then selecciono la tarjeta con nombre "Mi tarjeta de crédito" como tarjeta origen
    And creo un pin temporal para mi tarjeta usando la modalidad "ONLINE"
    And recibo un código de resultado "ok"
    And la respuesta contiene <campo>, <tipo> y <condicion>

Observando estos dos escenarios se evidencia que son repetitivos y que describen el proceso de OTP con varios steps en todos los escenarios, pero si esa operativa cambia, se tendrían que modificar y sería muy tedioso.

Para resolver estos casos, de operativa de negocio que suele repetirse en muchas funcionalidades (OTP, firmas, etc.), es recomendable sacar la operativa a un escenario aparte de componentes, y simplemente en los escenarios que hagan uso de la operativa colocar un sólo paso que haga referencia a ese escenario. Ya que si la operativa cambia sólo hay que cambiar un escenario. La recomendación es de que un cambio en el software como mucho debe significar un cambio en un escenario.

Por tanto, se podría reescribir el escenario de la siguiente manera:

En primer lugar, se extrae el proceso de la OTP en un escenario aparte de componentes.

Scenario: Un usuario con operativa en curso solicita la clave OTP *
    Given un usuario "usuario1" con operativa en curso
    When el usuario solicita la clave OTP
    And el usuario recibe la clave SMS
    And introduce la clave SMS en la operativa
    Then la clave SMS es validada correctamente

Y en segundo lugar, se define el escenario que se quiere especificar (continuando con el ejemplo anterior):

Scenario: Un usuario crea un nuevo pin temporal para una tarjeta de crédito mediante la modalidad ONLINE

    Given un usuario "usuario1" con tarjeta de crédito
    When el usuario crea un pin temporal para su tarjeta usando la modalidad "ONLINE"
    And el usuario autoriza la operación *
    Then recibe un código de resultado satisfactorio

Como se comentó anteriormente, especificando los escenarios de esta forma, si hay un cambio en la operativa de OTP (para el ejemplo) sólo se tendría que actualizar un escenario.

###  Automatizable:

Cuando se va a automatizar un escenario debe considerarse el riesgo que mitiga y el coste que tiene, ya que en ocasiones será necesario virtualizar, por tema de disponibilidad de entornos y datos. Pero no siempre tendrá sentido virtualizarlo todo, se verá con un ejemplo:

Scenario Outline: Buscador de movimientos por texto
  Given soy un usuario con movimientos en cuenta
  And selecciono el buscador de movimientos
  When realizo una búsqueda de movimientos con el texto <texto>
  Then la búsqueda incluye el <texto>

Examples:
  | texto  |
  | prepago|
  | trans  |
  | atm    |

  En este caso no tiene sentido virtualizar un escenario de buscador, debido a que los datos serán siempre los mismos y tendrá que implementarse toda la lógica del buscador, y ese no es el objetivo.

Se debe tomar como premisa si lo que se va a automatizar cuesta lo mismo que desarrollarlo, entonces se tendrá que tener en cuenta otras formas alternativas de realizar dicha prueba.