namespace Persona.DTO.Cliente
{
    public class ClienteDTO
    {
        public string? CedulaAsegurado { get; set; }

        public string? Nombre { get; set; }

        public string? PrimerApellido { get; set; }

        public string? SegundoApellido { get; set; }

        public string? TipoPersona { get; set; }

        public DateTime? FechaNacimiento { get; set; }
    }
}
