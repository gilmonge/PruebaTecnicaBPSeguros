using System;
using System.Collections.Generic;

namespace EN.Models;

public partial class Cliente_Cliente
{
    public string CedulaAsegurado { get; set; } = null!;

    public string? Nombre { get; set; }

    public string? PrimerApellido { get; set; }

    public string? SegundoApellido { get; set; }

    public string? TipoPersona { get; set; }

    public DateTime? FechaNacimiento { get; set; }

    public bool? EstaEliminado { get; set; }
}
