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
    constructor(cedulaAsegurado = null, nombreCompleto = null, email = null) {
        this.cedulaAsegurado = cedulaAsegurado;
        this.nombreCompleto = nombreCompleto;
        this.email = email;
    }
}

export {
    ClienteModel,
    ClienteFiltroModel
}