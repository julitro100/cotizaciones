angular.module("main").controller("PedidoController",function (Utils, APP) {

	this.pedido = {};

	this.guardar = function () {

		console.log("Guardar", this.pedido);
		Utils.Rest.save(APP.URL_API + "pedido", this.pedido);
	}

});