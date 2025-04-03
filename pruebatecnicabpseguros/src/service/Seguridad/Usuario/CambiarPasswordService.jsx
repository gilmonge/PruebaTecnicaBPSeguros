import RutaServiciosUtil from '../../../util/RutaServiciosUtil';
import PostService from '../../Generico/PostService';

class CambiarPasswordService {
    async servicio(usuario) {
        const postService = new PostService();
        return await postService.postService(`${RutaServiciosUtil.Seguridad}/Usuario/CambiarPassword`, usuario);
    }
}
export default CambiarPasswordService