import RutaServiciosUtil from '../../../util/RutaServiciosUtil';
import PostService from '../../Generico/PostService';

class EditarAgregarService {
    async servicio(poliza) {
        const postService = new PostService();
        return await postService.postService(`${RutaServiciosUtil.Poliza}/Poliza/EditarAgregar`, poliza);
    }
}
export default EditarAgregarService