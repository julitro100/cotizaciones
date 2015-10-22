var app = angular.module('main',['ngRoute'])

.constant("APP", 
		{
		    "URL"		: "/aplicativocotizaciones/",
		    "URL_API"	: "/aplicativocotizaciones/api/v1/",
		    "URL_LOGIN"	: "/aplicativocotizaciones/login"
		}
)
.constant("DATE", 
		{
		    "FORMAT"		: "dd/MM/yyyy",
		    "FORMAT_MOMENT"	: "DD/MM/YYYY",    
		}
)
