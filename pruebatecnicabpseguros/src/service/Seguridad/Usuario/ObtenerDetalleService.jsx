import RutaServiciosUtil from '../../../util/RutaServiciosUtil';
import GetService from '../../Generico/GetService';

class ObtenerDetalleService {
    async servicio() {
        const getService = new GetService();
        return await getService.getService(`${RutaServiciosUtil.Seguridad}/Usuario/ObtenerDetalle`, id);
    }
}
export default ObtenerDetalleService