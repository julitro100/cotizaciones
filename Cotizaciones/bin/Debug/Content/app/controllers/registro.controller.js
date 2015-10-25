angular.module("main").controller("RegistroController",function(Utils,APP,$location){
	
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
	
	this.tipoDocumento = function(){
		if (this.persona.tipoDocumentoId == "1") 
			$("#txt-dp-numero-documento").inputmask("99999999",{autoUnmask:true});
		else
			$("#txt-dp-numero-documento").inputmask("&&&&&&&&&&&&",{autoUnmask:true});
	}
	
	this.departamentoSelected = function(){
		
		Utils.Rest.getList(this,APP.URL_API + "departamento/" + this.persona.departamentoId + "/provincia" ,"provincias");
		this.persona.provincia = "";
	}
	
	this.provinciaSelected = function() {
		
		Utils.Rest.getList(this,APP.URL_API + "provincia/" + this.persona.provinciaId + "/distrito" ,"distritos");
		this.persona.distrito = "";
	}
	
	this.registrarse = function() {
		
		console.log("Guardar registro", this.persona);		
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

		//Utils.Validation.required("#txt-dp-documento","Documento");
		
		Utils.Validation.required("#txt-dp-ruc","R.U.C."); 
		Utils.Validation.len("#txt-dp-ruc","R.U.C.", 11);
		
		
		Utils.Validation.required("#txt-dp-correo","Correo Electrónico");
		Utils.Validation.email("#txt-dp-correo","Correo Electrónico");
		
		
		Utils.Validation.required("#sel-dp-pais-nacimiento","País de Nacimiento");
		Utils.Validation.required("#txt-dp-direccion","Dirección de Residencia");
		
		Utils.Validation.required("#sel-dp-departamento","Departamento");
		Utils.Validation.required("#sel-dp-provincia","Provincia");
		Utils.Validation.required("#sel-dp-distrito","Distrito");

		//Utils.Validation.required("#txt-dp-curriculum","Curriculum");
		//Utils.Validation.required("#txt-dp-foto","Foto");
		
		Utils.Validation.required("#sel-nivel-computacion","Nivel Computacion");
		
		Utils.Validation.required("#password","Contraseña");
		
		if (Utils.Validation.run()){
			
			$(".modal-confirmacion").modal("show");
		}
	}
	
	this.confirmarRegistro = function() {
		
		console.log("Registro" , this.persona);

		this.persona.fechaNacimiento = Utils.Date.toDate(this.persona.fechaNacimiento);
		
		this.persona.foto = Utils.UI.Control.getAttr("txt-dp-foto","data-filename");
		this.persona.documento = Utils.UI.Control.getAttr("txt-dp-documento","data-filename");
		this.persona.CV = Utils.UI.Control.getAttr("txt-dp-curriculum","data-filename");
		
		Utils.Rest.save(APP.URL_API + "persona" , this.persona).success(function(data){

			$(".modal-confirmacion").modal("hide");
			
			Utils.Notification.info("Se registro correctamente!","Registro Completo");
			
			setTimeout( function() { window.location = APP.URL + "#/mensaje"  }  ,  2000 );
		});
	}

	$('input[type="file"]').change(function()
	{
		console.log("upload",this);
		var control = this;
		$("#" + control.id + "-ok" ).hide();
		$(control).attr("data-ok","false");
		var	loaded = Utils.File.upload(control, APP.URL_API + "file/upload");
		if (loaded) 
		{
			loaded.success(function(data){
				
				$(control).attr("data-ok","true");
				$(control).attr("data-filename",data);
				$("#" + control.id + "-ok" ).show();
			});
		}
	});
	
	
	var input = document.getElementById('txt-dp-foto');
	input.addEventListener('change', handleFiles);

	function handleFiles(e) 
	{
	    var ctx = document.getElementById('canvas').getContext('2d');
	    var img = new Image;
	    img.src = URL.createObjectURL(e.target.files[0]);
	    img.onload = function() {
	        ctx.drawImage(img, 0,0 , 300 , 150);
	    }
	}
});