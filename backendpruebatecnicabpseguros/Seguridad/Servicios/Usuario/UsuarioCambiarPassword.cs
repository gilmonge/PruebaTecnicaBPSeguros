using EN.Models;
using Microsoft.EntityFrameworkCore;
using Seguridad.DTO.Usuario;
using Utilidades.DTO;
using Utilidades.Servicios;

namespace Seguridad.Servicios.Usuario
{
    public class UsuarioCambiarPassword
    {
        private readonly dbContext _dbContext;
        private readonly GenerarMD5Password _generarMD5Password;

        public UsuarioCambiarPassword(dbContext dbContext, GenerarMD5Password generarMD5Password)
        {
            _dbContext = dbContext;
            _generarMD5Password = generarMD5Password;
        }

        public async Task<Respuesta<bool>> CambiarPassword(UsuarioCambiarPasswordDTO usuario)
        {
            try
            {
                var respuesta = new Respuesta<bool>();
                using (var transaction = await _dbContext.Database.BeginTransactionAsync())
                {
                    var usuarioDB = await _dbContext.Seguridad_Usuario.FirstOrDefaultAsync(x => x.Id == usuario.Id);
                    if (usuarioDB is null)
                    {
                        respuesta.Exito = false;
                        respuesta.Mensaje = "No se ha encontrado el usuario";
                        return respuesta;
                    }

                    string code = Guid.NewGuid().ToString().Replace("-", "").Substring(0, 13);

                    usuarioDB.Codigo = code;
                    usuarioDB.Password = _generarMD5Password.GenerarMD5(usuario.Password + code);

                    _dbContext.Seguridad_Usuario.Update(usuarioDB);

                    await _dbContext.SaveChangesAsync();
                    await transaction.CommitAsync();

                    respuesta.Mensaje = "Se ha creado la póliza correctamente";
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
                    Mensaje = "Ha ocurrido en el crear/editar la póliza"
                };
            }
        }
    }
}
