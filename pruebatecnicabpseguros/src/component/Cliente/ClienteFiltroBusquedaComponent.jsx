import InputTextComponent from "../Controles/InputTextComponent";
import { ClienteFiltroModel } from '../../model/ClienteModel';

const ClienteFiltroBusquedaComponent = ({
    modelo, setModelo,
    handleListado = () => {}
}) => {

    const handleLimpiar = () => {
        setModelo(new ClienteFiltroModel("",""))
        handleListado()
    }
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
            </div>

            <div className="row">
                <div className="modal-footer">
                    <button className="btn btn-secondary" onClick={handleLimpiar}>
                        Limpiar
                    </button>
                    
                    <button className="btn btn-info mx-2" onClick={handleListado}>
                        Filtrar
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ClienteFiltroBusquedaComponent