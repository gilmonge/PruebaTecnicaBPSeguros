﻿namespace Poliza.DTO
{
    public class PolizaDTO
    {
        public string? Id { get; set; }

        public string? NumeroPoliza { get; set; }

        public string? TipoPoliza { get; set; }

        public string? CedulaAsegurado { get; set; }

        public decimal? MontoAsegurado { get; set; }

        public DateTime? FechaVencimiento { get; set; }

        public DateTime? FechaEmision { get; set; }

        public string? Coberturas { get; set; }

        public string? EstadoPoliza { get; set; }

        public decimal? Prima { get; set; }

        public string? Periodo { get; set; }

        public DateTime? FechaInclusion { get; set; }

        public string? Aseguradora { get; set; }
    }
}
