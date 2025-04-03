using EN.Models;
using Microsoft.EntityFrameworkCore;
using Utilidades.DTO;

namespace Persona.Servicios.Cliente
{
    public class ClienteEliminar
    {
        private readonly dbContext _dbContext;

        public ClienteEliminar(dbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<Respuesta<bool>> Eliminar(string cedulaAsegurado)
        {
            try
            {
                var respuesta = new Respuesta<bool>();
                using (var transaction = await _dbContext.Database.BeginTransactionAsync())
                {
                    var clienteDB = await _dbContext.Cliente_Cliente.FirstOrDefaultAsync(x => 
                        x.CedulaAsegurado == cedulaAsegurado && x.EstaEliminado == false
                    );

                    if (clienteDB is null)
                    {
                        respuesta.Exito = false;
                        respuesta.Mensaje = "No se ha encontrado el cliente";
                        return respuesta;
                    }

                    clienteDB.EstaEliminado = true;

                    _dbContext.Cliente_Cliente.Update(clienteDB);

                    await _dbContext.SaveChangesAsync();
                    await transaction.CommitAsync();

                    respuesta.Mensaje = "Se ha eliminado el cliente correctamente";
                }

                respuesta.Exito = true;
                respuesta.Dato = true;
                return respuesta;
            }
            catch
            {
                return new Respuesta<bool>
                {
                    Exito = false,
                    Mensaje = "Ha ocurrido en el eliminar cliente"
                };
            }
        }
    }
}
