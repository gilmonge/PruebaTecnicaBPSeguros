import InputTextComponent from "../Controles/InputTextComponent";
import SelectorFechaComponent from "../Controles/SelectorFechaComponent";
import SelectorComponent from "../Controles/SelectorComponent";
import InputNumericoComponent from "../Controles/InputNumericoComponent";
import TipoPolizaData from "../../data/TipoPolizaData.json";
import EstadoPolizaData from "../../data/EstadoPolizaData.json";
import PeriodoData from "../../data/PeriodoData.json";
import AseguradorasData from "../../data/AseguradorasData.json";

const PolizaFormularioComponent = ({
    modelo, setModelo,
    obligatorioModelo = null,
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
                            esObligatorio={(obligatorioModelo.numeroPoliza && obligatorioModelo.numeroPoliza === true) ? true : false}
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
                            esObligatorio={(obligatorioModelo.tipoPoliza && obligatorioModelo.tipoPoliza === true) ? true : false}
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
                            esObligatorio={(obligatorioModelo.cedulaAsegurado && obligatorioModelo.cedulaAsegurado === true) ? true : false}
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
                            esObligatorio={(obligatorioModelo.montoAsegurado && obligatorioModelo.montoAsegurado === true) ? true : false}
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
                            esObligatorio={(obligatorioModelo.fechaVencimiento && obligatorioModelo.fechaVencimiento === true) ? true : false}
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
                            esObligatorio={(obligatorioModelo.fechaEmision && obligatorioModelo.fechaEmision === true) ? true : false}
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
                            esObligatorio={(obligatorioModelo.coberturas && obligatorioModelo.coberturas === true) ? true : false}
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
                            esObligatorio={(obligatorioModelo.estadoPoliza && obligatorioModelo.estadoPoliza === true) ? true : false}
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
                            esObligatorio={(obligatorioModelo.prima && obligatorioModelo.prima === true) ? true : false}
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
                            esObligatorio={(obligatorioModelo.periodo && obligatorioModelo.periodo === true) ? true : false}
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
                            esObligatorio={(obligatorioModelo.aseguradora && obligatorioModelo.aseguradora === true) ? true : false}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PolizaFormularioComponent
