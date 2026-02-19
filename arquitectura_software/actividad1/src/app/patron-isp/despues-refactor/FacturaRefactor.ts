import { DocumentoRefactor } from "./DocumentoRefactor";

/**
 * Factura es un tipo de documento que representa una factura, con un número y una fecha.
 * Sin embargo, no tiene sentido que una factura pueda ser enviada por email 
 * (regla de Negocio), por lo tanto
 * la implementación de este método no es válida para esta clase, lo que viola el principio
 * de segregación de interfaces (ISP).
 */
export class FacturaRefactor extends DocumentoRefactor {

    idFactura!: number;

    constructor(numero: number, fecha: Date) {
        super(numero, fecha);
    }

    imprimir(): void {
        console.info(`Factura ${this.numero} del ${this.fecha.toLocaleDateString()}`);
    }


}