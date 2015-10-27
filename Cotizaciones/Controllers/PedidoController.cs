﻿using Cotizaciones.Controllers.Util;
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
            Post["/"] = add;
        }

        private dynamic index(dynamic args)
        {
            using (var ctx = new Context())
            {
                List<Pedido> pedidos = ctx.Pedido.ToList<Pedido>();

                return ControllerUtil.getList(pedidos);
            } 
        }

        private dynamic add(dynamic arg)
        {
            try
            {
                var pedido = this.Bind<Pedido>();
                    
                using(var ctx = new Context()) {

                    pedido = ctx.Pedido.Add(pedido);
                    ctx.SaveChanges();
                }

                return Negotiate.WithStatusCode(HttpStatusCode.OK).WithModel(pedido);
            }
            catch (Exception) { }
            return new Response { StatusCode = HttpStatusCode.InternalServerError };
        }
    }
}
