using EN.Models;
using Microsoft.EntityFrameworkCore;
using Poliza.DTO;
using Utilidades.DTO;

namespace Poliza.Servicios.Poliza
{
    public class PolizaObtenerDetalle
    {
        private readonly dbContext _dbContext;

        public PolizaObtenerDetalle(dbContext dbContext)
        {
            _dbContext = dbContext;
        }
        public async Task<Respuesta<PolizaDTO>> ObtenerDetalle(string idPoliza)
        {
            try
            {
                var respuesta = new Respuesta<PolizaDTO>();
                Poliza_Poliza? polizaDB = null;
                using (var transaction = await _dbContext.Database.BeginTransactionAsync())
                {
                    polizaDB = await _dbContext.Poliza_Poliza.FirstOrDefaultAsync(x =>
                        x.Id == idPoliza && x.EstaEliminado == false
                    );
                }

                if (polizaDB is null)
                {
                    respuesta.Exito = false;
                    respuesta.Mensaje = "No se ha encontrado la póliza";
                    return respuesta;
                }

                respuesta.Dato = new PolizaDTO()
                {
                    Id = polizaDB.Id,
                    NumeroPoliza = polizaDB.NumeroPoliza,
                    TipoPoliza = polizaDB.TipoPoliza,
                    CedulaAsegurado = polizaDB.CedulaAsegurado,
                    MontoAsegurado = polizaDB.MontoAsegurado,
                    FechaVencimiento = polizaDB.FechaVencimiento,
                    FechaEmision = polizaDB.FechaEmision,
                    Coberturas = polizaDB.Coberturas,
                    EstadoPoliza = polizaDB.EstadoPoliza,
                    Prima = polizaDB.Prima,
                    Periodo = polizaDB.Periodo,
                    FechaInclusion = polizaDB.FechaInclusion,
                    Aseguradora = polizaDB.Aseguradora
                };
                respuesta.Mensaje = "Se ha obtenido la póliza correctamente";
                respuesta.Exito = true;

                return respuesta;
            }
            catch
            {
                return new Respuesta<PolizaDTO>
                {
                    Exito = false,
                    Mensaje = "Ha ocurrido en el obtener la póliza"
                };
            }
        }
    }
}
