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

class PolizaObligatoriosModel {
    constructor() {
        this.numeroPoliza = true;
        this.tipoPoliza = true;
        this.cedulaAsegurado = true;
        this.montoAsegurado = true;
        this.fechaVencimiento = true;
        this.fechaEmision = true;
        this.coberturas = true;
        this.estadoPoliza = true;
        this.prima = true;
        this.periodo = true;
        this.fechaInclusion = true;
        this.aseguradora = true;
    }
}

export {
    PolizaModel,
    PolizaFiltroModel,
    PolizaObligatoriosModel
}