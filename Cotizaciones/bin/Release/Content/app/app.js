var app = angular.module('main',['ngRoute'])

.constant("APP", 
		{
		    "URL"		: "/",
		    "URL_API"	: "/api/",
		    "URL_LOGIN"	: "/login"
		}
)
.constant("DATE", 
		{
		    "FORMAT"		: "dd/MM/yyyy",
		    "FORMAT_MOMENT"	: "DD/MM/YYYY",    
		}
)
