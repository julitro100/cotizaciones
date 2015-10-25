angular.module("main").controller('MenuController', function(APP,Utils){

	
	this.items = [  
		{nombre:"Cotización",			icono:"fa fa-pencil-square-o", 				url:"#/" },
		//{nombre:"Salir", 			icono:"fa fa-sign-out", 			url:APP.URL + "logout" },
	];

 	$("#menu-toggle").click(function(e) {  e.preventDefault();$("#wrapper").toggleClass("toggled"); });
 
});