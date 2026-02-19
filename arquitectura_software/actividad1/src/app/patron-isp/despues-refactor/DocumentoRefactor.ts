import { IImprimir } from "../interfaces/IImprimir";

export abstract class DocumentoRefactor implements IImprimir {
    protected numero!: number;
    protected fecha!: Date;

    constructor(numero: number, fecha: Date) {
        this.numero = numero;
        this.fecha = fecha;
    }

    getFecha(): Date {
        return this.fecha;
    }

    setFecha(fecha: Date): void {
        this.fecha = fecha;
    }

    getNumero(): number {
        return this.numero;
    }

    setNumero(numero: number): void {
        this.numero = numero;
    }

    abstract imprimir(): void;
    
}