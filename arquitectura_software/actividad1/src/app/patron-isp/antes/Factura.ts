import { Documento } from "./Documento";

/**
 * Factura es un tipo de documento que representa una factura, con un número y una fecha.
 * Sin embargo, no tiene sentido que una factura pueda ser enviada por email 
 * (regla de Negocio), por lo tanto
 * la implementación de este método no es válida para esta clase, lo que viola el principio
 * de segregación de interfaces (ISP).
 */
export class Factura extends Documento {

    idFactura!: number;

    constructor(numero: number, fecha: Date) {
        super(numero, fecha);
    }

    imprimir(): void {
        console.info(`Factura ${this.numero} del ${this.fecha.toLocaleDateString()}`);
    }

    enviarPorEmail(): void {
        //esta operación no es válidad para la clase factura, por lo tanto se lanza una excepción para indicar que no se puede realizar esta acción
        throw new Error("Method not implemented.");
        // console.error(`No se puede enviar por email la factura ${this.numero} del ${this.fecha.toLocaleDateString()}`);
    }

}