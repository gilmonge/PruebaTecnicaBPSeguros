import InputTextComponent from "../Controles/InputTextComponent";
import SelectorFechaComponent from "../Controles/SelectorFechaComponent";
import SelectorClienteComponent from "../Selectores/SelectorClienteComponent";
import SelectorComponent from "../Controles/SelectorComponent";
import TipoPolizaData from "../../data/TipoPolizaData.json";
import { PolizaFiltroModel } from '../../model/PolizaModel';

const PolizaFiltroBusquedaComponent = ({
    modelo, setModelo,
    handleListado = () => {}
}) => {
    const handleLimpiar = () => {
        setModelo(new PolizaFiltroModel("",null,"",""))
        handleListado()
    }
    return (
        <div>
            <div className="row">
                
                <div className="col-md-6">
                    <div className="form-group mb-3">
                        <InputTextComponent 
                            setModelo={setModelo}
                            datoInput={modelo.numeroPoliza}
                            label="Número de Póliza"
                            placeholder="Número de Póliza"
                            name="numeroPoliza"
                        />
                    </div>
                </div>
                
                <div className="col-md-6">
                    <div className="form-group mb-3">
                        <SelectorFechaComponent 
                            setModelo={setModelo}
                            datoInput={modelo.fechaVencimiento}
                            label="Fecha de Vencimiento"
                            placeholder="Fecha de Vencimiento"
                            name="fechaVencimiento"
                        />
                    </div>
                </div>
                
                <div className="col-md-6">
                    <div className="form-group mb-3">
                        <SelectorClienteComponent 
                            setModelo={setModelo}
                            datoInput={modelo.cedulaAsegurado}
                            label="Asegurado"
                            placeholder="Asegurado"
                            name="cedulaAsegurado"
                        />
                    </div>
                </div>
                
                <div className="col-md-6">
                    <div className="form-group mb-3">
                        <SelectorComponent 
                            setModelo={setModelo}
                            datoInput={modelo.tipoPoliza}
                            label="Tipo de Póliza"
                            placeholder="Tipo de Póliza"
                            name="tipoPoliza"
                            opciones={TipoPolizaData}
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

export default PolizaFiltroBusquedaComponent
