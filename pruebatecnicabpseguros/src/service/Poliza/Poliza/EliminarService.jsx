import RutaServiciosUtil from '../../../util/RutaServiciosUtil';
import DeleteService from '../../Generico/DeleteService';

class EliminarService {
    async servicio(id) {
        const deleteService = new DeleteService();
        return await deleteService.deleteService(`${RutaServiciosUtil.Poliza}/Poliza/Eliminar`, id);
    }
}
export default EliminarService