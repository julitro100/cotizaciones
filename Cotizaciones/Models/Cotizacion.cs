using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Cotizaciones.Models
{
    public class Cotizacion
    {
        public int CotizacionId { get; set; }
        public int PedidoId { get; set; }
        public DateTime Fecha { get; set; }
    }
}
