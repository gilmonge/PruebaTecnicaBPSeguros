using System.ComponentModel.DataAnnotations;

namespace Seguridad.DTO.Usuario
{
    public class UsuarioCambiarPasswordDTO
    {
        public string? Id { get; set; }

        [Required(ErrorMessage = "La contraseña es obligatoria")]
        public string? Password { get; set; }
    }
}
