using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Cotizaciones.Controllers
{
    public class PedidoController : Nancy.NancyModule
    {
        public PedidoController() : base("/api/pedido")
        {
            Get["/"] = index;
        }

        private dynamic index(dynamic args)
        {
            return "Lista de Clientes";
        }

    }
}
