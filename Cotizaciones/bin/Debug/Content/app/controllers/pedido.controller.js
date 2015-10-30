angular.module("main").controller("PedidoController",function (Utils, APP) {

    var self = this;
	this.pedido = {};

	this.guardar = function () {
        	    
	    Utils.Validation.init();
	    Utils.Validation.required("#txt-nombres", "Nombres y Apellidos");
	    Utils.Validation.required("#txt-telefono", "Teléfono");
	    Utils.Validation.required("#txt-email", "Correo Electrónico");
	    Utils.Validation.email("#txt-email", "Correo Electrónico");
	    Utils.Validation.required("#txt-detalle", "Detalle de Pedido");

	    if (Utils.Validation.run()){
	        console.log("Guardar", this.pedido);
	        Utils.Rest.save(APP.URL_API + "pedido", this.pedido).success(function () {

	            var email = {};
	            email.a = "jperez@apci.gob.pe";
	            email.asunto = "Consulta de Pedido (Cotización)";
	            email.contenido = "Nombres y Apellidos: " + self.pedido.nombre + "<br />" +
                                  "Empresa: " + self.pedido.empresa + "<br />" +
                                  "Email: " + self.pedido.email + "<br />" +
                                  "Teléfono: " + self.pedido.telefono + "<br />" +
                                  "Detalle: " + self.pedido.detalle + "<br />";
	            //email.contenido = self.pedido.detalle;
	            Utils.Rest.save(APP.URL_API + "email", email);

	            self.pedido = {};
	            Utils.Notification.info("Se envió correctamente su pedido.")
	        });
	    }

	}

});