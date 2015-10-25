using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Cotizaciones.Models
{
    public class CotizacionDetalle
    {
        public int CotizacionDetalleId { get; set; }
        public int CotizacionId { get; set; }
        public int ProductoId { get; set; }
        public int Cantidad { get; set; }
        public decimal Precio { get; set; }
    }
}
