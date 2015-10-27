using Cotizaciones.Controllers.Util;
using Cotizaciones.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Cotizaciones.Controllers
{
    public class ProductoController : Nancy.NancyModule
    {
        public ProductoController() : base("/api/producto")
        {
            Get["/"] = index;
        }

        public dynamic index(dynamic args)
        {
            using (var ctx = new Context())
            {
                List<Producto> productos = ctx.Producto.ToList<Producto>();

                return ControllerUtil.toJSON(productos);
            } 
        }
    }
}
