import { Navigate } from 'react-router-dom'
import RutasUtil from './util/RutasUtil'
import ValidarTokenJWTUtil from './util/ValidarTokenJWTUtil'

const RutaPrivada = ({ children }) => {
    const userData = localStorage.getItem('user')
    if (!userData) return <Navigate to={RutasUtil.LoginPage} />
    try {
        const { token } = JSON.parse(userData)
        const validarTokenJWTUtil = new ValidarTokenJWTUtil()
        if (!token || validarTokenJWTUtil.ValidarTokenJWT(token)) {
            localStorage.removeItem('user')
            return <Navigate to={RutasUtil.LoginPage} />
        }
        return children
    } catch {
        return <Navigate to={RutasUtil.LoginPage} />
    }
}

export default RutaPrivada