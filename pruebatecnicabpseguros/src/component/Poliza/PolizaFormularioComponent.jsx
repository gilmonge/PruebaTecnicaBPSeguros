import InputTextComponent from "../Controles/InputTextComponent";
import SelectorFechaComponent from "../Controles/SelectorFechaComponent";
import SelectorComponent from "../Controles/SelectorComponent";
import InputNumericoComponent from "../Controles/InputNumericoComponent";
import TipoPolizaData from "../../data/TipoPolizaData.json";
import EstadoPolizaData from "../../data/EstadoPolizaData.json";
import PeriodoData from "../../data/PeriodoData.json";
import AseguradorasData from "../../data/AseguradorasData.json";

const PolizaFormularioComponent = ({
    modelo, setModelo
}) => {
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
                        <InputNumericoComponent 
                            setModelo={setModelo}
                            datoInput={modelo.montoAsegurado}
                            label="Monto Asegurado"
                            placeholder="Monto Asegurado"
                            name="montoAsegurado"
                            decimales={2}
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
                        <SelectorFechaComponent 
                            setModelo={setModelo}
                            datoInput={modelo.fechaEmision}
                            label="Fecha de Emisión"
                            placeholder="Fecha de Emisión"
                            name="fechaEmision"
                        />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group mb-3">
                        <InputTextComponent 
                            setModelo={setModelo}
                            datoInput={modelo.coberturas}
                            label="Coberturas"
                            placeholder="Coberturas"
                            name="coberturas"
                        />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group mb-3">
                        <SelectorComponent 
                            setModelo={setModelo}
                            datoInput={modelo.estadoPoliza}
                            label="Estado de la Póliza"
                            placeholder="Estado de la Póliza"
                            name="estadoPoliza"
                            opciones={EstadoPolizaData}
                        />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group mb-3">
                        <InputNumericoComponent 
                            setModelo={setModelo}
                            datoInput={modelo.prima}
                            label="Prima"
                            placeholder="Prima"
                            name="prima"
                            decimales={2}
                        />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group mb-3">
                        <SelectorComponent
                            setModelo={setModelo}
                            datoInput={modelo.periodo}
                            label="Periodo"
                            placeholder="Periodo"
                            name="periodo"
                            opciones={PeriodoData}
                        />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group mb-3">
                        <SelectorFechaComponent 
                            setModelo={setModelo}
                            datoInput={modelo.fechaInclusion}
                            label="Fecha de Inclusión"
                            placeholder="Fecha de Inclusión"
                            name="fechaInclusion"
                        />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group mb-3">
                        <SelectorComponent 
                            setModelo={setModelo}
                            datoInput={modelo.aseguradora}
                            label="Aseguradora"
                            placeholder="Aseguradora"
                            name="aseguradora"
                            opciones={AseguradorasData}
                        />
                    </div>

                </div>
            </div>


            <pre>{JSON.stringify(modelo)}</pre>
        </div>
    )
}

export default PolizaFormularioComponent
