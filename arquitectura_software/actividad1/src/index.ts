import { Factura } from "./app/patron-isp/antes/Factura";
import { FacturaElectronica } from "./app/patron-isp/antes/FacturaElectronica";

const factura1 = new Factura(123, new Date());
factura1.idFactura = 123456;

const facturaElectronica1 = new FacturaElectronica(456, new Date());
facturaElectronica1.idFacturaElectronica = 654321;

try {
    factura1.imprimir();
    factura1.enviarPorEmail(); //No se puede enviar por email
} catch (error) {
    if (error instanceof Error) {
        console.error(error.message);
    } else {
        console.error(String(error));
    }
}
facturaElectronica1.imprimir();
facturaElectronica1.enviarPorEmail();