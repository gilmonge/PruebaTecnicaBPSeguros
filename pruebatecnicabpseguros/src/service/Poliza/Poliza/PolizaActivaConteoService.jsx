import RutaServiciosUtil from '../../../util/RutaServiciosUtil';
import GetService from '../../Generico/GetService';

class PolizaActivaConteoService {
    async servicio() {
        const getService = new GetService();
        return await getService.getService(`${RutaServiciosUtil.Poliza}/Poliza/Conteo`, "");
    }
}
export default PolizaActivaConteoService