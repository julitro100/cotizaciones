angular.module("main").controller("RegistroController", function (Utils,APP) {

    var self = this;
    this.pedido = {};

    this.detalle = [];
    this.producto = {};

    this.tipos = [];

    Utils.Rest.getList(this, APP.URL_API + "tipo", "tipos");

    this.pedidos = [];

    Utils.Rest.getList(this, APP.URL_API + "pedido", "pedidos").success(function (data) {
        console.log("Pedidos", data);
    });

    this.productos = [];

    Utils.Rest.getList(this, APP.URL_API + "producto", "productos").success(function (data) {
        console.log("Productos", data);
    });


    this.responder = function (pPedido) {

        this.pedido = pPedido;
        console.log("Responder", pPedido);
        $(".modal-responder").modal("show");
    }

    this.agregar = function () {

        console.log("agregar");
        this.producto.subtotal = this.producto.precio * this.producto.cantidad;
        this.detalle.push(this.producto);
        this.producto = {};
        this.producto.cantidad = 1;
    }

    this.productoSelected = function () {
        this.producto.precio = Utils.UI.Select.getSelectedAttr("sel-producto","data-precio");
        console.log("Producto change", this.producto.precio);
    }

    this.registrar = function () {

        Utils.Validation.init();
        Utils.Validation.required("#sel-producto", "Producto ó Servicio");
        Utils.Validation.required("#txt-cantidad", "Cantidad");
        Utils.Validation.required("#txt-precio", "Precio");
        //Utils.Validation.required("#cotizacion", "Tabla de Cotización");

        if (Utils.Validation.run()) {
            Utils.Rest.save(APP.URL_API + "cotizacion/" + this.pedido.PedidoId).success(function (data) {
            console.log("Cotizacion", data);

            for (var i = 0; i < self.detalle.length; i++) {
                self.detalle[i].cotizacionId = data.cotizacionId;
                Utils.Rest.save(APP.URL_API + "cotizaciondetalle", self.detalle[i]);
            }

            var email = {};
            email.a = self.pedido.Email;
            email.asunto = "Respuesta a Cotización"
            email.contenido = $("#cotizacion").html();
            Utils.Rest.save(APP.URL_API + "email", email);

            $(".modal-responder").modal("hide");
            Utils.Rest.update(APP.URL_API + "pedido/" + self.pedido.PedidoId);
            Utils.Notification.info("Pedido atendido con exito");

            });
        }
    }

});