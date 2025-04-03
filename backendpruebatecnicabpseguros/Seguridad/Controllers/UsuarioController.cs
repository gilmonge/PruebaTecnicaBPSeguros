using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Seguridad.Atributos;
using Seguridad.DTO.Usuario;
using Seguridad.Servicios.Usuario;
using Utilidades.DTO;

namespace Seguridad.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class UsuarioController : ControllerBase
    {
        private readonly UsuarioAgregar _usuarioAgregar;
        private readonly UsuarioCambiarPassword _usuarioCambiarPassword;
        private readonly UsuarioEliminar _usuarioEliminar;
        private readonly UsuarioLogin _usuarioLogin;
        private readonly UsuarioObtenerDetalle _usuarioObtenerDetalle;
        private readonly UsuarioObtenerLista _usuarioObtenerLista;

        public UsuarioController(UsuarioAgregar usuarioAgregar, UsuarioCambiarPassword usuarioCambiarPassword, UsuarioEliminar usuarioEliminar, UsuarioLogin usuarioLogin, UsuarioObtenerLista usuarioObtenerLista, UsuarioObtenerDetalle usuarioObtenerDetalle)
        {
            _usuarioAgregar = usuarioAgregar;
            _usuarioCambiarPassword = usuarioCambiarPassword;
            _usuarioEliminar = usuarioEliminar;
            _usuarioLogin = usuarioLogin;
            _usuarioObtenerDetalle = usuarioObtenerDetalle;
            _usuarioObtenerLista = usuarioObtenerLista;
        }

        [HttpPost]
        [AutorizacionPersonalizada]
        public async Task<Respuesta<string>> Agregar([FromBody] UsuarioAgregarDTO usuario) => await _usuarioAgregar.Agregar(usuario);

        [HttpPost]
        [AutorizacionPersonalizada]
        public async Task<Respuesta<bool>> CambiarPassword([FromBody] UsuarioCambiarPasswordDTO usuario) => await _usuarioCambiarPassword.CambiarPassword(usuario);

        [HttpDelete("{idUsuario}")]
        [AutorizacionPersonalizada]
        public async Task<Respuesta<bool>> Eliminar(string idUsuario) => await _usuarioEliminar.Eliminar(idUsuario);

        [HttpPost]
        public async Task<Respuesta<UsuarioLogueadoDTO>> Login([FromBody] UsuarioLoginDTO usuario) => await _usuarioLogin.Login(usuario);

        [HttpGet("{idUsuario}")]
        [AutorizacionPersonalizada]
        public async Task<Respuesta<UsuarioDTO>> ObtenerDetalle(string idUsuario) => await _usuarioObtenerDetalle.ObtenerDetalle(idUsuario);

        [HttpPost]
        [AutorizacionPersonalizada]
        public async Task<Respuesta<List<UsuarioDTO>>> ObtenerLista([FromBody] ConsultarListado<UsuarioFiltroDTO> filtro) => await _usuarioObtenerLista.ObtenerLista(filtro);
    }
}
