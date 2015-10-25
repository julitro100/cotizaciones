angular.module('main').service("ValidationService",[ "NotificationService", function(Messagebox){
	//$(".numero").inputmask("integer",{autoUnmask:true});
	//$(".ruc").inputmask("99999999999",{autoUnmask:true});
	//$(".dni").inputmask("99999999",{autoUnmask:true});
	//$(".fecha").inputmask("99/99/9999");
	//$(".cci").inputmask("99999999999999999999");
	//$(".cuenta").inputmask("integer",{autoUnmask:true,rightAlign: false});
	
	//$(".telefonofijo").inputmask("999-9999",{autoUnmask:true});

	var Validation = {
		
				init		: 	function ()
								{ 
									Validation.results.length = 0;
									for (index in Validation.controls) {
										$(Validation.controls[index]).parent().removeClass("has-error");
										$(Validation.controls[index]).parent().removeClass("panel-danger");
									}
									Validation.controls.length = 0;
								}
				,required	: 	function(control,fieldName,showMessage) 
								{
									var error = "El campo " + fieldName + " es obligatorio";
									value = $(control).val();
									var angularRex = /\? \w+:\w* \?/;
									var exp = (value !== '') && (value !== null) && (value !== undefined) && (value.toString().length > 0) && (!angularRex.test(value));
									Validation.evaluate(exp,error,control,undefined,fieldName,showMessage);
									return exp;
								}
				,requiredVar: 	function(value,fieldName,control) 
								{
									var error = "El campo " + fieldName + " es obligatorio";
									var exp = (value !== '') && (value !== null) && (value !== undefined) && (value.toString().length > 0);
									Validation.evaluate(exp,error,control,undefined,fieldName);
									return exp;
								}
				,isTrueVar		: 	function(value, fieldName, control,pClass)
									{
										var error = "El campo " + fieldName + " es obligatorio";
										var exp = (value === true);
										Validation.evaluate(exp,error,control,pClass,fieldName);
										return exp;
									}
				,validate		: 	function(value,pError,pFieldName)
									{
										if (!value) {
											Messagebox.alerta(pError,pFieldName);
										} 
									}
				,equalsVar		:	function(value1,value2, fieldName, pError,control) 
									{
										var error = pError;
										var exp = (value1 === value2);
										Validation.evaluate(exp,error,control,undefined,fieldName);
										return exp;
									}
				,len 		:  	function(control,fieldName,pLen) 
								{
									var error = "El campo " + fieldName + " debe ser de " + pLen + " caracteres";
									value = $(control).val();
									var exp = (value.toString().length == pLen) || (S(value).isEmpty());
									Validation.evaluate(exp,error,control,undefined,fieldName);
									return exp;
								}
				,minLen		:  	function(control,value,min,fieldName,pclass)
								{
									var exp = false;
									var error = "Ingrese al menos " + min + " " + fieldName;
									exp = ( value.length >= min );
									Validation.evaluate(exp,error,control,pclass,fieldName);
									return exp;
								}									
				,number		: 	function(control,fieldName, errorMessage) 
								{
									var exp = false;
									var error = errorMessage || "El campo " + fieldName + " solo puede contener numeros" ;
									value = $(control).val();
									if ((value === "") || (value === null) || (value === undefined))  exp = true;
									else  exp = $.isNumeric(value);
									Validation.evaluate(exp,error,control,undefined,fieldName);
									return exp
								}
				,email 		: 	function(control,fieldName)
								{
									var exp = false;
									var error = "El campo " + fieldName + " debe contener un Email valido";
									value = $(control).val();
									var regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$/;
			    					exp = (regex.test(value)) ? true : false;
									Validation.evaluate(exp,error,control,undefined,fieldName);
									return exp
								}
				,multiEmail : 	function(control, fieldName)
								{
									var exp = false;
									var error = "El campo " + fieldName + " debe ser Emails separados por coma";
									value = $(control).val();
									exp = Validation.validateMultipleEmailsCommaSeparated(value,',');
									Validation.evaluate(exp,error,control,undefined,fieldName);
									return exp	
								}
				,greaterthan: 	function(control,minvalue,fieldName)
								{
									value = $(control).val();
									return Validation.greaterthanvar(value,minvalue,control,fieldName);
								}
				,dateGreaterThan: 	function(control,minvalue,fieldName)
									{
										value = $(control).val();
										return Validation.dategreaterthanvar(value,minvalue,control,fieldName);
									}
				,greaterthanvar: 	function(value,minvalue,control,fieldName)
									{
										var exp = false;
										var error = "El campo " + fieldName + "<br /> Debe ser mayor a " + minvalue;
										
										if ( S(value).isEmpty() || S(minvalue).isEmpty() )  exp = true;
										else  
										{
											value = parseFloat( S(value).replaceAll("/","") );
											minvalue = parseFloat( S(minvalue).replaceAll("/","") );	
											exp = (value > minvalue)
										};

										Validation.evaluate(exp,error,control,undefined,fieldName);
										return exp;
									}
				,dategreaterthanvar: 	function(value,minvalue,control,fieldName)
										{
											var exp = false;
											var error = "El campo " + fieldName + "<br /> Debe ser mayor a " + minvalue;
											
											if ( S(value).isEmpty() || S(minvalue).isEmpty() )  exp = true;
											else  
											{
												exp = moment(minvalue,["DD/MM/YYYY","YYYY/MM/DD"]).isBefore(moment(value,["DD/MM/YYYY","YYYY/MM/DD"]));
											};

											Validation.evaluate(exp,error,control,undefined,fieldName);
											return exp;	
										}

				,lessthan 	: 	function(control,maxvalue,fieldName)
								{
									value = $(control).val();
									return Validation.lessthanvar(value,maxvalue,control,fieldName);
								}
				,dateLessThan: 	function(control,maxvalue,fieldName)
								{
									value = $(control).val();
									return Validation.datelessthanvar(value,maxvalue,control,fieldName);
								}			
				,lessthanvar: 	function(value,maxvalue,control,fieldName)
								{
									var exp = false;
									var error = "El campo " + fieldName + "<br /> Debe ser menor a " + maxvalue;
									
									if ( S(value).isEmpty() || S(maxvalue).isEmpty() )  exp = true;
									else  
									{				
										value = parseFloat(S(value).replaceAll("/",""));
										maxvalue = parseFloat(S(maxvalue).replaceAll("/",""));
										exp = (value < maxvalue);
									}

									Validation.evaluate(exp,error,control,undefined,fieldName);
									return exp;
								}
				,datelessthanvar: 	function(value,maxvalue,control,fieldName)
									{
										var exp = false;
										var error = "El campo " + fieldName + "<br /> Debe ser menor a " + maxvalue;
										
										if ( S(value).isEmpty() || S(maxvalue).isEmpty() )  exp = true;
										else  
										{				
											exp = moment(value,["DD/MM/YYYY","YYYY/MM/DD"]).isBefore(moment(maxvalue,["DD/MM/YYYY","YYYY/MM/DD"]));
										}

										Validation.evaluate(exp,error,control,undefined,fieldName);
										return exp;
									}
				
				,dateOnOrLessThanVar:	function(value, maxvalue, control, fieldName)
										{
											var exp = false;
											var error = "El campo " + fieldName + "<br /> Debe ser menor o igual a " + maxvalue;
											
											if ( S(value).isEmpty() || S(maxvalue).isEmpty() )  exp = true;
											else  
											{				
												exp = moment(value,["DD/MM/YYYY","YYYY/MM/DD"]).diff(moment(maxvalue,["DD/MM/YYYY","YYYY/MM/DD"])) <= 0;
											}
						
											Validation.evaluate(exp,error,control,undefined,fieldName);
											return exp;
										} 
				,dateOnOrGreaterThanVar: 	function(value, minvalue, control, fieldName)
											{
												var exp = false;
												var error = "El campo " + fieldName + "<br /> Debe ser mayor o igual a " + minvalue;
												
												if ( S(value).isEmpty() || S(minvalue).isEmpty() )  exp = true;
												else  
												{
													exp = moment(value,["DD/MM/YYYY","YYYY/MM/DD"]).diff(moment(minvalue,["DD/MM/YYYY","YYYY/MM/DD"])) >= 0;
												};
							
												Validation.evaluate(exp,error,control,undefined,fieldName);
												return exp;
					
											}
				,evaluate 	: 	function(exp,error,control,pclass,pFieldName,pShowMessage) 
								{
									if (pShowMessage === null || pShowMessage === undefined) pShowMessage = true

									pclass = pclass || "has-error";

									if (!$(control).is(":visible")) exp = true;
									
									if (!exp) {
										if(pShowMessage) Messagebox.alerta(error,pFieldName);
										$(control).parent().addClass(pclass);
										Validation.controls.push(control);
									}
									Validation.results.push(exp);
								}
				,setError 	: 	function(control,error) 
								{
									Validation.evaluate(false,error,control);
								}

				,results		: 	[]
				,controls		: 	[]

				,run 			: 	function()
									{
										var result = true;

										for(var i=0; i < Validation.results.length ;i++)
										{
											result = (result && Validation.results[i]);
										}
										return result;
									}

				,expresion 		: 	{   
										numericRegex 			: /^[0-9]+$/
										,integerRegex 			: /^\-?[0-9]+$/
										,decimalRegex 			: /^\-?[0-9]*\.?[0-9]+$/
										,emailRegex 			: /^[a-zA-Z0-9.!#$%&amp;'*+\-\/=?\^_`{|}~\-]+@[a-zA-Z0-9\-]+(?:\.[a-zA-Z0-9\-]+)*$/
										,alphaRegex 			: /^[a-z]+$/i
										,alphaNumericRegex 		: /^[a-z0-9]+$/i
										,alphaDashRegex 		: /^[a-z0-9_\-]+$/i
										,naturalRegex 			: /^[0-9]+$/i
										,naturalNoZeroRegex 	: /^[1-9][0-9]*$/i
										,ipRegex 				: /^((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){3}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})$/i
										,base64Regex 			: /[^a-zA-Z0-9\/\+=]/i
										,numericDashRegex 		: /^[\d\-\s]+$/
										,urlRegex 				: /^((http|https):\/\/(\w+:{0,1}\w*@)?(\S+)|)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/
									}
				,validateEmail 	: 	function (field) 
									{
			    						var regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$/;
			    						return (regex.test(field)) ? true : false;
									}

				,validateMultipleEmailsCommaSeparated : function (value, seperator) 
									{
									    if (value != '') {
									        var result = value.split(seperator);
									        for (var i = 0; i < result.length; i++) {
									            if (result[i] != '') {
									                if (!Validation.validateEmail(result[i])) {
									                    return false;
									                }
									            }
									        }
									    }
									    return true;
									}
	};

	return Validation;

}]);
