using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Contizaciones.Models
{
    public class Cliente
    {
        public int ClienteId { get; set; }
        public string Nombre { get; set; }
        public string Empresa { get; set; }
        public string Correo { get; set; }
        public string Detalle { get; set; }
        public string Telefono { get; set; }
    }
}
