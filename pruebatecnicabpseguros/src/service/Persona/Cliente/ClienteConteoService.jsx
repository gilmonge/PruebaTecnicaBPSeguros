import RutaServiciosUtil from '../../../util/RutaServiciosUtil';
import GetService from '../../Generico/GetService';

class ClienteConteoService {
    async servicio() {
        const getService = new GetService();
        return await getService.getService(`${RutaServiciosUtil.Persona}/Cliente/Conteo`, "");
    }
}
export default ClienteConteoService