// Las clases no deberían tener la obligación de implementar operaciones
// o interfaces que no utilicen. 
// - Los clientes no deben estar forzados a implementar interfaces que no usan.
// - Guarda relación con la cohesión de las aplicaciones
// - Las clases que implementen una interfaz o una clase abstracta no deberían estar obligadas 
// a utilizar partes que no van a utilizar.
// - Los clientes no deben estar obligados a implementar y/o a depender de una interface
// que luego no usarán.

//Ejemplo:
// Una empresa tiene, históricamente, procesos que efectúan los operarios. Al llegar a la mañana
// inician el proceso, al medio día suspender para almorzar, luego lo reanudan para finalizarlo
// al final de la jornada laboral. Años después deciden adquirir un robot para automatizar
// ciertos procesos...

// Problema: El incoveniente surge porque el robot no necesita parar para almorzar...

