using Cotizaciones.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Cotizaciones.Controllers
{
    public class DatabaseController : Nancy.NancyModule
    {
        public DatabaseController()
            : base("/api/database")
        {
            Get["/init"] = Initialize;
            Get["/create"] = Create;
            Get["/seed"] = Seed;
        }

        private dynamic Initialize(dynamic arg)
        {
            using (var ctx = new Context())
            {
                ctx.Database.Initialize(false);

                return "Database Initialized";
            }
        }

        private dynamic Create(dynamic arg)
        {
            using (var ctx = new Context())
            {
                ctx.Database.Delete();

                ctx.Database.Create();

                return "Database Created";
            }
        }

        private dynamic Seed(dynamic args)
        {
            using (var ctx = new Context())
            {
                // Tipo
                ctx.Tipo.Add(new Tipo()
                {
                    Descripcion = "Producto"
                });
                ctx.SaveChanges();

                ctx.Tipo.Add(new Tipo()
                {
                    Descripcion = "Servicio"
                });
                ctx.SaveChanges();

               
                return "Database Seeded";
            }
        }
    }
}
