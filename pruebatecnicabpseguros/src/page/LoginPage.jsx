import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Rutas from '../util/Rutas'

const LoginPage = () => {
    const navigate = useNavigate()
    const [loginModel, setLoginModel] = useState({correo: '', password: ''});

    const iniciarSesion = () => {
        navigate(Rutas.DashboardPage);
    }
    const handleChange = (e) => {
        setLoginModel(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
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
                                <label className="form-label">Correo electrónico</label>
                                <input 
                                    type="email" 
                                    name="correo"
                                    className="form-control" 
                                    placeholder="Correo electrónico" 
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group mb-3">
                                <label className="form-label">Constraseña</label>
                                <input 
                                    type="password" 
                                    name="password"
                                    className="form-control" 
                                    placeholder="Constraseña" 
                                    onChange={handleChange}
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
        </div>
    )
}

export default LoginPage