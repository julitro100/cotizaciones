angular.module("main").filter("total",function(){
	
	return function(input, sumColumn )	{
		
		var sum = 0.00;
		for (var i = input.length - 1; i >= 0; i--) {
			
			sum += parseFloat(input[i][sumColumn]);
			
		};

		return sum;
	}
	
});