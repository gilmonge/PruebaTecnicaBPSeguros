import RutaServiciosUtil from '../../../util/RutaServiciosUtil';
import PostService from '../../Generico/PostService';

class AgregarService {
    async servicio(usuario) {
        const postService = new PostService();
        return await postService.postService(`${RutaServiciosUtil.Seguridad}/Usuario/Agregar`, usuario);
    }
}
export default AgregarService