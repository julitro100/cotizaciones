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
            Post["/{PedidoId}"] = add;
        }

        public dynamic add(dynamic args)
        {
            try
            {
                Cotizacion cotizacion=null;
                using (var ctx = new Context())
                {

                    cotizacion = ctx.Cotizacion.Add(new Cotizacion()
                    {
                        PedidoId = args.PedidoId,
                        Fecha = DateTime.Now
                    });

                    ctx.SaveChanges();
                }

                return Negotiate.WithStatusCode(HttpStatusCode.OK).WithModel(cotizacion);
            }
            catch (Exception e) { }
            return new Response { StatusCode = HttpStatusCode.InternalServerError };
        }
    }
}
