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

                //PRODUCTO - Servicio
                ctx.Producto.Add(new Producto()
                {
                    Descripcion = "Instalaciones",
                    Precio = 1700,
                    TipoId = 2,
                    Stock = 0
                });
                ctx.SaveChanges();

                ctx.Producto.Add(new Producto()
                {
                    Descripcion = "Mantenimiento y Reparaciones",
                    Precio = 1550,
                    TipoId = 2,
                    Stock = 0
                });
                ctx.SaveChanges();
                ctx.Producto.Add(new Producto()
                {
                    Descripcion = "Venta de Respuestos",
                    Precio = 1300,
                    TipoId = 2,
                    Stock = 0
                });
                ctx.SaveChanges();

                ctx.Producto.Add(new Producto()
                {
                    Descripcion = "Drywall",
                    Precio = 1500,
                    TipoId = 2,
                    Stock = 0
                });
                ctx.SaveChanges();

                //PRODUCTO - Producto
                ctx.Producto.Add(new Producto()
                {
                    Descripcion = "VENTANA - YORK",
                    Precio =  771.62m,
                    TipoId = 1,
                    Stock = 5
                });
                ctx.SaveChanges();
                ctx.Producto.Add(new Producto()
                {
                    Descripcion = "SPLIT PARED FRIO SOLO - YORK",
                    Precio =  956.14m,
                    TipoId = 1,
                    Stock = 2
                });
                ctx.SaveChanges();
                ctx.Producto.Add(new Producto()
                {
                    Descripcion = "SPLIT PARED FRIO CALOR - YORK",
                    Precio =  580.76m,
                    TipoId = 1,
                    Stock = 2
                });
                ctx.SaveChanges();
                ctx.Producto.Add(new Producto()
                {
                    Descripcion = "SPLIT PARED FRIO SOLO ECOLÓGICO - YORK",
                    Precio =  1174.57m,
                    TipoId = 1,
                    Stock = 2
                });
                ctx.SaveChanges();
                ctx.Producto.Add(new Producto()
                {
                    Descripcion = "SPLIT PISO TECHO - YORK",
                    Precio =  2069.58m,
                    TipoId = 1,
                    Stock = 2
                });
                ctx.SaveChanges();
                ctx.Producto.Add(new Producto()
                {
                    Descripcion = "SPLIT DECORATIVO CASSETTE - YORK",
                    Precio =  1988.69m,
                    TipoId = 1,
                    Stock = 2
                });
                ctx.SaveChanges();
                ctx.Producto.Add(new Producto()
                {
                    Descripcion = "SPLIT DUCTO - YORK",
                    Precio =  2219.05m,
                    TipoId = 1,
                    Stock = 2
                });
                ctx.SaveChanges();


                ctx.Producto.Add(new Producto()
                {
                    Descripcion = "VENTANA - LG",
                    Precio =  525.12m,
                    TipoId = 1,
                    Stock = 2
                });
                ctx.SaveChanges();
                ctx.Producto.Add(new Producto()
                {
                    Descripcion = "SPLIT PARED - LG",
                    Precio =  714.11m,
                    TipoId = 1,
                    Stock = 2
                });
                ctx.SaveChanges();
                ctx.Producto.Add(new Producto()
                {
                    Descripcion = "SPLIT PARED MODELO NUEVO - LG",
                    Precio =  876.10m,
                    TipoId = 1,
                    Stock = 2
                });
                ctx.SaveChanges();
                ctx.Producto.Add(new Producto()
                {
                    Descripcion = "SPLIT PARED - LG",
                    Precio =  815.35m,
                    TipoId = 1,
                    Stock = 2
                });
                ctx.Producto.Add(new Producto()
                {
                    Descripcion = "ART COOL - LG",
                    Precio =  1096.14m,
                    TipoId = 1,
                    Stock = 2
                });
                ctx.SaveChanges();
                ctx.Producto.Add(new Producto()
                {
                    Descripcion = "SPLIT PISO TECHO - LG",
                    Precio =  1636.10m,
                    TipoId = 1,
                    Stock = 2
                });
                ctx.SaveChanges();
                ctx.SaveChanges();
                ctx.Producto.Add(new Producto()
                {
                    Descripcion = "SPLIT DUCTO - LG",
                    Precio =  2176.07m,
                    TipoId = 1,
                    Stock = 2
                });
                ctx.SaveChanges();
                ctx.SaveChanges();
                ctx.Producto.Add(new Producto()
                {
                    Descripcion = "CASSETTE *INCLUYE BOMBA DE CONDENSADO* - LG",
                    Precio =  2278.66m,
                    TipoId = 1,
                    Stock = 2
                });
                ctx.SaveChanges();
                ctx.SaveChanges();
              
                return "Database Seeded";
            }
        }
    }
}
