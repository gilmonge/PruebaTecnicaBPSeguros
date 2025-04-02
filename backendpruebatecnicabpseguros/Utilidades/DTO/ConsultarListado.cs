using System.ComponentModel.DataAnnotations;

namespace Utilidades.DTO
{
    public class ConsultarListado<T>
    {
        [Required(ErrorMessage = "La página actual es obligatoria")]
        public int? PaginaActual { get; set; }

        [Required(ErrorMessage = "La cantidad de datos es obligatoria")]
        public int? CantidadDatos { get; set; }

        [Required(ErrorMessage = "El filtro es obligatorio")]
        public T? Filtro { get; set; }
    }
}
