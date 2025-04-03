import RutaServiciosUtil from '../../../util/RutaServiciosUtil';
import DeleteService from '../../Generico/DeleteService';

class EliminarService {
    async servicio(id) {
        const deleteService = new DeleteService();
        return await deleteService.deleteService(`${RutaServiciosUtil.Persona}/Cliente/Eliminar`, id);
    }
}
export default EliminarService