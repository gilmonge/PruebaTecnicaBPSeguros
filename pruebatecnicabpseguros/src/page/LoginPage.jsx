import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Rutas from '../util/RutasUtil'
import InputTextComponent from "../component/Controles/InputTextComponent";
import LoginService from '../service/Seguridad/Usuario/LoginService';
import ModalComponent from "../component/Modal/ModalComponent";
import TamaniosModalUtil from "../util/TamaniosModalUtil";
import { Navigate } from 'react-router-dom'

const LoginPage = () => {
    const userData = localStorage.getItem('user')
    if (userData) {
        return <Navigate to={Rutas.DashboardPage} />
    }
    
    const navigate = useNavigate()
    const [mostrarModalMensaje, setMostrarModalMensaje] = useState(false);
    const [mensajeModal, setMensajeModal] = useState("");
    const [loginModel, setLoginModel] = useState({usuario: 'gilberth.monge@outlook.com', password: '123456a'});
    const obligatorioModelo  = {usuario: true, password: true,};

    const iniciarSesion = async () => {
        const resultadoValidacion = validarInformacion();

        if(!resultadoValidacion) {
            setMensajeModal('El formulario no es válido.');
            setMostrarModalMensaje(true);
            return;
        }
        
        setMensajeModal("Iniciando sesión");
        setMostrarModalMensaje(true);

        const loginService = new LoginService();
        const {exito, mensaje, dato} = await loginService.servicio(loginModel);

        setMostrarModalMensaje(false);

        if (!exito) {
            setMensajeModal(mensaje);
            setMostrarModalMensaje(true);
            return;
        }

        localStorage.setItem('user', JSON.stringify(dato))
        navigate(Rutas.DashboardPage);
    }
    
    const validarInformacion = () => {
        var valido = true;
        const { usuario, password } = loginModel;
        
        if(obligatorioModelo.usuario) {
            if(usuario === null || usuario === '') valido = false;
        }

        if(obligatorioModelo.password) {
            if(password === null || password === '') valido = false;
        }

        return valido;
    }

    return (
        <div className="auth-main">
            <div className="auth-wrapper v3">
                <div className="auth-form">
                    <div className="card my-5">
                        <div className="row text-center pt-3">
                            <div>
                                <img src="/assets/image/popular-seguros.png" alt="img" className="w-80" />
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="d-flex justify-content-between align-items-end mb-4">
                                <h3 className="mb-0"><b>Inicio de sesión</b></h3>
                            </div>
                            <div className="form-group mb-3">
                                <InputTextComponent 
                                    setModelo={setLoginModel}
                                    datoInput={loginModel.usuario}
                                    label="Correo electrónico"
                                    placeholder="Correo electrónico"
                                    name="usuario"
                                    esObligatorio={(obligatorioModelo.usuario && obligatorioModelo.usuario === true) ? true : false}
                                />
                            </div>
                            <div className="form-group mb-3">
                                <InputTextComponent 
                                    setModelo={setLoginModel}
                                    datoInput={loginModel.password}
                                    label="Constraseña"
                                    placeholder="Constraseña"
                                    name="password"
                                    esObligatorio={(obligatorioModelo.password && obligatorioModelo.password === true) ? true : false}
                                    type="password"
                                />
                            </div>
                            <div className="d-grid mt-4">
                                <button
                                    onClick={iniciarSesion} 
                                    type="button" 
                                    className="btn btn-primary"
                                >Ingresar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <ModalComponent 
                mostrar={mostrarModalMensaje} 
                setmostrar={setMostrarModalMensaje}
                tamanioModal={TamaniosModalUtil.Normal}
                mostrarTitulo={false}
            >
                <p>{mensajeModal}</p>
            </ModalComponent>
        </div>
    )
}

export default LoginPage