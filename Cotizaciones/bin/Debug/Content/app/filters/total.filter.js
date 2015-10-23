angular.module("main").filter("total",function(){
	
	return function(input, sumColumn, column , value )	{
		
		var sum = 0.00;
		for (var i = input.length - 1; i >= 0; i--) {
			if (input[i][column] == value)
			{
				sum += parseFloat(input[i][sumColumn]);
			}
		};

		return sum;
	}
	
});