using EN.Models;
using Microsoft.EntityFrameworkCore;
using Poliza.DTO;
using Utilidades.DTO;

namespace Poliza.Servicios.Poliza
{
    public class PolizaObtenerLista
    {
        private readonly dbContext _dbContext;

        public PolizaObtenerLista(dbContext dbContext)
        {
            _dbContext = dbContext;
        }
        public async Task<Respuesta<List<PolizaDTO>>> ObtenerLista(ConsultarListado<PolizaFiltroDTO> filtro)
        {
            try
            {
                var respuesta = new Respuesta<List<PolizaDTO>>();
                List<Poliza_Poliza>? lista = null;
                using (var transaction = await _dbContext.Database.BeginTransactionAsync())
                {
                    var totalDatos = await _dbContext.Poliza_Poliza.CountAsync(x => x.EstaEliminado == false);
                    var query = _dbContext.Poliza_Poliza.Where(x => x.EstaEliminado == false);

                    query = !string.IsNullOrEmpty(filtro.Filtro!.NumeroPoliza) ? query.Where(x => x.NumeroPoliza == filtro.Filtro.NumeroPoliza) : query;
                    query = !string.IsNullOrEmpty(filtro.Filtro!.TipoPoliza) ? query.Where(x => x.TipoPoliza == filtro.Filtro.TipoPoliza) : query;
                    query = filtro.Filtro!.FechaVencimiento is not null ? query.Where(x => x.FechaVencimiento!.Value.Date == filtro.Filtro.FechaVencimiento.Value.Date) : query;
                    query = !string.IsNullOrEmpty(filtro.Filtro!.CedulaAsegurado) ? query.Where(x => x.CedulaAsegurado == filtro.Filtro.CedulaAsegurado) : query;

                    lista = await query
                        .Skip((int)filtro.CantidadDatos! * ((int)filtro.PaginaActual! - 1))
                        .Take((int)filtro.CantidadDatos)
                        .ToListAsync();

                    respuesta.totalPaginas = (int)Math.Ceiling((double)totalDatos / (int)filtro.CantidadDatos);
                    respuesta.totalDatos = totalDatos;
                    respuesta.paginaActual = (int)filtro.PaginaActual;
                }

                var listaRegistros = new List<PolizaDTO>();
                if (lista.Any())
                {
                    listaRegistros.AddRange(lista.Select(x => new PolizaDTO()
                    {
                        Id = x.Id,
                        NumeroPoliza = x.NumeroPoliza,
                        TipoPoliza = x.TipoPoliza,
                        CedulaAsegurado = x.CedulaAsegurado,
                        MontoAsegurado = x.MontoAsegurado,
                        FechaVencimiento = x.FechaVencimiento,
                        FechaEmision = x.FechaEmision,
                        Coberturas = x.Coberturas,
                        EstadoPoliza = x.EstadoPoliza,
                        Prima = x.Prima,
                        Periodo = x.Periodo,
                        FechaInclusion = x.FechaInclusion,
                        Aseguradora = x.Aseguradora
                    }));
                }

                respuesta.Dato = listaRegistros;
                respuesta.Mensaje = "Se ha obtenido la lista de pólizas correctamente";
                respuesta.Exito = true;

                return respuesta;
            }
            catch
            {
                return new Respuesta<List<PolizaDTO>>
                {
                    Exito = false,
                    Mensaje = "Ha ocurrido en el obtener de pólizas"
                };
            }
        }
    }
}
