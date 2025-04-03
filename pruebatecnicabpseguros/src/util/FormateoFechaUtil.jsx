export default class FormateoFechaUtil {
    formateoFechaListado = (fecha) => {
        const fechaObj = new Date(fecha)
      
        const dia = String(fechaObj.getDate()).padStart(2, '0')
        const mes = String(fechaObj.getMonth() + 1).padStart(2, '0') // ¡Mes va de 0 a 11!
        const anio = fechaObj.getFullYear()
      
        return `${dia}-${mes}-${anio}`
    }
}