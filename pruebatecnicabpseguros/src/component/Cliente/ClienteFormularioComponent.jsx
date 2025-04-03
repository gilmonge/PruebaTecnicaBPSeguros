import InputTextComponent from "../Controles/InputTextComponent";
import SelectorFechaComponent from "../Controles/SelectorFechaComponent";
import SelectorComponent from "../Controles/SelectorComponent";
import TipoPersonaData from "../../data/TipoPersonaData.json";

const ClienteFormularioComponent = ({
    modelo, setModelo,
    obligatorioModelo = null,
    formularioEditar
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
                            esObligatorio={(obligatorioModelo.cedulaAsegurado && obligatorioModelo.cedulaAsegurado === true) ? true : false}
                            readonly={formularioEditar}
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
                            esObligatorio={(obligatorioModelo.nombre && obligatorioModelo.nombre === true) ? true : false}
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
                            esObligatorio={(obligatorioModelo.primerApellido && obligatorioModelo.primerApellido === true) ? true : false}
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
                            esObligatorio={(obligatorioModelo.segundoApellido && obligatorioModelo.segundoApellido === true) ? true : false}
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
                            esObligatorio={(obligatorioModelo.tipoPersona && obligatorioModelo.tipoPersona === true) ? true : false}
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
                            esObligatorio={(obligatorioModelo.fechaNacimiento && obligatorioModelo.fechaNacimiento === true) ? true : false}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ClienteFormularioComponent
