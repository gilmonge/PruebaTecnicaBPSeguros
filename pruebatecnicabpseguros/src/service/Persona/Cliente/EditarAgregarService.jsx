import RutaServiciosUtil from '../../../util/RutaServiciosUtil';
import PostService from '../../Generico/PostService';

class EditarAgregarService {
    async servicio(cliente) {
        const postService = new PostService();
        return await postService.postService(`${RutaServiciosUtil.Persona}/Cliente/EditarAgregar`, cliente);
    }
}
export default EditarAgregarService