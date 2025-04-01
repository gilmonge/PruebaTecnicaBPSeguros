import React from 'react'
import { useNavigate } from 'react-router-dom'
import Rutas from '../../util/Rutas'

const MenuLateralComponent = () => {
    const navigate = useNavigate()

    const redireccionar = (ruta) => { navigate(ruta); }

    const cerrarSesion = () => {
        navigate(Rutas.LoginPage)
    }

    return (
        <nav className="pc-sidebar">
            <div className="navbar-wrapper">
                <div className="m-header mt-5">
                    <a  onClick={() => redireccionar(Rutas.DashboardPage)}   className="b-brand text-primary" >
                        <img src="/assets/image/popular-seguros.png" className="img-fluid logo-lg" alt="logo" />
                    </a>
                </div>
                <div className="navbar-content">
                    <ul className="pc-navbar">
                        <li className="pc-item">
                            <a onClick={() => redireccionar(Rutas.DashboardPage)} className="pc-link">
                                <span className="pc-micon"><i className="ti ti-dashboard text-purple-500"></i></span>
                                <span className="pc-mtext">Pantalla inicial</span>
                            </a>
                        </li>

                        <li className="pc-item pc-caption">
                            <label>Opciones</label>
                            <i className="ti ti-dashboard"></i>
                        </li>
                        <li className="pc-item">
                            <a onClick={() => redireccionar(Rutas.ClientePage)} className="pc-link">
                                <span className="pc-micon"><i className="ti ti-plant-2 text-purple-500"></i></span>
                                <span className="pc-mtext">Clientes</span>
                            </a>
                        </li>
                        <li className="pc-item">
                            <a onClick={() => redireccionar(Rutas.PolizaPage)} className="pc-link">
                                <span className="pc-micon"><i className="ti ti-color-swatch text-purple-500"></i></span>
                                <span className="pc-mtext">Pólizas</span>
                            </a>
                        </li>
                        <li className="pc-item pc-caption">
                            <label></label>
                            <i className="ti ti-dashboard"></i>
                        </li>
                        <li className="pc-item">
                            <a onClick={cerrarSesion} className="pc-link">
                                <span className="pc-micon"><i className="ti ti-power text-danger"></i></span>
                                <span className="pc-mtext">Cerrar sesión</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default MenuLateralComponent
