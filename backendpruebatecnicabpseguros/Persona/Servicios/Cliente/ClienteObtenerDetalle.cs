using EN.Models;
using Microsoft.EntityFrameworkCore;
using Persona.DTO.Cliente;
using Utilidades.DTO;

namespace Persona.Servicios.Cliente
{
    public class ClienteObtenerDetalle
    {
        private readonly dbContext _dbContext;

        public ClienteObtenerDetalle(dbContext dbContext)
        {
            _dbContext = dbContext;
        }
        public async Task<Respuesta<ClienteDTO>> ObtenerDetalle(string cedulaAsegurado)
        {
            try
            {
                var respuesta = new Respuesta<ClienteDTO>();
                Cliente_Cliente? clienteDB = null;
                using (var transaction = await _dbContext.Database.BeginTransactionAsync())
                {
                    clienteDB = await _dbContext.Cliente_Cliente.FirstOrDefaultAsync(x =>
                        x.CedulaAsegurado == cedulaAsegurado && x.EstaEliminado == false
                    );
                }

                if (clienteDB is null)
                {
                    respuesta.Exito = false;
                    respuesta.Mensaje = "No se ha encontrado el cliente";
                    return respuesta;
                }

                respuesta.Dato = new ClienteDTO()
                {
                    CedulaAsegurado = clienteDB.CedulaAsegurado,
                    Nombre = clienteDB.Nombre,
                    PrimerApellido = clienteDB.PrimerApellido,
                    SegundoApellido = clienteDB.SegundoApellido,
                    TipoPersona = clienteDB.TipoPersona,
                    FechaNacimiento = clienteDB.FechaNacimiento,
                };
                respuesta.Mensaje = "Se ha obtenido el cliente correctamente";
                respuesta.Exito = true;

                return respuesta;
            }
            catch
            {
                return new Respuesta<ClienteDTO>
                {
                    Exito = false,
                    Mensaje = "Ha ocurrido en el obtener cliente"
                };
            }
        }
    }
}
