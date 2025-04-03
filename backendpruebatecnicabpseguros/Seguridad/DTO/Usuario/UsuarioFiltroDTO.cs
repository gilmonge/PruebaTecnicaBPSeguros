using System.ComponentModel.DataAnnotations;

namespace Seguridad.DTO.Usuario
{
    public class UsuarioFiltroDTO
    {
        [MaxLength(100, ErrorMessage = "El usuario no puede tener más de 100 caracteres")]
        [EmailAddress(ErrorMessage = "El usuario debe ser un correo electrónico válido")]
        public string? Usuario { get; set; }
    }
}
