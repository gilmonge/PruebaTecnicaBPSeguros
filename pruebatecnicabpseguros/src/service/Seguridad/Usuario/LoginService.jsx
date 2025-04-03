import RutaServiciosUtil from '../../../util/RutaServiciosUtil';
import PostService from '../../Generico/PostService';

class LoginService {
    async servicio(usuario) {
        const postService = new PostService();
        return await postService.postService(`${RutaServiciosUtil.Seguridad}/Usuario/Login`, usuario);
    }
}
export default LoginService