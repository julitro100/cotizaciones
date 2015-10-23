angular.module('main').service("NotificationService",function(){

	var tema = "default"; // default dark-theme
	var posicion =  { x:"right", y:"bottom" }; //right | left | center //top | bottom | center
	var duracion = 5000;
	var botonCerrar = false;

	return {
				info: function(mensaje, titulo) { 
					titulo = titulo || "Información";
					notify({
						type: "success", //alert | success | error | warning | info
						title: titulo,
						theme: tema,
						position: 	posicion,
						icon: '<i class="fa fa-check fa-2x"></i>',
						autoHide: true,
						delay: duracion,
						closeBtn: botonCerrar,
						message: mensaje
					});
				},


				mensaje: function(mensaje, titulo) { 
					titulo = titulo || "Información";
					notify({
						type: "info", //alert | success | error | warning | info
						title: titulo,
						theme: tema,
						position: 	posicion,
						icon: '<i class="fa fa-info-circle fa-2x"></i>',
						autoHide: true,
						delay: duracion,
						closeBtn: botonCerrar,
						message: mensaje
					});

				},

				alerta: function(mensaje, titulo) { 
					titulo = titulo || "Alerta";
					notify({
						type: "warning", //alert | success | error | warning | info
						title: titulo,
						theme: tema,
						position: 	posicion,
						icon: '<i class="fa fa-exclamation-triangle fa-2x"></i>',
						autoHide: true,
						delay: duracion,
						closeBtn: botonCerrar,
						message: mensaje
					});

				},

				error: function(mensaje, titulo) {
					titulo = titulo || "Error";
					notify({
						type: "error", //alert | success | error | warning | info
						title: titulo,
						theme: tema,
						position: 	posicion,
						icon: '<i class="fa fa-exclamation-triangle fa-2x"></i>',
						autoHide: true,
						delay: 8000,
						closeBtn: true,
						message: mensaje
					});
				}
			};
});