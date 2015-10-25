using Cotizaciones.Controllers.Util;
using Cotizaciones.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Cotizaciones.Controllers
{
    public class TipoController : Nancy.NancyModule
    {
        public TipoController() : base("/api/tipo")
        {
            Get["/"] = index;
        }

        private dynamic index(dynamic args)
        {
            using (var ctx = new Context())
            {
                List<Tipo> tipos = ctx.Tipo.ToList<Tipo>();
                return ControllerUtil.getList(tipos);
            }
        }
    }
}
