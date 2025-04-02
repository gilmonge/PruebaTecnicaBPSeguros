using System.ComponentModel.DataAnnotations;

namespace Persona.DTO.Cliente
{
    public class ClienteEditarAgregarDTO
    {
        [Required(ErrorMessage = "La cédula del asegurado es obligatoria")]
        public string? CedulaAsegurado { get; set; }

        [Required(ErrorMessage = "El nombre del asegurado es obligatorio")]
        public string? Nombre { get; set; }

        [Required(ErrorMessage = "El primer apellido del asegurado es obligatorio")]
        public string? PrimerApellido { get; set; }

        public string? SegundoApellido { get; set; }

        [Required(ErrorMessage = "El tipo de persona del asegurado es obligatorio")]
        public string? TipoPersona { get; set; }

        [Required(ErrorMessage = "La fecha de nacimiento del asegurado es obligatorio")]
        public DateTime? FechaNacimiento { get; set; }
    }
}
