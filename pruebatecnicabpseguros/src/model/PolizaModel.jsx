class PolizaModel {
    constructor(
        id = null,
        numeroPoliza = null,
        tipoPoliza = null,
        cedulaAsegurado = null,
        montoAsegurado = null,
        fechaVencimiento = null,
        fechaEmision = null,
        fechaInclusion = null,
        coberturas = null,
        estadoPoliza = null,
        prima = null,
        periodo = null,
        aseguradora = null,
    ) {
        this.id = id;
        this.numeroPoliza = numeroPoliza;
        this.tipoPoliza = tipoPoliza;
        this.cedulaAsegurado = cedulaAsegurado;
        this.montoAsegurado = montoAsegurado;
        this.fechaVencimiento = fechaVencimiento;
        this.fechaEmision = fechaEmision;
        this.fechaInclusion = fechaInclusion;
        this.coberturas = coberturas;
        this.estadoPoliza = estadoPoliza;
        this.prima = prima;
        this.periodo = periodo;
        this.aseguradora = aseguradora;
    }
}

class PolizaFiltroModel {
    constructor(
        numeroPoliza = null, 
        fechaVencimiento = null, 
        cedulaAsegurado = null,
        tipoPoliza = null
    ) {
        this.numeroPoliza = numeroPoliza;
        this.fechaVencimiento = fechaVencimiento;
        this.cedulaAsegurado = cedulaAsegurado;
        this.tipoPoliza = tipoPoliza;
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
        this.fechaInclusion = true;
        this.coberturas = true;
        this.estadoPoliza = true;
        this.prima = true;
        this.periodo = true;
        this.aseguradora = true;
    }
}

export {
    PolizaModel,
    PolizaFiltroModel,
    PolizaObligatoriosModel
}