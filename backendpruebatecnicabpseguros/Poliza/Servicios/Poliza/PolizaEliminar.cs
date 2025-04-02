using EN.Models;
using Microsoft.EntityFrameworkCore;
using Utilidades.DTO;

namespace Poliza.Servicios.Poliza
{
    public class PolizaEliminar
    {
        private readonly dbContext _dbContext;

        public PolizaEliminar(dbContext dbContext)
        {
            _dbContext = dbContext;
        }
        public async Task<Respuesta<bool>> Eliminar(string idPoliza)
        {
            try
            {
                var respuesta = new Respuesta<bool>();
                using (var transaction = await _dbContext.Database.BeginTransactionAsync())
                {
                    var clienteDB = await _dbContext.Poliza_Poliza.FirstOrDefaultAsync(x =>
                        x.id == idPoliza && x.EstaEliminado == false
                    );

                    if (clienteDB is null)
                    {
                        respuesta.Exito = false;
                        respuesta.Mensaje = "No se ha encontrado la póliza";
                        return respuesta;
                    }

                    clienteDB.EstaEliminado = true;

                    _dbContext.Poliza_Poliza.Update(clienteDB);

                    await _dbContext.SaveChangesAsync();
                    await transaction.CommitAsync();

                    respuesta.Mensaje = "Se ha eliminado la póliza correctamente";
                }

                respuesta.Exito = true;

                return respuesta;
            }
            catch (Exception ex)
            {
                return new Respuesta<bool>
                {
                    Exito = false,
                    Mensaje = "Ha ocurrido en el eliminar póliza"
                };
            }
        }
    }
}
