import { useState, useEffect } from 'react';
import MenuLateralComponent from "../component/MenuLateral/MenuLateralComponent";
import TablaComponent from "../component/Tabla/TablaComponent";
import ModalComponent from "../component/Modal/ModalComponent";
import CollapseComponent from "../component/Collapse/CollapseComponent"
import TamaniosModalUtil from "../util/TamaniosModalUtil";
import { ClienteModel, ClienteObligatoriosModel, ClienteFiltroModel } from '../model/ClienteModel';
import ClienteFormularioComponent from '../component/Cliente/ClienteFormularioComponent';
import ClienteFiltroBusquedaComponent from '../component/Cliente/ClienteFiltroBusquedaComponent';
import EstiloBotonUtil from '../util/EstiloBotonUtil';
import EditarAgregarService from '../service/Persona/Cliente/EditarAgregarService'
import ObtenerListaService from '../service/Persona/Cliente/ObtenerListaService'
import EliminarService from '../service/Persona/Cliente/EliminarService'

const ClientePage = () => {
    const filtroBusquedaLimpio = new ClienteFiltroModel();
    const [datos, setDatos] = useState([]);
    const [mostrarModal, setMostrarModal] = useState(false);
    const [mostrarModalMensaje, setMostrarModalMensaje] = useState(false);
    const [mensajeModal, setMensajeModal] = useState("");
    const [formularioEditar, setFormularioEditar] = useState(false);
    const [clienteModel, setClienteModel] = useState(new ClienteModel());
    const [actualizarInformacionLista, setActualizarInformacionLista] = useState(false);
    const [filtroBusqueda, setFiltroBusqueda] = useState(filtroBusquedaLimpio);
    const [filtroListado, setFiltroListado] = useState({
        paginaActual: 1,
        cantidadDatos: 10,
        filtro: null
    });

    const clienteObligatoriosModel = new ClienteObligatoriosModel();

    const agregarNuevo = () => {
        setFormularioEditar(false);
        setMostrarModal(true);
        setClienteModel(new ClienteModel());
    }

    const editar = (cliente) => {
        setClienteModel(new ClienteModel(
            cliente.cedulaAsegurado,
            cliente.nombre,
            cliente.primerApellido,
            cliente.segundoApellido,
            cliente.tipoPersona,
            cliente.fechaNacimiento
        ));
        
        setFormularioEditar(true);
        setMostrarModal(true);
    }

    const eliminar = async (cliente) => {
        const eliminarService = new EliminarService();
        const { mensaje } = await eliminarService.servicio(cliente.cedulaAsegurado);
        
        setMensajeModal(mensaje);
        setMostrarModalMensaje(true);
        setActualizarInformacionLista(true);
    }

    const handleBotonCerrar = () => {
        setMostrarModal(false);
        setFormularioEditar(false);
        setClienteModel(new ClienteModel());
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
        const editarAgregarService = new EditarAgregarService();
        const { exito, mensaje } = await editarAgregarService.servicio(clienteModel);
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
        setClienteModel(new ClienteModel());
    }

    const validarInformacion = () => {
        var valido = true;
        const { cedulaAsegurado, nombre, primerApellido, segundoApellido, tipoPersona, fechaNacimiento } = clienteModel;

        if (clienteObligatoriosModel.cedulaAsegurado) {
            if (cedulaAsegurado === null || cedulaAsegurado === '') valido = false;
        }

        if (clienteObligatoriosModel.nombre) {
            if (nombre === null || nombre === '') valido = false;
        }

        if (clienteObligatoriosModel.primerApellido) {
            if (primerApellido === null || primerApellido === '') valido = false;
        }

        if (clienteObligatoriosModel.segundoApellido) {
            if (segundoApellido === null || segundoApellido === '') valido = false;
        }

        if (clienteObligatoriosModel.tipoPersona) {
            if (tipoPersona === null || tipoPersona === '') valido = false;
        }

        if (clienteObligatoriosModel.fechaNacimiento) {
            if (fechaNacimiento === null || fechaNacimiento === '') valido = false;
        }

        return valido;
    }

    const obtenerInformacionClientes = async () => {
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
            x.cedulaAsegurado,
            x.nombre,
            x.primerApellido,
            x.segundoApellido,
            x.tipoPersona,
            x.fechaNacimiento,
        ]));

        setDatos(datosModelados);
    }

    const encabezados = [
        { headerName: 'Opciones' },
        { headerName: 'Cedula Asegurado' },
        { headerName: 'Nombre' },
        { headerName: 'Primer Apellido' },
        { headerName: 'Segundo Apellido' },
        { headerName: 'Tipo Persona' },
        { headerName: 'Fecha Nacimiento' },
    ];

    useEffect(() => { setActualizarInformacionLista(true); }, [])

    useEffect(() => {
        if(filtroListado.paginaActual > 0){
            obtenerInformacionClientes()
        }
    }, [filtroListado])

    useEffect(() => {
        if(actualizarInformacionLista){
            obtenerInformacionClientes()
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
                                        Agregar cliente
                                    </button>
                                </div>
                            </div>
                            <CollapseComponent
                                titulo="Filtro de busqueda"
                            >
                                <ClienteFiltroBusquedaComponent 
                                    modelo={filtroBusqueda}
                                    setModelo={setFiltroBusqueda}
                                    handleListado={obtenerInformacionClientes}
                                />
                            </CollapseComponent>
                            <div className="card">
                                <div className="card-header">
                                    <h4>Listado de clientes</h4>
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
                tituloModal={(formularioEditar) ? 'Editar Cliente' : 'Agregar Cliente'}
                mostrarBotonAdicional={true}
                mensajeBotonAdicional={(formularioEditar) ? 'Actualizar' : 'Agregar'}
                handleBotonAdicional={handleBotonAdicional}
                estiloBotonAdicional={EstiloBotonUtil.Exito}
                handleBotonCerrar={handleBotonCerrar}
            >
                <ClienteFormularioComponent
                    modelo={clienteModel}
                    setModelo={setClienteModel}
                    obligatorioModelo={clienteObligatoriosModel}
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

export default ClientePage
