using Cotizaciones.Controllers.Util;
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
    public class EmailController : Nancy.NancyModule
    {
        public EmailController() : base("/api/email")
        {
            Post["/"] = email;
        }

        private dynamic email(dynamic args)
        {
            Email email = this.Bind<Email>();
            EmailUtil mailService = new EmailUtil();
            mailService.send(email);
            return Negotiate.WithModel(email).WithStatusCode(HttpStatusCode.OK);
        }
    }
}
