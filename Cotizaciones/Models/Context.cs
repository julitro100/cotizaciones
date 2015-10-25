using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.Entity;
using System.Data.Entity.ModelConfiguration.Conventions;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Cotizaciones.Models
{
    public class Context : DbContext
    {
        public DbSet<Pedido> Pedido { get; set; }
        public DbSet<Cotizacion> Contizacion { get; set; }
        public DbSet<CotizacionDetalle> ContizacionDetalle { get; set; }
        public DbSet<Producto> Producto { get; set; }
        public DbSet<Tipo> Tipo { get; set; }

        public Context() : base(ConfigurationManager.ConnectionStrings["entityDb"].ConnectionString) {}

         protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Conventions.Remove<PluralizingTableNameConvention>();
        }
    }
}
