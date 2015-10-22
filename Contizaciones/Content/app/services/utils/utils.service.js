angular.module("main").service("Utils", function($filter,TabService, NotificationService , ValidationService,MaskService, $http,APP){

	var self = this;

	this.Mask = MaskService;
	
	this.Validation = ValidationService;

	this.Notification = NotificationService;



	this.List =		{
						'delete' : 			function(item,list)  { 
												var index = list.indexOf(item);
												list.splice(index,1);
											},

						deleteAllWhere: 	function(value,fieldName,list) {
												for (var i = list.length - 1; i >= 0; i--) 
													if (list[i][fieldName] == value)
														list.splice(i,1);
											},
						set: 				function(column,list,value) {
												for ( var i = 0 ; i< list.length;i++) {
													list[i][column] = value;
												}
											}
	};

	this.UI = 		{
						Tab: TabService,

						Select :  	{
										getSelectedText : 	function(controlId) {
																var valor = $("#" + controlId + " option:selected").text();
																if (valor) return S($("#" + controlId + " option:selected").text()).trim().s;
																return "";
															},
										getSelectedAttr :   function(controlId, attributo) {
																var valor = $("#" + controlId + " option:selected").attr(attributo);
																if (valor) return S(valor).trim().s;
																return "";
															},
										clearBlank		: 	function(controlId){
																var control = $("#" + controlId);
																control.children("option[value='? string:1 ?']").remove();
																control.children("option[value='']").remove();
																control.change();
															}


									},
						Control	:   {
										getAttr :   function(controlId, attributo) {
																var valor = $("#" + controlId).attr(attributo);
																if (valor) return S(valor).trim().s;
																return "";
															},
										setAttr :   function(controlId, attributo , valor) {
																$("#" + controlId).attr(attributo,valor);
															},
										disableChilds 	:	function(controlId){
																$('#'+ controlId).find('input, textarea, button, select').attr('disabled','disabled');
															},
										enableChilds 	:	function(controlId){
																$('#'+ controlId).find('input, textarea, button, select').removeAttr('disabled');
															}
									}
	};

	this.Date = 	{
						difference : 	function(date1,date2) {

											if ( date2 != undefined && date2 != "" && date1 != undefined && date2 != "" ) {
												date1 = moment( $filter('date')(date1, "dd/MM/yyyy") ,'DD/MM/YYYY');
												date2 = moment( $filter('date')(date2, "dd/MM/yyyy") ,'DD/MM/YYYY');
												return  moment.preciseDiff( date1 , date2 );
											}
											return "";
										},
						toDate: 		function(stringDate) {
											return moment($filter('date')(stringDate, "dd/MM/yyyy"),'DD/MM/YYYY').toDate();
										}
	};

	this.Rest = 	{	
						getList  :  function(self, resource, listName) {

										return $http.get(resource).success(function(data){
											self[listName] = data;
										}); 
									},
						getGroupList : 	function(groupData,prefix){
											for (var i = groupData.length - 1; i >= 0; i--) {
												var tipoGeneralId = groupData[i].tipoGeneralId;
												$http.get("/replop/api/v1/tipogeneral/" + groupData[i].tipoGeneralId + "/tipo" ).success( (function(tipoGeneralId){

													return function(optionData) {
														for (var i = optionData.length - 1; i >= 0; i--) {
															$("#"+ prefix + tipoGeneralId ).append("<option value="+ optionData[i].tipoGeneralId +">" + optionData[i].descripcion + "</option>")
														};
													}
												})(tipoGeneralId) );
											};
										},
						save	: 	function(resource,dataPost) {

										return $http.post(resource, JSON.stringify(dataPost)).success(function(data){
											console.log("saved ", data);
										});

									},
						update :    function(resource,dataPut){
										
										return $http.put(resource, JSON.stringify(dataPut)).success(function(data){
											console.log("updated ", data);
										});
									},

						remove:    function(resource,dataDelete){
										
										return $http.delete(APP.URL_API + resource, JSON.stringify(dataDelete)).success(function(data){
											console.log("deleted ", data);
										});
									}


	};

	this.File =	{
					uploadById : function (fileControlName,url,paramName)
					{
						paramName = paramName || "uploadFile";
						url = url || '/fileservice/api/v1/file/upload';
						var fileControl = document.getElementById(fileControlName);
						var result = null;
						var file = fileControl.files[0];
						if(file)
						{
							var formData = new FormData();
							formData.append(paramName, file);
							result = $.ajax({
								url : url,
								type : 'POST',
								data : formData,
								cache : false,
								contentType : false,
								processData : false,
								success : function(data, textStatus, jqXHR) {
									var message = jqXHR.responseText;
									console.log("File uploaded");
								},
								error : function(jqXHR, textStatus, errorThrown) {
									console.log("Error uploading the file");
								}
							});
						}
						return result;
					},

					upload : function (fileControl,url,paramName)
					{
						paramName = paramName || "uploadFile";
						url = url || '/fileservice/api/v1/file/upload';
						var result = null;
						var file = fileControl.files[0];
						if(file)
						{
							var formData = new FormData();
							formData.append(paramName, file);
							result = $.ajax({
								url : url,
								type : 'POST',
								data : formData,
								cache : false,
								contentType : false,
								processData : false,
								success : function(data, textStatus, jqXHR) {
									var message = jqXHR.responseText;
									console.log("File uploaded");
								},
								error : function(jqXHR, textStatus, errorThrown) {
									console.log("Error uploading the file");
								}
							});
						}
						return result;
					}
	};


	this.Auth = 	{ 	
						check: 	function() 
								{
									self.Rest.getList(this, APP.URL_API + "usuario").error( 
										function() {
											window.location = APP.URL_LOGIN; 
										}
									);
								}
	};
	
});