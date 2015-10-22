using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Contizaciones.Controllers
{
    public class IndexModule : Nancy.NancyModule
    {
        public IndexModule()
        {
            Get["/"] = index;
        }

        private dynamic index(dynamic args)
        {
            return View["index"];
        }
    }
}
