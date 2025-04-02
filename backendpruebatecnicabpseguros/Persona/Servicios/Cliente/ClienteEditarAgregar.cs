using EN.Models;
using Microsoft.EntityFrameworkCore;
using Persona.DTO.Cliente;
using Utilidades.DTO;

namespace Persona.Servicios.Cliente
{
    public class ClienteEditarAgregar
    {
        private readonly dbContext _dbContext;

        public ClienteEditarAgregar(dbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<Respuesta<bool>> EditarAgregar(ClienteEditarAgregarDTO cliente)
        {
            try {
                var respuesta = new Respuesta<bool>();
                using (var transaction = await _dbContext.Database.BeginTransactionAsync())
                {
                    var clienteDB = await _dbContext.Cliente_Cliente.FirstOrDefaultAsync(x => 
                        x.CedulaAsegurado == cliente.CedulaAsegurado
                    );

                    if(clienteDB is not null)
                    {
                        clienteDB.Nombre = cliente.Nombre;
                        clienteDB.PrimerApellido = cliente.PrimerApellido;
                        clienteDB.SegundoApellido = cliente.SegundoApellido;
                        clienteDB.TipoPersona = cliente.TipoPersona;
                        clienteDB.FechaNacimiento = cliente.FechaNacimiento;

                        _dbContext.Cliente_Cliente.Update(clienteDB);

                        respuesta.Mensaje = "Se ha editado el cliente correctamente";
                    }
                    else
                    {
                        var nuevoCliente = new Cliente_Cliente
                        {
                            CedulaAsegurado = cliente.CedulaAsegurado!,
                            Nombre = cliente.Nombre,
                            PrimerApellido = cliente.PrimerApellido,
                            SegundoApellido = cliente.SegundoApellido,
                            TipoPersona = cliente.TipoPersona,
                            FechaNacimiento = cliente.FechaNacimiento
                        };

                        await _dbContext.Cliente_Cliente.AddAsync(nuevoCliente);
                    }

                    await _dbContext.SaveChangesAsync();
                    await transaction.CommitAsync();

                    respuesta.Mensaje = "Se ha creado el cliente correctamente";
                }

                respuesta.Exito = true;

                return respuesta;
            }
            catch (Exception ex) { 
                return new Respuesta<bool> { 
                    Exito = false, 
                    Mensaje = "Ha ocurrido en el crear/editar cliente"
                };
            }
        }
    }
}
