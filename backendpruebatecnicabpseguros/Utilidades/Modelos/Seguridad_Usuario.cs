using System;
using System.Collections.Generic;

namespace EN.Models;

public partial class Seguridad_Usuario
{
    public string Id { get; set; } = null!;

    public string Usuario { get; set; } = null!;

    public string Password { get; set; } = null!;

    public string Codigo { get; set; } = null!;

    public bool EstaEliminado { get; set; }
}
