import { useState, useEffect } from 'react';
import MenuLateralComponent from "../component/MenuLateral/MenuLateralComponent";
import TablaComponent from "../component/Tabla/TablaComponent";
import ModalComponent from "../component/Modal/ModalComponent";
import CollapseComponent from "../component/Collapse/CollapseComponent"
import TamaniosModalUtil from "../util/TamaniosModalUtil";
import { SeguridadModel, SeguridadObligatoriosModel, SeguridadFiltroModel } from '../model/SeguridadModel';
import SeguridadFormularioComponent from '../component/Seguridad/SeguridadFormularioComponent';
import SeguridadFiltroBusquedaComponent from '../component/Seguridad/SeguridadFiltroBusquedaComponent';
import EstiloBotonUtil from '../util/EstiloBotonUtil';
import AgregarService from '../service/Seguridad/Usuario/AgregarService'
import ObtenerListaService from '../service/Seguridad/Usuario/ObtenerListaService'
import EliminarService from '../service/Seguridad/Usuario/EliminarService'
import CambiarPasswordService from '../service/Seguridad/Usuario/CambiarPasswordService'

const SeguridadPage = () => {
    const filtroBusquedaLimpio = new SeguridadFiltroModel();
    const [datos, setDatos] = useState([]);
    const [mostrarModal, setMostrarModal] = useState(false);
    const [mostrarModalMensaje, setMostrarModalMensaje] = useState(false);
    const [mensajeModal, setMensajeModal] = useState("");
    const [formularioEditar, setFormularioEditar] = useState(false);
    const [seguridadModel, setSeguridadModel] = useState(new SeguridadModel());
    const [actualizarInformacionLista, setActualizarInformacionLista] = useState(false);
    const [filtroBusqueda, setFiltroBusqueda] = useState(filtroBusquedaLimpio);
    const [filtroListado, setFiltroListado] = useState({
        paginaActual: 1,
        cantidadDatos: 10,
        filtro: null
    });

    const seguridadObligatoriosModel = new SeguridadObligatoriosModel();

    const agregarNuevo = () => {
        setFormularioEditar(false);
        setMostrarModal(true);
        setSeguridadModel(new SeguridadModel());
    }

    const editar = (usuario) => {
        setSeguridadModel(new SeguridadModel(
            usuario.id
        ));
        
        setFormularioEditar(true);
        setMostrarModal(true);
    }

    const eliminar = async (seguridad) => {
        const eliminarService = new EliminarService();
        const { mensaje } = await eliminarService.servicio(seguridad.id);
        
        setMensajeModal(mensaje);
        setMostrarModalMensaje(true);
        setActualizarInformacionLista(true);
    }

    const handleBotonCerrar = () => {
        setMostrarModal(false);
        setFormularioEditar(false);
        setSeguridadModel(new SeguridadModel());
        setMostrarModalMensaje(false);
    }

    const handleBotonAdicional = async () => {
        const resultadoValidacion = validarInformacion();

        if (!resultadoValidacion) {
            setMensajeModal('El formulario no es válido.');
            setMostrarModalMensaje(true);
            return;
        }

        setMensajeModal("Guardando información");
        setMostrarModalMensaje(true);
        if(!formularioEditar){
            guardarUsuario(seguridadModel);
        }else{
            actualizarPassword(seguridadModel);
        }
    }

    const guardarUsuario = async (seguridadModel) => {
        const agregarService = new AgregarService();
        const { exito, mensaje } = await agregarService.servicio(seguridadModel);
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
        setSeguridadModel(new SeguridadModel());
    }

    const actualizarPassword = async () => {
        const cambiarPasswordService = new CambiarPasswordService();
        const { exito, mensaje } = await cambiarPasswordService.servicio(seguridadModel);
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
        setSeguridadModel(new SeguridadModel());
        
    }

    const validarInformacion = () => {
        var valido = true;
        const { usuario, password } = seguridadModel;

        if(!formularioEditar){
            if (seguridadObligatoriosModel.usuario) {
                if (usuario === null || usuario === '') valido = false;
            }
        }

        if (seguridadObligatoriosModel.password) {
            if (password === null || password === '') valido = false;
        }

        return valido;
    }

    const obtenerInformacionSeguridad = async () => {
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
        const datosModelados = dato.map((x, index) => ([
            <div key={index}>
                <button className="btn btn-primary btn-sm me-2" onClick={() => editar(x)}>
                    Editar
                </button>
                <button className="btn btn-danger btn-sm" onClick={() => eliminar(x)}>
                    Eliminar
                </button>
            </div>,
            x.usuario
        ]));

        setDatos(datosModelados);
    }

    const encabezados = [
        { headerName: 'Opciones' },
        { headerName: 'Usuario' },
    ];

    useEffect(() => { setActualizarInformacionLista(true); }, [])

    useEffect(() => {
        if(filtroListado.paginaActual > 0){
            obtenerInformacionSeguridad()
        }
    }, [filtroListado])

    useEffect(() => {
        if(actualizarInformacionLista){
            obtenerInformacionSeguridad()
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
                                        Agregar usuario
                                    </button>
                                </div>
                            </div>
                            <CollapseComponent
                                titulo="Filtro de busqueda"
                            >
                                <SeguridadFiltroBusquedaComponent 
                                    modelo={filtroBusqueda}
                                    setModelo={setFiltroBusqueda}
                                    handleListado={obtenerInformacionSeguridad}
                                />
                            </CollapseComponent>
                            <div className="card">
                                <div className="card-header">
                                    <h4>Listado de usuarios</h4>
                                </div>
                                <div className="card-body">
                                    <TablaComponent
                                        encabezados={encabezados}
                                        datos={datos}
                                    />
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
                tituloModal={(formularioEditar) ? 'Editar Usuario' : 'Agregar Usuario'}
                mostrarBotonAdicional={true}
                mensajeBotonAdicional={(formularioEditar) ? 'Actualizar' : 'Agregar'}
                handleBotonAdicional={handleBotonAdicional}
                estiloBotonAdicional={EstiloBotonUtil.Exito}
                handleBotonCerrar={handleBotonCerrar}
            >
                <SeguridadFormularioComponent
                    modelo={seguridadModel}
                    setModelo={setSeguridadModel}
                    obligatorioModelo={seguridadObligatoriosModel}
                    formularioEditar={formularioEditar}
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

export default SeguridadPage
