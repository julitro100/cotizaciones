using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Cotizaciones.Models
{
    public class Producto
    {
        public int ProductoId { get; set; }
        public int TipoId { get; set; }
        public string Descripcion { set; get; }
        public decimal Precio { get; set; }
        public int Stock { get; set; }
    }
}
