using EN.Models;

namespace Poliza.Servicios.Poliza
{
    public class PolizaEditarAgregar
    {
        private readonly dbContext _dbContext;

        public PolizaEditarAgregar(dbContext dbContext)
        {
            _dbContext = dbContext;
        }
    }
}
