using EN.Models;
using Microsoft.EntityFrameworkCore;
using Persona.DTO.Cliente;
using Utilidades.DTO;

namespace Persona.Servicios.Cliente
{
    public class ClienteObtenerLista
    {
        private readonly dbContext _dbContext;

        public ClienteObtenerLista(dbContext dbContext)
        {
            _dbContext = dbContext;
        }
        public async Task<Respuesta<List<ClienteDTO>>> ObtenerLista(ConsultarListado<ClienteFiltroDTO> filtro)
        {
            try
            {
                var respuesta = new Respuesta<List<ClienteDTO>>();
                List<Cliente_Cliente>? lista = null;
                using (var transaction = await _dbContext.Database.BeginTransactionAsync())
                {
                    var totalDatos = await _dbContext.Cliente_Cliente.CountAsync(x => x.EstaEliminado == false);
                    var query = _dbContext.Cliente_Cliente.Where(x => x.EstaEliminado == false);

                    query = !string.IsNullOrEmpty(filtro.Filtro!.CedulaAsegurado) ? query.Where(x => x.CedulaAsegurado == filtro.Filtro.CedulaAsegurado) : query;
                    query = !string.IsNullOrEmpty(filtro.Filtro!.TipoPersona) ? query.Where(x => x.TipoPersona == filtro.Filtro.TipoPersona) : query;

                    if (!string.IsNullOrEmpty(filtro.Filtro!.Nombre))
                    {
                        query = query.Where(x => 
                        x.Nombre!.Contains(filtro.Filtro.Nombre) || 
                        x.PrimerApellido!.Contains(filtro.Filtro.Nombre) || 
                        x.SegundoApellido!.Contains(filtro.Filtro.Nombre));
                    }

                    lista = await query
                        .Skip((int)filtro.CantidadDatos! * ((int)filtro.PaginaActual! - 1))
                        .Take((int)filtro.CantidadDatos)
                        .ToListAsync();

                    respuesta.totalPaginas = (int)Math.Ceiling((double)totalDatos / (int)filtro.CantidadDatos);
                    respuesta.totalDatos = totalDatos;
                    respuesta.paginaActual = (int)filtro.PaginaActual;
                }

                var listaRegistros = new List<ClienteDTO>();
                if (lista.Any())
                {
                    listaRegistros.AddRange(lista.Select(x => new ClienteDTO()
                    {
                        CedulaAsegurado = x.CedulaAsegurado,
                        Nombre = x.Nombre,
                        PrimerApellido = x.PrimerApellido,
                        SegundoApellido = x.SegundoApellido,
                        TipoPersona = x.TipoPersona,
                        FechaNacimiento = x.FechaNacimiento,
                    }));
                }

                respuesta.Dato = listaRegistros;
                respuesta.Mensaje = "Se ha obtenido la lista de clientes correctamente";
                respuesta.Exito = true;

                return respuesta;
            }
            catch
            {
                return new Respuesta<List<ClienteDTO>>
                {
                    Exito = false,
                    Mensaje = "Ha ocurrido en el obtener de clientes"
                };
            }
        }
    }
}
