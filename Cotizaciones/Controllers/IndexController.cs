using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Cotizaciones.Controllers
{
    public class IndexController : Nancy.NancyModule
    {
        public IndexController()
        {
            Get["/"] = index;
        }

        private dynamic index(dynamic args)
        {
            return View["index"];
        }
    }
}
