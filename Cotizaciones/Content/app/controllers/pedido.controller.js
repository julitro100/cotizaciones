angular.module("main").controller("PedidoController",function (Utils, APP) {

    var self = this;
	this.pedido = {};

	this.guardar = function () {

		console.log("Guardar", this.pedido);
		Utils.Rest.save(APP.URL_API + "pedido", this.pedido).success(function () {

		    var email = {};
		    email.a = "clopez@apci.gob.pe";
		    email.asunto = "Confirmacion de Consulta";
		    email.contenido = self.pedido.detalle;
		    Utils.Rest.save(APP.URL_API + "email", email);
            
		    self.pedido = {};
            Utils.Notification.info("Se envio correctamente")
		});

	}

});