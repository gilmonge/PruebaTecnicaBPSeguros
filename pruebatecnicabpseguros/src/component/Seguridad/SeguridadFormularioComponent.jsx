import InputTextComponent from "../Controles/InputTextComponent";

const ClienteFormularioComponent = ({
    modelo, setModelo,
    obligatorioModelo = null,
    formularioEditar
}) => {
    return (
        <div>
            <div className="row">
                {!formularioEditar && 
                    <div className="col-md-6">
                        <div className="form-group mb-3">
                            <InputTextComponent 
                                setModelo={setModelo}
                                datoInput={modelo.usuario}
                                label="Usuario"
                                placeholder="usuario@mail.com"
                                name="usuario"
                                esObligatorio={(obligatorioModelo.usuario && obligatorioModelo.usuario === true) ? true : false}
                            />
                        </div>
                    </div>
                }
                <div className="col-md-6">
                    <div className="form-group mb-3">
                        <InputTextComponent 
                            setModelo={setModelo}
                            datoInput={modelo.password}
                            label="Contraseña"
                            placeholder="Contraseña"
                            name="password"
                            esObligatorio={(obligatorioModelo.password && obligatorioModelo.password === true) ? true : false}
                            type="password"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ClienteFormularioComponent
