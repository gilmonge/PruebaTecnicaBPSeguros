import { useState, useEffect } from 'react'
import MenuLateralComponent from "../component/MenuLateral/MenuLateralComponent";
import TablaComponent from "../component/Tabla/TablaComponent";
import ModalComponent from "../component/Modal/ModalComponent"
import CollapseComponent from "../component/Collapse/CollapseComponent"
import TamaniosModalUtil from "../util/TamaniosModalUtil"
import { PolizaModel, PolizaObligatoriosModel, PolizaFiltroModel } from "../model/PolizaModel"
import PolizaFormularioComponent from '../component/Poliza/PolizaFormularioComponent';
import PolizaFiltroBusquedaComponent from '../component/Poliza/PolizaFiltroBusquedaComponent';
import EstiloBotonUtil from '../util/EstiloBotonUtil';
import FormateoFechaUtil from '../util/FormateoFechaUtil';
import EditarAgregarService from '../service/Poliza/Poliza/EditarAgregarService'
import EliminarService from '../service/Poliza/Poliza/EliminarService'
import ObtenerListaService from '../service/Poliza/Poliza/ObtenerListaService'
import TipoPolizaData from "../data/TipoPolizaData.json";
import EstadoPolizaData from "../data/EstadoPolizaData.json";
import PeriodoData from "../data/PeriodoData.json";
import AseguradorasData from "../data/AseguradorasData.json";

const PolizaPage = () => {
    const filtroBusquedaLimpio = new PolizaFiltroModel();
    const [datos, setDatos] = useState([]);
    const [mostrarModal, setMostrarModal] = useState(false);
    const [mostrarModalMensaje, setMostrarModalMensaje] = useState(false);
    const [mensajeModal, setMensajeModal] = useState("");
    const [formularioEditar, setFormularioEditar] = useState(false);
    const [polizaModel, setPolizaModel] = useState(new PolizaModel());
    const [actualizarInformacionLista, setActualizarInformacionLista] = useState(false);
    const [filtroBusqueda, setFiltroBusqueda] = useState(filtroBusquedaLimpio);
    const [filtroListado, setFiltroListado] = useState({
        paginaActual: 1,
        cantidadDatos: 10,
        filtro: null
    });

    const polizaObligatoriosModel = new PolizaObligatoriosModel();

    const agregarNuevo = () => {
        setFormularioEditar(false);
        setMostrarModal(true);
        setPolizaModel(new PolizaModel());
    }

    const editar = (poliza) => {
        setPolizaModel(new PolizaModel(
            poliza.id,
            poliza.numeroPoliza,
            poliza.tipoPoliza,
            poliza.cedulaAsegurado,
            poliza.montoAsegurado,
            poliza.fechaVencimiento,
            poliza.fechaEmision,
            poliza.fechaInclusion,
            poliza.coberturas,
            poliza.estadoPoliza,
            poliza.prima,
            poliza.periodo,
            poliza.aseguradora
        ));
        setFormularioEditar(true);
        setMostrarModal(true);
    }
    
    const eliminar = async (poliza) => {
        const eliminarService = new EliminarService();
        const { mensaje } = await eliminarService.servicio(poliza.id);
        
        setMensajeModal(mensaje);
        setMostrarModalMensaje(true);
        setActualizarInformacionLista(true);
    }

    const handleBotonCerrar = () => {
        setMostrarModal(false);
        setFormularioEditar(false);
        setPolizaModel(new PolizaModel());
        setMostrarModalMensaje(false);
    }

    const handleBotonAdicional = async () => {
        const resultadoValidacion = validarInformacion();

        if(!resultadoValidacion) {
            setMensajeModal('El formulario no es válido.');
            setMostrarModalMensaje(true);
            return;
        }
        
        setMensajeModal("Guardando información");
        setMostrarModalMensaje(true);
        const editarAgregarService = new EditarAgregarService();
        const { exito, mensaje } = await editarAgregarService.servicio(polizaModel);
        setMostrarModalMensaje(false);

        if (!exito) {
            setMensajeModal(mensaje);
            setMostrarModalMensaje(true);
            return;
        }

        setMensajeModal(mensaje);
        setMostrarModalMensaje(true);
        setActualizarInformacionLista(true);

        setMostrarModal(false);
        setFormularioEditar(false);
        setPolizaModel(new PolizaModel());
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

    const obtenerInformacionPolizas = async () => {
        const obtenerListaService = new ObtenerListaService();
        const filtroBusquedaLocal = filtroListado;
        filtroBusquedaLocal.filtro = filtroBusqueda;

        setMensajeModal("Obteniendo datos");
        setMostrarModalMensaje(true);
        const { exito, mensaje, dato } = await obtenerListaService.servicio(filtroBusquedaLocal);
        setMostrarModalMensaje(false);

        if (!exito) {
            setMensajeModal(mensaje);
            setMostrarModalMensaje(true);
            return;
        }

        const formateoFechaUtil = new FormateoFechaUtil();
        const datosModelados = dato.map((x, index) => {

            const tipoPoliza = TipoPolizaData.find(item => item.value === x.tipoPoliza)
            const estadoPolizaData = EstadoPolizaData.find(item => item.value === x.estadoPoliza)
            const periodoData = PeriodoData.find(item => item.value === x.periodo)
            const aseguradorasData = AseguradorasData.find(item => item.value === x.aseguradora)
            
            return [
                <div key={index}>
                    <button className="btn btn-primary btn-sm me-2" onClick={() => editar(x)}>
                        Editar
                    </button>
                    <button className="btn btn-danger btn-sm" onClick={() => eliminar(x)}>
                        Eliminar
                    </button>
                </div>,
                x.numeroPoliza,
                tipoPoliza.label,
                x.cedulaAsegurado,
                x.montoAsegurado,
                formateoFechaUtil.formateoFechaListado(x.fechaVencimiento),
                formateoFechaUtil.formateoFechaListado(x.fechaEmision),
                x.coberturas,
                estadoPolizaData.label,
                x.prima,
                periodoData.label,
                formateoFechaUtil.formateoFechaListado(x.fechaInclusion),
                aseguradorasData.label,
            ]
        });

        setDatos(datosModelados);
    }

    const encabezados = [
        { headerName: 'Opciones' },
        { headerName: 'Número de póliza' },
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
    
    useEffect(() => { setActualizarInformacionLista(true); }, [])

    useEffect(() => {
        if(filtroListado.paginaActual > 0){
            obtenerInformacionPolizas()
        }
    }, [filtroListado])

    useEffect(() => {
        if(actualizarInformacionLista){
            obtenerInformacionPolizas()
            setActualizarInformacionLista(false);
        }
    }, [actualizarInformacionLista])
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

                            <CollapseComponent
                                titulo="Filtro de busqueda"
                            >
                                <PolizaFiltroBusquedaComponent 
                                    modelo={filtroBusqueda}
                                    setModelo={setFiltroBusqueda}
                                    handleListado={obtenerInformacionPolizas}
                                />
                            </CollapseComponent>

                            <div className="card">
                                <div className="card-header">
                                    <h4>Listado de pólizas</h4>
                                </div>
                                <div className="card-body">
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