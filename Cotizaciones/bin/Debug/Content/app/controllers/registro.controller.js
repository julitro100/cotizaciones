angular.module("main").controller("RegistroController", function (Utils,APP) {

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


});