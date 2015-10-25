angular.module("main").config(['$routeProvider',function($routeProvider){

	$routeProvider.

		when('/',  			{ templateUrl: 'content/app/views/contacto.jsp' 	}).
		//when('/registro',  	{ templateUrl: 'app/views/registrocotizacion.jsp' 	}).
		otherwise({	redirectTo: '/'	});

}]);