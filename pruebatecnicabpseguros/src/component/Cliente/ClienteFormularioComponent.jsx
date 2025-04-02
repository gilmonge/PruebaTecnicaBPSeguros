import InputTextComponent from "../Controles/InputTextComponent";
import SelectorFechaComponent from "../Controles/SelectorFechaComponent";
import SelectorComponent from "../Controles/SelectorComponent";
import TipoPersonaData from "../../data/TipoPersonaData.json";

const ClienteFormularioComponent = ({
    modelo, setModelo
}) => {
    return (
        <div>
            <div className="row">
                <div className="col-md-6">
                    <div className="form-group mb-3">
                        <InputTextComponent 
                            setModelo={setModelo}
                            datoInput={modelo.cedulaAsegurado}
                            label="Cédula del Asegurado"
                            placeholder="Cédula del Asegurado"
                            name="cedulaAsegurado"
                        />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group mb-3">
                        <InputTextComponent 
                            setModelo={setModelo}
                            datoInput={modelo.nombre}
                            label="Nombre"
                            placeholder="Nombre"
                            name="nombre"
                        />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group mb-3">
                        <InputTextComponent 
                            setModelo={setModelo}
                            datoInput={modelo.primerApellido}
                            label="Primer Apellido"
                            placeholder="Primer Apellido"
                            name="primerApellido"
                        />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group mb-3">
                        <InputTextComponent 
                            setModelo={setModelo}
                            datoInput={modelo.segundoApellido}
                            label="Segundo Apellido"
                            placeholder="Segundo Apellido"
                            name="segundoApellido"
                        />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group mb-3">
                        <SelectorComponent 
                            setModelo={setModelo}
                            datoInput={modelo.tipoPersona}
                            label="Tipo de Persona"
                            placeholder="Tipo de Persona"
                            name="tipoPersona"
                            opciones={TipoPersonaData}
                        />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group mb-3">
                        <SelectorFechaComponent 
                            setModelo={setModelo}
                            datoInput={modelo.fechaNacimiento}
                            label="Fecha de Nacimiento"
                            placeholder="Fecha de Nacimiento"
                            name="fechaNacimiento"
                        />
                    </div>
                </div>
            </div>

            <pre>{JSON.stringify(modelo)}</pre>
        </div>
    )
}

export default ClienteFormularioComponent
