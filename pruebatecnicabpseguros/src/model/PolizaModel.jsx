class PolizaModel {
    constructor(
        numeroPoliza = null,
        tipoPoliza = null,
        cedulaAsegurado = null,
        montoAsegurado = null,
        fechaVencimiento = null,
        fechaEmision = null,
        coberturas = null,
        estadoPoliza = null,
        prima = null,
        periodo = null,
        fechaInclusion = null,
        aseguradora = null,
    ) {
        this.numeroPoliza = numeroPoliza;
        this.tipoPoliza = tipoPoliza;
        this.cedulaAsegurado = cedulaAsegurado;
        this.montoAsegurado = montoAsegurado;
        this.fechaVencimiento = fechaVencimiento;
        this.fechaEmision = fechaEmision;
        this.coberturas = coberturas;
        this.estadoPoliza = estadoPoliza;
        this.prima = prima;
        this.periodo = periodo;
        this.fechaInclusion = fechaInclusion;
        this.aseguradora = aseguradora;
    }
}

class PolizaFiltroModel {
    constructor(numeroPoliza = null, fechaVencimiento = null, cedulaAsegurado = null) {
        this.numeroPoliza = numeroPoliza;
        this.fechaVencimiento = fechaVencimiento;
        this.cedulaAsegurado = cedulaAsegurado;
    }
}

export {
    PolizaModel,
    PolizaFiltroModel
}