using Microsoft.AspNetCore.Mvc;
using Poliza.Atributos;
using Poliza.DTO;
using Poliza.Servicios.Poliza;
using Utilidades.DTO;

namespace Poliza.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class PolizaController : ControllerBase
    {
        private readonly PolizaEditarAgregar _polizaEditarAgregar;
        private readonly PolizaEliminar _polizaEliminar;
        private readonly PolizaObtenerDetalle _polizaObtenerDetalle;
        private readonly PolizaObtenerLista _polizaObtenerLista;

        public PolizaController(PolizaEditarAgregar polizaEditarAgregar, PolizaEliminar polizaEliminar, PolizaObtenerDetalle polizaObtenerDetalle, PolizaObtenerLista polizaObtenerLista)
        {
            _polizaEditarAgregar = polizaEditarAgregar;
            _polizaEliminar = polizaEliminar;
            _polizaObtenerDetalle = polizaObtenerDetalle;
            _polizaObtenerLista = polizaObtenerLista;
        }

        [HttpPost]
        [AutorizacionPersonalizada]
        public async Task<Respuesta<string>> EditarAgregar([FromBody] PolizaEditarAgregarDTO poliza) => await _polizaEditarAgregar.EditarAgregar(poliza);

        [HttpDelete("{idPoliza}")]
        [AutorizacionPersonalizada]
        public async Task<Respuesta<bool>> Eliminar(string idPoliza) => await _polizaEliminar.Eliminar(idPoliza);

        [HttpGet("{idPoliza}")]
        [AutorizacionPersonalizada]
        public async Task<Respuesta<PolizaDTO>> ObtenerDetalle(string idPoliza) => await _polizaObtenerDetalle.ObtenerDetalle(idPoliza);

        [HttpPost]
        [AutorizacionPersonalizada]
        public async Task<Respuesta<List<PolizaDTO>>> ObtenerLista([FromBody] ConsultarListado<PolizaFiltroDTO> filtro) => await _polizaObtenerLista.ObtenerLista(filtro);
    }
}
