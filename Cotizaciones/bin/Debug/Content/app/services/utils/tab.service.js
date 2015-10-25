angular.module("main").service("TabService",function(){

	this.selected 	= 1;
	
	this.next 		= function()	{ 
		this.selected++;				
	};
	
	this.previous 	= function()	{ 
		this.selected--;				
	};
	
	this.setTab 	= function(tab)	{ 
		this.selected = tab;			
	};
	
	this.isActive 	= function(tab) { 
		return tab === this.selected;	
	};
});