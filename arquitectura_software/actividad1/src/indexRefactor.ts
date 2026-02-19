import { FacturaRefactor } from './app/patron-isp/despues-refactor/FacturaRefactor';
import { FacturaElectronicaRefactor } from './app/patron-isp/despues-refactor/FacturaElectronicaRefactor';

const factura1 = new FacturaRefactor(123, new Date());
factura1.idFactura = 123456;

const facturaElectronica1 = new FacturaElectronicaRefactor(456, new Date());
facturaElectronica1.idFacturaElectronica = 654321;

factura1.imprimir();
// factura1.enviarPorEmail(); //No se puede enviar por email
facturaElectronica1.imprimir();
facturaElectronica1.enviarPorEmail();