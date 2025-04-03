import InputTextComponent from "../Controles/InputTextComponent";
import { SeguridadFiltroModel } from '../../model/SeguridadModel';

const ClienteFiltroBusquedaComponent = ({
    modelo, setModelo,
    handleListado = () => {}
}) => {

    const handleLimpiar = () => {
        setModelo(new SeguridadFiltroModel("",""))
        handleListado()
    }
    return (
        <div>
            <div className="row">
                <div className="col-md-6">
                    <div className="form-group mb-3">
                        <InputTextComponent 
                            setModelo={setModelo}
                            datoInput={modelo.usuario}
                            label="Usuario"
                            placeholder="usuario@mail.com"
                            name="usuario"
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