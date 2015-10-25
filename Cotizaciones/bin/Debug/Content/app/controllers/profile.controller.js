angular.module("main").controller("ProfileController",function(APP,Utils){

	

	var self = this;
	
	this.persona={};
	this.tipodocumento = [];
	this.niveles = [];
	this.paises = [];
	
	Utils.Rest.getList(this,APP.URL_API + "pais","paises");
	Utils.Rest.getList(this,APP.URL_API + "tipo/documento","tipodocumento");
	Utils.Rest.getList(this,APP.URL_API + "tipo/nivel","niveles");

	this.departamentos = [];
	this.provincias= [];
	this.distritos = [];
	Utils.Rest.getList(this,APP.URL_API + "departamento","departamentos");
	
	Utils.Rest.getList(this,APP.URL_API + "persona/profile", "persona").success(function(data){

		console.log("persona", data , typeof(data.fechaNacimiento));
		self.persona.computacion = self.persona.computacion.toString();
		self.persona.paisNacimientoId = self.persona.paisNacimientoId.toString();
		self.persona.tipoDocumentoId = self.persona.tipoDocumentoId.toString();
		self.tipoDocumento();
		
		self.persona.distritoId = self.persona.distritoId.toString();
		self.persona.trabajoEnAPCI = self.persona.trabajoEnAPCI.toString();
		self.persona.nivelComputacionId = self.persona.nivelComputacionId.toString();
		self.persona.familiaresEnAPCI = self.persona.familiaresEnAPCI.toString();
		self.persona.directivoONGD_ENIEX = self.persona.directivoONGD_ENIEX.toString();
		self.persona.fueDirectivoONGD_ENIEX = self.persona.fueDirectivoONGD_ENIEX.toString();
		

		if (self.persona.foto) {
			loadImage(APP.URL_API + "file/download" + self.persona.foto);
			$("#txt-dp-foto").attr("data-filename", self.persona.foto);
		}
		if (self.persona.documento) { 
			$("#txt-dp-documento").attr("data-filename", self.persona.documento);
			$("#txt-dp-documento-dwn").show();
			$("#txt-dp-documento-dwn").attr("href", APP.URL_API + "file/download" + self.persona.documento );
		}

		if (self.persona.CV) {
			$("#txt-dp-curriculum").attr("data-filename" , self.persona.CV );
			$("#txt-dp-curriculum-dwn").show();
			$("#txt-dp-curriculum-dwn").attr("href", APP.URL_API + "file/download" + self.persona.CV );
		}

		Utils.Rest.getList(self, APP.URL_API + "distrito/" + self.persona.distritoId).success(function(pDistrito){
			Utils.Rest.getList(self, APP.URL_API + "provincia/" + pDistrito.distritoId).success(function(pProvincia){
				self.persona.departamentoId = pProvincia.departamentoId.toString();
				self.departamentoSelected();
				self.persona.provinciaId    = pProvincia.provinciaId.toString();
				self.provinciaSelected();
			});
		});
	});
	
	this.tipoDocumento = function(){
		if (this.persona.tipoDocumentoId == "1") 
			$("#txt-dp-numero-documento").inputmask("99999999",{autoUnmask:true});
		else
			$("#txt-dp-numero-documento").inputmask("&&&&&&&&&&&&",{autoUnmask:true});
	}

	
	this.departamentoSelected = function(){
		
		Utils.Rest.getList(this,APP.URL_API + "departamento/" + this.persona.departamentoId + "/provincia" ,"provincias");
	}
	
	this.provinciaSelected = function() {
		
		Utils.Rest.getList(this,APP.URL_API + "provincia/" + this.persona.provinciaId + "/distrito" ,"distritos");
	}

	function loadImage(url) 
	{
		try 
		{
			var ctx = document.getElementById('canvas').getContext('2d');
		    var img = new Image;
		    img.src = url;
		    img.onload = function() {
		        ctx.drawImage(img, 0,0 , 300 , 150);
		    }
		}
		catch(Error) {}
	}

	this.actualizar = function(){

		Utils.Validation.init();
		Utils.Validation.required("#txt-dp-nombres","Nombres");		
		Utils.Validation.required("#txt-dp-apellidos","Apellidos");
		
		Utils.Validation.required("#txt-dp-fecha-nacimiento","Fecha de Nacimiento");		
		Utils.Validation.required("#sel-dp-sexo","Sexo");	
		Utils.Validation.required("#sel-dp-tipo-documento","Tipo de Documento");		
		
		
		Utils.Validation.required("#txt-dp-numero-documento","Número de Documento");	

	    if (this.persona.tipoDocumentoId == "1") 
	    	Utils.Validation.len("#txt-dp-numero-documento","D.N.I.", 8);
		else
			Utils.Validation.len("#txt-dp-numero-documento","Pasaporte", 12); 

		Utils.Validation.required("#txt-dp-ruc","R.U.C."); 
		Utils.Validation.len("#txt-dp-ruc","R.U.C.", 11);
		
		Utils.Validation.required("#txt-dp-correo","Correo Electrónico");
		Utils.Validation.email("#txt-dp-correo","Correo Electrónico");
		
		Utils.Validation.required("#sel-dp-pais-nacimiento","País de Nacimiento");
		Utils.Validation.required("#txt-dp-direccion","Dirección de Residencia");
		
		Utils.Validation.required("#sel-dp-departamento","Departamento");
		Utils.Validation.required("#sel-dp-provincia","Provincia");
		Utils.Validation.required("#sel-dp-distrito","Distrito");

		Utils.Validation.required("#sel-nivel-computacion","Nivel Computacion");

		Utils.Validation.len("#txt-if-cci","CCI", 20);

		if (Utils.Validation.run()){
			
			console.log("Actualizar" , this.persona);

			if (this.persona.foto) 		this.persona.foto = Utils.UI.Control.getAttr("txt-dp-foto","data-filename");
			if (this.persona.documento) this.persona.documento = Utils.UI.Control.getAttr("txt-dp-documento","data-filename");
			if (this.persona.CV) 		this.persona.CV = Utils.UI.Control.getAttr("txt-dp-curriculum","data-filename");
			
			Utils.Rest.update(APP.URL_API + "persona" , this.persona).success(function(data){

				Utils.Notification.info("Se actualizaron correctamente!","Datos Personales");
			});
		}
	}

	Utils.Mask.init();
});
