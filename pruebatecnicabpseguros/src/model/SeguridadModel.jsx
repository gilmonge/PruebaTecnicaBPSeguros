class SeguridadModel {
    constructor(
        id = null,
        usuario = null,
        password = null
    ) {
        this.id = id;
        this.usuario = usuario;
        this.password = password;
    }
}

class SeguridadFiltroModel {
    constructor(usuario = null) {
        this.usuario = usuario;
    }
}

class SeguridadObligatoriosModel {
    constructor() {
        this.usuario = true;
        this.password = true;
    }
}

export {
    SeguridadModel,
    SeguridadFiltroModel,
    SeguridadObligatoriosModel
}