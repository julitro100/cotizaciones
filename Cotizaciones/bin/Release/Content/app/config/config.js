angular.module("main").config(['$routeProvider',function($routeProvider){

	$routeProvider.

		when('/',  			{ templateUrl: 'content/app/views/contacto.jsp' 	}).
		when('/registro', { templateUrl: 'content/app/views/registrocotizacion.jsp' }).

		otherwise({	redirectTo: '/'	});

}]);