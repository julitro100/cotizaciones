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
                // Tipos Producto
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

                //Productos
                ctx.Producto.Add(new Producto()
                {
                    Descripcion = "Producto 1",
                    Precio = 10,
                    TipoId = 1,
                    Stock = 10
                });
                ctx.SaveChanges();

                ctx.Producto.Add(new Producto()
                {
                    Descripcion = "Producto 2",
                    Precio = 11,
                    TipoId = 1,
                    Stock = 10
                });
                ctx.SaveChanges();

                ctx.Producto.Add(new Producto()
                {
                    Descripcion = "Servicio 1",
                    Precio = 12,
                    TipoId = 2,
                    Stock = 0
                });
                ctx.SaveChanges();

                ctx.Producto.Add(new Producto()
                {
                    Descripcion = "Servicio 1",
                    Precio = 10,
                    TipoId = 2,
                    Stock = 0
                });
                ctx.SaveChanges();
               
                return "Database Seeded";
            }
        }
    }
}
