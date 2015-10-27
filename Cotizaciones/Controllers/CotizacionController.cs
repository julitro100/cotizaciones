using Cotizaciones.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Nancy;
using Nancy.ModelBinding;

namespace Cotizaciones.Controllers
{
    public class CotizacionController : Nancy.NancyModule
    {
        public CotizacionController() : base("/api/cotizacion")
        {
            Post["/"] = add;
        }

        public dynamic add(dynamic args)
        {
            try
            {
                var cotizacion = this.Bind<Cotizacion>();

                using (var ctx = new Context())
                {

                    cotizacion = ctx.Cotizacion.Add(cotizacion);
                }

                return Negotiate.WithStatusCode(HttpStatusCode.OK).WithModel(cotizacion);
            }
            catch (Exception) { }
            return new Response { StatusCode = HttpStatusCode.InternalServerError };
        }
    }
}
