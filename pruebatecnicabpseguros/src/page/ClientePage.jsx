import { useState } from 'react';
import MenuLateralComponent from "../component/MenuLateral/MenuLateralComponent";
import TablaComponent from "../component/Tabla/TablaComponent";
import ModalComponent from "../component/Modal/ModalComponent";
import TamaniosModalUtil from "../util/TamaniosModalUtil";
import { ClienteModel } from '../model/ClienteModel';
import ClienteFormularioComponent from '../component/Cliente/ClienteFormularioComponent';
import EstiloBotonUtil from '../util/EstiloBotonUtil';

const ClientePage = () => {
    const [mostrarModal, setMostrarModal] = useState(false);
    const [formularioEditar, setFormularioEditar] = useState(false);
    const [clienteModel, setClienteModel] = useState(new ClienteModel());

    const agregarNuevo = () => {
        setFormularioEditar(false);
        setMostrarModal(true);
        setClienteModel(new ClienteModel());
    }

    const editar = () => {
        setFormularioEditar(true);
        setMostrarModal(true);
    }

    const handleBotonAdicional = () => {
        const resultadoValidacion = validarInformacion();

    }

    const validarInformacion = () => {
        const { cedula, nombre, primerApellido, segundoApellido, tipoPersona, fechaNacimiento } = clienteModel;
        if (!cedula || !nombre || !primerApellido || !tipoPersona || !fechaNacimiento) {
            alert('Por favor complete todos los campos obligatorios.');
            return false;
        }
        return true;
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

    const datos = [
        [ '', '123456789', 'Juan', 'Pérez', 'Gómez', 'Natural', '1990-01-01' ],
        [ '', '987654321', 'María', 'López', 'Martínez', 'Natural', '1985-05-15' ],
        [ '', '456789123', 'Carlos', 'García', 'Hernández', 'Natural', '1992-10-20' ],
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
                                        Agregar cliente
                                    </button>
                                </div>
                            </div>
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
            >
                <ClienteFormularioComponent 
                    modelo={clienteModel}
                    setModelo={setClienteModel}
                />
            </ModalComponent>
        </>
    )
}

export default ClientePage
