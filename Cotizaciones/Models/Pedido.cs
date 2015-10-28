using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Cotizaciones.Models
{
    public class Pedido
    {
        public int PedidoId { get; set; }
        public string Nombre { get; set; }
        public string Empresa { get; set; }
        public string Email { get; set; }
        public string Telefono { get; set; }
        public string Detalle { get; set; }
        public bool Atendido { get; set; }

    }
}
