import { useState } from 'react'
import MenuLateralComponent from "../component/MenuLateral/MenuLateralComponent";
import TablaComponent from "../component/Tabla/TablaComponent";
import ModalComponent from "../component/Modal/ModalComponent"
import TamaniosModalUtil from "../util/TamaniosModalUtil"
import { PolizaModel, PolizaObligatoriosModel } from "../model/PolizaModel"
import PolizaFormularioComponent from '../component/Poliza/PolizaFormularioComponent';
import EstiloBotonUtil from '../util/EstiloBotonUtil';

const PolizaPage = () => {
    const [mostrarModal, setMostrarModal] = useState(false);
    const [mostrarModalMensaje, setMostrarModalMensaje] = useState(false);
    const [mensajeModal, setMensajeModal] = useState("");
    const [formularioEditar, setFormularioEditar] = useState(false);
    const [polizaModel, setPolizaModel] = useState(new PolizaModel());

    const polizaObligatoriosModel = new PolizaObligatoriosModel();

    const agregarNuevo = () => {
        setFormularioEditar(false);
        setMostrarModal(true);
        setPolizaModel(new PolizaModel());
    }
    const editar = () => {
        setFormularioEditar(true);
        setMostrarModal(true);
    }

    const handleBotonCerrar = () => {
        setMostrarModal(false);
        setFormularioEditar(false);
        setPolizaModel(new PolizaModel());
        setMostrarModalMensaje(false);
    }

    const handleBotonAdicional = () => {
        const resultadoValidacion = validarInformacion();

        if(!resultadoValidacion) {
            setMensajeModal('Por favor complete todos los campos obligatorios.');
            setMostrarModalMensaje(true);
            return;
        }
    }
    
    const validarInformacion = () => {
        var valido = true;
        const { numeroPoliza, tipoPoliza, cedulaAsegurado, montoAsegurado, fechaVencimiento, fechaEmision, coberturas, estadoPoliza, prima, periodo, fechaInclusion, aseguradora } = polizaModel;
        
        if(polizaObligatoriosModel.numeroPoliza) {
            if(numeroPoliza === null || numeroPoliza === '') valido = false;
        }

        if(polizaObligatoriosModel.tipoPoliza) {
            if(tipoPoliza === null || tipoPoliza === '') valido = false;
        }

        if(polizaObligatoriosModel.cedulaAsegurado) {
            if(cedulaAsegurado === null || cedulaAsegurado === '') valido = false;
        }

        if(polizaObligatoriosModel.montoAsegurado) {
            if(montoAsegurado === null || montoAsegurado === '') valido = false;
        }

        if(polizaObligatoriosModel.fechaVencimiento) {
            if(fechaVencimiento === null || fechaVencimiento === '') valido = false;
        }

        if(polizaObligatoriosModel.fechaEmision) {
            if(fechaEmision === null || fechaEmision === '') valido = false;
        }
        
        if(polizaObligatoriosModel.coberturas) {
            if(coberturas === null || coberturas === '') valido = false;
        }

        if(polizaObligatoriosModel.estadoPoliza) {
            if(estadoPoliza === null || estadoPoliza === '') valido = false;
        }

        if(polizaObligatoriosModel.prima) {
            if(prima === null || prima === '') valido = false;
        }

        if(polizaObligatoriosModel.periodo) {
            if(periodo === null || periodo === '') valido = false;
        }

        if(polizaObligatoriosModel.fechaInclusion) {
            if(fechaInclusion === null || fechaInclusion === '') valido = false;
        }

        if(polizaObligatoriosModel.aseguradora) {
            if(aseguradora === null || aseguradora === '') valido = false;
        }

        return valido;
    }

    const encabezados = [
        { headerName: 'Opciones' },
        { headerName: 'Tipo Póliza' },
        { headerName: 'Cedula Asegurado' },
        { headerName: 'Monto Asegurado' },
        { headerName: 'Fecha Vencimiento' },
        { headerName: 'Fecha Emisión' },
        { headerName: 'Coberturas' },
        { headerName: 'Estado Póliza' },
        { headerName: 'Prima' },
        { headerName: 'Periodo' },
        { headerName: 'Fecha Inclusión' },
        { headerName: 'Aseguradora' },
    ];

    const datos = [
        [ '', 'Vida', '123456789', '100000', '2025-01-01', '2023-01-01', 'Cobertura 1, Cobertura 2', 'Activa', '5000', 'Mensual', '2023-01-01', 'Aseguradora 1' ],
        [ '', 'Salud', '987654321', '200000', '2024-05-15', '2023-05-15', 'Cobertura 3, Cobertura 4', 'Activa', '7000', 'Anual', '2023-05-15', 'Aseguradora 2' ],
        [ '', 'Automóvil', '456789123', '150000', '2026-10-20', '2023-10-20', 'Cobertura 5, Cobertura 6', 'Inactiva', '3000', 'Semestral', '2023-10-20', 'Aseguradora 3' ],
        [ '', 'Hogar', '321654987', '250000', '2025-03-30', '2023-03-30', 'Cobertura 7, Cobertura 8', 'Activa', '6000', 'Mensual', '2023-03-30', 'Aseguradora 4' ],
        [ '', 'Vida', '789123456', '120000', '2024-07-15', '2023-07-15', 'Cobertura 9, Cobertura 10', 'Activa', '4000', 'Anual', '2023-07-15', 'Aseguradora 5' ],
    ];
    
    return (
        <>
            <MenuLateralComponent />
            <div className="pc-container">
                <div className="pc-content">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className='row text-end mb-3'>
                                <div>
                                    <button className="btn btn-primary btn-warning" onClick={agregarNuevo}>
                                        Agregar póliza
                                    </button>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card-header">
                                    <h4>Listado de pólizas</h4>
                                </div>
                                <div class="card-body">
                                    <TablaComponent encabezados={encabezados} datos={datos} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <ModalComponent 
                mostrar={mostrarModal} 
                setmostrar={setMostrarModal}
                tamanioModal={TamaniosModalUtil.ExtraGrande}
                tituloModal={(formularioEditar) ? 'Editar Póliza' : 'Agregar Póliza'}
                mostrarBotonAdicional={true}
                mensajeBotonAdicional={(formularioEditar) ? 'Actualizar' : 'Agregar'}
                handleBotonAdicional={handleBotonAdicional}
                estiloBotonAdicional={EstiloBotonUtil.Exito}
                handleBotonCerrar={handleBotonCerrar}
            >
                <PolizaFormularioComponent
                    modelo={polizaModel}
                    setModelo={setPolizaModel}
                    obligatorioModelo={polizaObligatoriosModel}
                />
            </ModalComponent>

            <ModalComponent 
                mostrar={mostrarModalMensaje} 
                setmostrar={setMostrarModalMensaje}
                tamanioModal={TamaniosModalUtil.Normal}
                mostrarTitulo={false}
            >
                <p>{mensajeModal}</p>
            </ModalComponent>
        </>
    )
}

export default PolizaPage