import RutaServiciosUtil from '../../../util/RutaServiciosUtil';
import GetService from '../../Generico/GetService';

class ObtenerDetalleService {
    async servicio(id) {
        const getService = new GetService();
        return await getService.getService(`${RutaServiciosUtil.Persona}/Cliente/ObtenerDetalle`, id);
    }
}
export default ObtenerDetalleService