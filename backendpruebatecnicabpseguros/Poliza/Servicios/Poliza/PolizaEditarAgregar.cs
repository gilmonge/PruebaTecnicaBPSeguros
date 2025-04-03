using EN.Models;
using Microsoft.EntityFrameworkCore;
using Poliza.DTO;
using Utilidades.DTO;

namespace Poliza.Servicios.Poliza
{
    public class PolizaEditarAgregar
    {
        private readonly dbContext _dbContext;

        public PolizaEditarAgregar(dbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<Respuesta<string>> EditarAgregar(PolizaEditarAgregarDTO poliza)
        {
            try
            {
                var respuesta = new Respuesta<string>();
                using (var transaction = await _dbContext.Database.BeginTransactionAsync())
                {
                    Poliza_Poliza? polizaDB = null;
                    if(poliza.Id is not null)
                    {
                        polizaDB = await _dbContext.Poliza_Poliza.FirstOrDefaultAsync(x =>
                            x.Id == poliza.Id
                        );
                    }

                    if (polizaDB is not null)
                    {
                        polizaDB.NumeroPoliza = poliza.NumeroPoliza;
                        polizaDB.TipoPoliza = poliza.TipoPoliza;
                        polizaDB.CedulaAsegurado = poliza.CedulaAsegurado;
                        polizaDB.MontoAsegurado = poliza.MontoAsegurado;
                        polizaDB.FechaVencimiento = poliza.FechaVencimiento;
                        polizaDB.FechaEmision = poliza.FechaEmision;
                        polizaDB.Coberturas = poliza.Coberturas;
                        polizaDB.EstadoPoliza = poliza.EstadoPoliza;
                        polizaDB.Prima = poliza.Prima;
                        polizaDB.Periodo = poliza.Periodo;
                        polizaDB.FechaInclusion = poliza.FechaInclusion;
                        polizaDB.Aseguradora = poliza.Aseguradora;
                        polizaDB.EstaEliminado = false;
                        _dbContext.Poliza_Poliza.Update(polizaDB);

                        respuesta.Mensaje = "Se ha editado la póliza correctamente";
                    }
                    else
                    {
                        var nuevaPoliza = new Poliza_Poliza()
                        {
                            Id = Guid.NewGuid().ToString(),
                            NumeroPoliza = poliza.NumeroPoliza,
                            TipoPoliza = poliza.TipoPoliza,
                            CedulaAsegurado = poliza.CedulaAsegurado!,
                            MontoAsegurado = poliza.MontoAsegurado,
                            FechaVencimiento = poliza.FechaVencimiento,
                            FechaEmision = poliza.FechaEmision,
                            Coberturas = poliza.Coberturas,
                            EstadoPoliza = poliza.EstadoPoliza,
                            Prima = poliza.Prima,
                            Periodo = poliza.Periodo,
                            FechaInclusion = poliza.FechaInclusion,
                            Aseguradora = poliza.Aseguradora,
                        };

                        await _dbContext.Poliza_Poliza.AddAsync(nuevaPoliza);
                    }

                    await _dbContext.SaveChangesAsync();
                    await transaction.CommitAsync();

                    respuesta.Mensaje = "Se ha creado la póliza correctamente";
                }

                respuesta.Exito = true;
                respuesta.Dato = poliza.Id!;

                return respuesta;
            }
            catch
            {
                return new Respuesta<string>
                {
                    Exito = false,
                    Mensaje = "Ha ocurrido en el crear/editar la póliza"
                };
            }
        }
    }
}
