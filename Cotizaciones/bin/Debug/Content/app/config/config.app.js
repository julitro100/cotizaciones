angular.module("main").config(['$routeProvider',function($routeProvider){

	$routeProvider.

		when('/', 				{ templateUrl: 'views/registrocotizacion.jsp' 	}).
		// when('/formacion',		{ templateUrl: 'views/formacion.jsp' }).
		// when('/capacitacion',	{ templateUrl: 'views/capacitacion.jsp' }).
		// when('/idioma',			{ templateUrl: 'views/idioma.jsp' }).
		// when('/experiencia',	{ templateUrl: 'views/experiencia.jsp' }).
		
		otherwise({	redirectTo: '/'	});

}]);