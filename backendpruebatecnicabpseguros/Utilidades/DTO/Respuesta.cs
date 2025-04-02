namespace Utilidades.DTO
{
    public class Respuesta<T>
    {
        public bool Exito { get; set; }
        public string? Mensaje { get; set; }
        public T? Dato { get; set; }
        public int totalDatos { get; set; }
        public int totalPaginas { get; set; }
        public int paginaActual { get; set; }
    }
}
