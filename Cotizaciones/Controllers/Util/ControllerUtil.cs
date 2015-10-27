using Nancy;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Cotizaciones.Controllers.Util
{
    public class ControllerUtil
    {
        public static dynamic toJSON<T>(ICollection<T> pList)
        {
            if (pList.Count() > 0)
            {
                var response = (Response)JsonConvert.SerializeObject(pList);

                response.ContentType = "application/json";

                return response;
            }

            return null;
        }
    }
}
