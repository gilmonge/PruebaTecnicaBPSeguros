using EN.Models;
using Microsoft.EntityFrameworkCore;
using Seguridad.DTO.Usuario;
using Utilidades.DTO;

namespace Seguridad.Servicios.Usuario
{
    public class UsuarioObtenerLista
    {
        private readonly dbContext _dbContext;

        public UsuarioObtenerLista(dbContext dbContext)
        {
            _dbContext = dbContext;
        }
        public async Task<Respuesta<List<UsuarioDTO>>> ObtenerLista(ConsultarListado<UsuarioFiltroDTO> filtro)
        {
            try
            {
                var respuesta = new Respuesta<List<UsuarioDTO>>();
                List<Seguridad_Usuario>? lista = null;
                using (var transaction = await _dbContext.Database.BeginTransactionAsync())
                {
                    var totalDatos = await _dbContext.Seguridad_Usuario.CountAsync(x => x.EstaEliminado == false);
                    var query = _dbContext.Seguridad_Usuario.Where(x => x.EstaEliminado == false);

                    query = !string.IsNullOrEmpty(filtro.Filtro!.Usuario) ? query.Where(x => x.Usuario == filtro.Filtro.Usuario) : query;

                    lista = await query
                        .Skip((int)filtro.CantidadDatos! * ((int)filtro.PaginaActual! - 1))
                        .Take((int)filtro.CantidadDatos)
                        .ToListAsync();

                    respuesta.totalPaginas = (int)Math.Ceiling((double)totalDatos / (int)filtro.CantidadDatos);
                    respuesta.totalDatos = totalDatos;
                    respuesta.paginaActual = (int)filtro.PaginaActual;
                }

                var listaRegistros = new List<UsuarioDTO>();
                if (lista.Any())
                {
                    listaRegistros.AddRange(lista.Select(x => new UsuarioDTO()
                    {
                        Id = x.Id,
                        Usuario = x.Usuario
                    }));
                }

                respuesta.Dato = listaRegistros;
                respuesta.Mensaje = "Se ha obtenido la lista de usuario correctamente";
                respuesta.Exito = true;

                return respuesta;
            }
            catch
            {
                return new Respuesta<List<UsuarioDTO>>
                {
                    Exito = false,
                    Mensaje = "Ha ocurrido en el obtener de usuario"
                };
            }
        }
    }
}
