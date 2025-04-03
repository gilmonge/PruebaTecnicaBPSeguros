import { useState, useEffect } from 'react';
import MenuLateralComponent from "../component/MenuLateral/MenuLateralComponent"
import ClienteConteoService from "../service/Persona/Cliente/ClienteConteoService"
import PolizaActivaConteoService from "../service/Poliza/Poliza/PolizaActivaConteoService"

const DashboardPage = () => {
    const [conteoPoliza, setConteoPoliza] = useState([]);
    const [conteoCliente, setConteoCliente] = useState([]);

    
    const obtenerConteoPoliza = async () => {
        const polizaActivaConteoService = new PolizaActivaConteoService();
        const { exito, mensaje, dato } = await polizaActivaConteoService.servicio();
        if (!exito) {
            setMensajeModal(mensaje);
            setMostrarModalMensaje(true);
            return;
        }
        setConteoPoliza(dato);
    }

    const obtenerConteoCliente = async () => {
        const clienteConteoService = new ClienteConteoService();
        const { exito, mensaje, dato } = await clienteConteoService.servicio();
        if (!exito) {
            setMensajeModal(mensaje);
            setMostrarModalMensaje(true);
            return;
        }
        setConteoCliente(dato);
    }
    
    useEffect(() => { 
        obtenerConteoPoliza(); 
        obtenerConteoCliente();
    }, [])

    return (
        <div>
            <MenuLateralComponent />

            <div className="pc-container">
                <div className="pc-content">
                    <div className="row">
                        <div className="col-sm-12">


                            <div className="pc-container">
                                <div className="pc-content">

                                    <div className="row">

                                        <div className="col-md-6 col-xl-3">
                                            <div className="card">
                                                <div className="card-body">
                                                    <h6 className="mb-2 f-w-400 text-muted">Total Clientes</h6>
                                                    <h4 className="mb-3">{conteoCliente}</h4>
                                                    <p className="mb-0 text-muted text-sm">Total de clientes del sistema</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-xl-3">
                                            <div className="card">
                                                <div className="card-body">
                                                    <h6 className="mb-2 f-w-400 text-muted">Total Pólizas</h6>
                                                    <h4 className="mb-3">{conteoPoliza}</h4>
                                                    <p className="mb-0 text-muted text-sm">Total de pólizas activas</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardPage