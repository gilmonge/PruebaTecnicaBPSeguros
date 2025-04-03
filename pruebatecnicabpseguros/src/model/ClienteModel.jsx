class ClienteModel {
    constructor(
        cedulaAsegurado = null,
        nombre = null,
        primerApellido = null,
        segundoApellido = null,
        tipoPersona = null,
        fechaNacimiento = null,
    ) {
        this.cedulaAsegurado = cedulaAsegurado;
        this.nombre = nombre;
        this.primerApellido = primerApellido;
        this.segundoApellido = segundoApellido;
        this.tipoPersona = tipoPersona;
        this.fechaNacimiento = fechaNacimiento;
    }
}

class ClienteFiltroModel {
    constructor(cedulaAsegurado = null, nombre = null) {
        this.cedulaAsegurado = cedulaAsegurado;
        this.nombre = nombre;
    }
}

class ClienteObligatoriosModel {
    constructor() {
        this.cedulaAsegurado = true;
        this.nombre = true;
        this.primerApellido = true;
        this.segundoApellido = false;
        this.tipoPersona = true;
        this.fechaNacimiento = true;
    }
}

export {
    ClienteModel,
    ClienteFiltroModel,
    ClienteObligatoriosModel
}