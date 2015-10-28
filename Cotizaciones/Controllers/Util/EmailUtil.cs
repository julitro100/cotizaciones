using Cotizaciones.Models;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Text;
using System.Threading.Tasks;

namespace Cotizaciones.Controllers.Util
{
    public class EmailUtil
    {
        private SmtpClient smtp;
        private string userName;
        private string password;
        private string serviceName;

        public MailMessage Messsage { get; set; }
       
        public EmailUtil()
        {
            this.serviceName = ConfigurationManager.AppSettings.Get("SmtpServerServiceName");
            this.userName = ConfigurationManager.AppSettings.Get("SmtpServerUserName");
            this.password = ConfigurationManager.AppSettings.Get("SmtpServerPassword");

            smtp = new SmtpClient();
            smtp.Host = ConfigurationManager.AppSettings.Get("SmtpServerHost");
            smtp.Port = Convert.ToInt32(ConfigurationManager.AppSettings.Get("SmtpServerPort"));
            
            smtp.EnableSsl = true;
            smtp.DeliveryMethod = SmtpDeliveryMethod.Network;
            smtp.UseDefaultCredentials = false;
            smtp.Credentials = new NetworkCredential(userName, password);

            Messsage = new MailMessage();
        }

        public void send(string pTo, string pSubject,string pBody)
        {
            this.Messsage.From = new MailAddress(this.userName,this.serviceName);
            this.Messsage.To.Add(new MailAddress(pTo));
            this.Messsage.Subject = pSubject;
            this.Messsage.Body = pBody;
            this.Messsage.IsBodyHtml = true;
            this.Messsage.SubjectEncoding = System.Text.Encoding.UTF8;
            this.Messsage.BodyEncoding = System.Text.Encoding.UTF8;
            smtp.Send(Messsage);
        }

        public void send(Email pData)
        {
            send(pData.A, pData.Asunto, pData.Contenido);
        }   

    }
}
