export abstract class Documento {
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

    abstract enviarPorEmail(): void;
    
}