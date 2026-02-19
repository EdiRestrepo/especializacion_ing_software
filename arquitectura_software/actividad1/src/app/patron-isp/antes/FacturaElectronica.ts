import { Documento } from "./Documento";

export class FacturaElectronica extends Documento {

    idFacturaElectronica!: number;

    constructor(numero: number, fecha: Date) {
        super(numero, fecha);
    }

    imprimir(): void {
       console.warn(`Factura electrónica ${this.idFacturaElectronica} del ${this.fecha.toLocaleDateString()}`);
    }
    enviarPorEmail(): void {
        console.warn(`Enviando factura electrónica ${this.idFacturaElectronica} por email... del ${this.fecha.toLocaleDateString()}`);
    }
    

}