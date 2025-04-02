using EN.Models;

namespace Poliza.Servicios.Poliza
{
    public class PolizaObtenerLista
    {
        private readonly dbContext _dbContext;

        public PolizaObtenerLista(dbContext dbContext)
        {
            _dbContext = dbContext;
        }
    }
}
