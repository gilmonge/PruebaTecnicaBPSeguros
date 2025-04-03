using System.ComponentModel.DataAnnotations;

namespace Poliza.DTO
{
    public class PolizaEditarAgregarDTO
    {
        public string? Id { get; set; }

        [Required(ErrorMessage = "El número de póliza es obligatorio")]
        public string? NumeroPoliza { get; set; }

        [Required(ErrorMessage = "El tipo de póliza es obligatorio")]
        public string? TipoPoliza { get; set; }

        [Required(ErrorMessage = "La cédula del asegurado es obligatoria")]
        public string? CedulaAsegurado { get; set; }

        [Required(ErrorMessage = "El monto asegurado es obligatorio")]
        public decimal? MontoAsegurado { get; set; }

        [Required(ErrorMessage = "La fecha de vencimiento es obligatoria")]
        public DateTime? FechaVencimiento { get; set; }

        [Required(ErrorMessage = "La fecha de emisión es obligatoria")]
        public DateTime? FechaEmision { get; set; }

        [Required(ErrorMessage = "La cobertura es obligatoria")]
        public string? Coberturas { get; set; }

        [Required(ErrorMessage = "El estado de la póliza es obligatoria")]
        public string? EstadoPoliza { get; set; }

        [Required(ErrorMessage = "La prima es obligatoria")]
        public decimal? Prima { get; set; }

        [Required(ErrorMessage = "El periodo es obligatorio")]
        public string? Periodo { get; set; }

        [Required(ErrorMessage = "Le fecha de inclusión es obligatoria")]
        public DateTime? FechaInclusion { get; set; }

        [Required(ErrorMessage = "La aseguradora es obligatoria")]
        public string? Aseguradora { get; set; }
    }
}
