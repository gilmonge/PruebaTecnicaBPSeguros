export default class ValidarTokenJWTUtil {
    ValidarTokenJWT = (token) => {
        // true para expirado y false para no expirado
        try {
            const payloadBase64 = token.split('.')[1]
            const payloadJson = atob(payloadBase64)
            const payload = JSON.parse(payloadJson)

            if (!payload.exp) return true

            const ahora = Math.floor(Date.now() / 1000)
            return payload.exp < ahora
        } catch (error) {
            return true // Si hay error, se considera inválido
        }
    }
}