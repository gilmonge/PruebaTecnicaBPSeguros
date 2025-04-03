using System.ComponentModel.DataAnnotations;

namespace Seguridad.DTO.Usuario
{
    public class UsuarioLoginDTO
    {
        [Required(ErrorMessage = "El usuario es obligatorio")]
        [MaxLength(100, ErrorMessage = "El usuario no puede tener más de 100 caracteres")]
        [EmailAddress(ErrorMessage = "El usuario debe ser un correo electrónico válido")]
        public string? Usuario { get; set; }

        [Required(ErrorMessage = "La contraseña es obligatoria")]
        [MaxLength(100, ErrorMessage = "La contraseña no puede tener más de 100 caracteres")]
        [RegularExpression("^[a-zA-Z0-9]*$", ErrorMessage = "La contraseña solo puede contener letras y números")]
        public string? Password { get; set; }
    }
}
