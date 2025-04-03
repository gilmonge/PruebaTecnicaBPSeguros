using EN.Models;
using Microsoft.EntityFrameworkCore;
using Seguridad.DTO.Usuario;
using Utilidades.DTO;
using Utilidades.Servicios;

namespace Seguridad.Servicios.Usuario
{
    public class UsuarioAgregar
    {
        private readonly dbContext _dbContext;
        private readonly GenerarMD5Password _generarMD5Password;

        public UsuarioAgregar(dbContext dbContext, GenerarMD5Password generarMD5Password)
        {
            _dbContext = dbContext;
            _generarMD5Password = generarMD5Password;
        }

        public async Task<Respuesta<string>> Agregar(UsuarioAgregarDTO usuario)
        {
            try
            {
                var respuesta = new Respuesta<string>();
                using (var transaction = await _dbContext.Database.BeginTransactionAsync())
                {
                    var usuarioDB = await _dbContext.Seguridad_Usuario.FirstOrDefaultAsync(x => x.Usuario == usuario.Usuario);
                    if (usuarioDB is not null)
                    {
                        respuesta.Exito = false;
                        respuesta.Mensaje = "El usuario ya se encuentra registrado";
                        return respuesta;
                    }

                    string code = Guid.NewGuid().ToString().Replace("-", "").Substring(0, 13);

                    var nuevoUsuario = new Seguridad_Usuario()
                    {
                        Id = Guid.NewGuid().ToString(),
                        Usuario = usuario.Usuario!,
                        Password = _generarMD5Password.GenerarMD5(usuario.Password + code),
                        Codigo = code,
                        EstaEliminado = false
                    };

                    await _dbContext.Seguridad_Usuario.AddAsync(nuevoUsuario);

                    await _dbContext.SaveChangesAsync();
                    await transaction.CommitAsync();

                    respuesta.Dato = nuevoUsuario.Id;
                    respuesta.Mensaje = "Se ha creado el usuario correctamente";
                }

                respuesta.Exito = true;
                return respuesta;
            }
            catch
            {
                return new Respuesta<string>
                {
                    Exito = false,
                    Mensaje = "Ha ocurrido en el crear el usuario"
                };
            }
        }
    }
}
