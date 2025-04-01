import { useState } from 'react'
import MenuLateralComponent from "../component/MenuLateral/MenuLateralComponent"
import TablaComponent from "../component/Tabla/TablaComponent"
import ModalComponent from "../component/Modal/ModalComponent"
import TamaniosModal from "../util/TamaniosModal"
import { ClienteModel } from '../model/ClienteModel'
import ClienteFormularioComponent from '../component/Cliente/ClienteFormularioComponent'

const ClientePage = () => {
    const [mostrarModal, setMostrarModal] = useState(false);
    const [formularioEditar, setFormularioEditar] = useState(false);
    const [cliente, setCliente] = useState(new ClienteModel())

    const agregarNuevo = () => {
        setFormularioEditar(false);
        setMostrarModal(true);
    }
    const editar = () => {
        setFormularioEditar(true);
        setMostrarModal(true);
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
                tamanioModal={TamaniosModal.ExtraGrande}
                tituloModal={(formularioEditar) ? 'Editar Cliente' : 'Agregar Cliente'}
            >
                <ClienteFormularioComponent />
            </ModalComponent>
        </>
    )
}

export default ClientePage
