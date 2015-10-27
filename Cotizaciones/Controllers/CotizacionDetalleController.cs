using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Nancy;
using Nancy.ModelBinding;
using Cotizaciones.Models;

namespace Cotizaciones.Controllers
{
    public class CotizacionDetalleController : Nancy.NancyModule
    {
        public CotizacionDetalleController() : base("/api/cotizaciondetalle")
        {
            Post["/"] = add;
        }

        public dynamic add(dynamic args)
        {
            try
            {
                var detalle = this.Bind<CotizacionDetalle>();

                using (var ctx = new Context())
                {

                    detalle = ctx.CotizacionDetalle.Add(detalle);
                }

                return Negotiate.WithStatusCode(HttpStatusCode.OK).WithModel(detalle);
            }
            catch (Exception) { }
            return new Response { StatusCode = HttpStatusCode.InternalServerError };
        }
    }
}
