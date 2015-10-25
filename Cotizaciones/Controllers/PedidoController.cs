using Cotizaciones.Models;
using Nancy;
using Nancy.ModelBinding;
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

        private dynamic add(dynamic arg)
        {
            try
            {
               // if ((this.Context.CurrentUser != null) && !string.IsNullOrWhiteSpace(this.Context.CurrentUser.UserName))
               // {
                    //this.RequiresClaims(BLL.Security.Recurso.roles(this.Context.ResolvedRoute.Description.Path));

                    var pedido = this.Bind<Pedido>();
                    
                using(var ctx = new Context()) {

                    pedido = ctx.Pedido.Add(pedido);
                }

                    return Negotiate.WithStatusCode(HttpStatusCode.OK);
               // }
            }
            catch (Exception) { }
            return new Response { StatusCode = HttpStatusCode.InternalServerError };
        }
    }
}
