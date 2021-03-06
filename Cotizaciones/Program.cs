﻿using Nancy.Hosting.Self;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Cotizaciones
{
    class Program
    {
        static void Main(string[] args)
        {
            NancyHost host;
            ushort port = Convert.ToUInt16(ConfigurationManager.AppSettings.Get("httpPort"));

            var uri = new Uri("http://localhost:" + port + "/");
            var config = new HostConfiguration();
            config.UrlReservations.CreateAutomatically = true;

            host = new NancyHost(config, uri);
            try
            {
                host.Start();
                Console.ReadKey();
            }
            catch (Exception e)
            {
                Console.WriteLine("Unhandled exception \n" + e.Message);
            }
        }
    }
}
