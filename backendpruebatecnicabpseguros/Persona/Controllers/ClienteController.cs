using Microsoft.AspNetCore.Mvc;
using Persona.Atributos;
using Persona.DTO.Cliente;
using Persona.Servicios.Cliente;
using Utilidades.DTO;

namespace Persona.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class ClienteController : ControllerBase
    {
        private readonly ClienteEditarAgregar _clienteEditarAgregar;
        private readonly ClienteEliminar _clienteEliminar;
        private readonly ClienteObtenerDetalle _clienteObtenerDetalle;
        private readonly ClienteObtenerLista _clienteObtenerLista;

        public ClienteController(ClienteEditarAgregar clienteEditarAgregar, ClienteEliminar clienteEliminar, ClienteObtenerDetalle clienteObtenerDetalle, ClienteObtenerLista clienteObtenerLista)
        {
            _clienteEditarAgregar = clienteEditarAgregar;
            _clienteEliminar = clienteEliminar;
            _clienteObtenerDetalle = clienteObtenerDetalle;
            _clienteObtenerLista = clienteObtenerLista;
        }

        [HttpPost]
        [AutorizacionPersonalizada]
        public async Task<Respuesta<string>> EditarAgregar([FromBody] ClienteEditarAgregarDTO cliente) => await _clienteEditarAgregar.EditarAgregar(cliente);

        [HttpDelete("{cedulaAsegurado}")]
        [AutorizacionPersonalizada]
        public async Task<Respuesta<bool>> Eliminar(string cedulaAsegurado) => await _clienteEliminar.Eliminar(cedulaAsegurado);

        [HttpGet("{cedulaAsegurado}")]
        [AutorizacionPersonalizada]
        public async Task<Respuesta<ClienteDTO>> ObtenerDetalle(string cedulaAsegurado) => await _clienteObtenerDetalle.ObtenerDetalle(cedulaAsegurado);

        [HttpPost]
        [AutorizacionPersonalizada]
        public async Task<Respuesta<List<ClienteDTO>>> ObtenerLista([FromBody] ConsultarListado<ClienteFiltroDTO> filtro) => await _clienteObtenerLista.ObtenerLista(filtro);
    }
}
