// El patron creador guia la asignación de responsabilidades relacionadas con la creación 
// de objetos, tarea muy frecuente en los sistemas orientados a objetos.
// El objetivo de este patrón es encontrar un creador que debemos conectar con el objeto
// producido en cualquier evento

// Problema: ¿Quién debería ser responsable de crear una nueva instancia de alguna clase?
// La creación de objetos es una de las actividades más frecuentes en un sistema orientado
// a objetos. En consecuencia, conviene contar con un principio general para asignar
// las responsabilidades conciernientes a ella.

// Solución: asignarle a la clase B la responsabilidad de crear una instancia de la clase A
// en un o de los siguientes casos:
// B agrega los objetos de A
// B contiene a los objetos de A
// B registra las instancias de los objetos de A
// B tiene los datos de inicialización que serán enviados a A cuando este objeto sea creado
// ( B es un experto respecto a la creación de objetos de A )

//Beneficios: Se brinda apoyo a un bajo acomplamiento, lo cual supone menos dependencias
// respecto al mantenimiento y mejores oportunidades de reutilización.














/* Bajo acoplamiento
// El acoplamiento es la medida de la fuerza con que un elemento está conectado con otros.
// Un alto acoplamiento implica que:
// - Los cambios en una clase relacionadas fuerzan cambios en las clases locales
// - Son difíciles de entender de manera aislada
//- Son difíciles de reutilizar, debido a que su uso requiere la presencia adicional de las que depende
*/
