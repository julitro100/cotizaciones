angular.module("main").filter("dateigv",function($filter){
	
	return function(input,date) {
				
		input = moment( $filter('date')(input, "dd/MM/yyyy") ,'DD/MM/YYYY');
		date = moment( $filter('date')(date, "dd/MM/yyyy") ,'DD/MM/YYYY');
		
		if ( input.isAfter(date.toDate()) )
			return input.toDate();
		
		return date.toDate();
	}
});