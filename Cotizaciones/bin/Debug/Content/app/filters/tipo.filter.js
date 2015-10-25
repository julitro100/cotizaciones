angular.module("main").filter("tipo",function(){
	
	return function(input, listaTipo, keyColumn , valueColumn){
		
		for (var i = listaTipo.length - 1; i >= 0; i--) {
			if (listaTipo[i][keyColumn] == input) {
				return listaTipo[i][valueColumn];
			}
		};

		return "No definido";
	}
	
});