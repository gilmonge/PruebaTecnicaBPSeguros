import RutaServiciosUtil from '../../../util/RutaServiciosUtil';
import PostService from '../../Generico/PostService';

class ObtenerListaService {
    async servicio(filtro) {
        const postService = new PostService();
        return await postService.postService(`${RutaServiciosUtil.Poliza}/Poliza/ObtenerLista`, filtro);
    }
}
export default ObtenerListaService