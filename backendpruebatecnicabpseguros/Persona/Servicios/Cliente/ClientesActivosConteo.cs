using EN.Models;
using Utilidades.DTO;

namespace Persona.Servicios.Cliente
{
    public class ClientesActivosConteo
    {
        private readonly dbContext _dbContext;

        public ClientesActivosConteo(dbContext dbContext)
        {
            _dbContext = dbContext;
        }
        public async Task<Respuesta<int>> Conteo()
        {
            try
            {
                var respuesta = new Respuesta<int>();

                using (var transaction = await _dbContext.Database.BeginTransactionAsync())
                {
                    var query = _dbContext.Cliente_Cliente.Where(x => x.EstaEliminado == false);
                    respuesta.Dato = query.Count();
                    respuesta.Exito = true;
                    respuesta.Mensaje = "Se ha obtenido el conteo de los clientes";
                }

                return respuesta;
            }
            catch
            {
                return new Respuesta<int>
                {
                    Exito = false,
                    Mensaje = "Ha ocurrido en el obtener de clientes"
                };
            }
        }
    }
}
