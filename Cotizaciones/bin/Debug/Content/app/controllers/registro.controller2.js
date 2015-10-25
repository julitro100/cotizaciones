angular.module("main").controller("RegistroController",function(Utils,APP,$location){

	var self = this;
	
	this.persona={};
	
	this.tipodocumento = [];
	this.niveles = [];
	this.rubros = [];
	this.sectores = [];
	this.areas = [];
	this.idiomas = [];
	this.grados = [];
	
	this.paises = [];
	
	Utils.Rest.getList(this,APP.URL_API + "pais","paises");
	
	Utils.Rest.getList(this,APP.URL_API + "tipo/documento","tipodocumento");
	Utils.Rest.getList(this,APP.URL_API + "tipo/nivel","niveles");
	Utils.Rest.getList(this,APP.URL_API + "tipo/rubro","rubros");
	Utils.Rest.getList(this,APP.URL_API + "tipo/sector","sectores");
	Utils.Rest.getList(this,APP.URL_API + "tipo/area","areas");
	Utils.Rest.getList(this,APP.URL_API + "tipo/idioma","idiomas");
	Utils.Rest.getList(this,APP.URL_API + "tipo/grado","grados");
	
	this.formacionAcademica = [];
	this.formacion = {};
	this.nuevaFormacion = false;
	
	this.capacitaciones=[];
	this.capacitacion={};
	this.nuevaCapacitacion = false;
	
	this.idioma={};
	this.personaIdiomas=[];
	this.nuevoIdioma = false;

	this.experiencia={};
	this.experienciaLaboral=[];
	this.nuevaExperiencia=false;
	
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
	
	//FORMACIÓN ACADÉMICA
	this.agregarFormacionAcademica = function(){
		this.nuevaFormacion = true;
		$(".modal-formacion-academica").modal("show");
		console.log("Formacion Academica");
	}
	this.borrarFormacionAcademica = function(pformacion) {
		Utils.List.delete(pformacion,this.formacionAcademica);
	}	
	this.editarFormacionAcademica = function(pformacion){
		this.nuevaFormacion = false;
		this.formacion = pformacion;
		$(".modal-formacion-academica").modal("show");
	}
	
	//CAPACITACIÓN
	this.agregarCapacitacion = function(){
		this.nuevaCapacitacion = true;
		$(".modal-capacitacion").modal("show");
		console.log("Capacitacion");
	}
	this.borrarCapacitacion = function(pcapacitacion) {
		Utils.List.delete(pcapacitacion,this.capacitaciones);
	}	
	this.editarCapacitacion = function(pcapacitacion){
		this.nuevaCapacitacion = false;
		this.capacitacion = pcapacitacion;
		$(".modal-capacitacion").modal("show");
	}
	
	//IDIOMAS
	this.agregarIdiomas = function(){
		this.nuevoIdioma = true;
		$(".modal-idiomas").modal("show");
		console.log("Idiomas");
	}
	this.borrarIdiomas = function(pidioma) {
		Utils.List.delete(pidioma,this.personaIdiomas);
	}	
	this.editarIdiomas = function(pidioma){
		this.nuevoIdioma = false;
		this.idioma = pidioma;
		$(".modal-idiomas").modal("show");
	}
	
	//EXPERIENCIA LABORAL
	this.agregarExperienciaLaboral = function(){
		this.nuevaExperiencia = true;
		$(".modal-experiencia-laboral").modal("show");
		console.log("Experiencia Laboral");
	}
	this.borrarExperienciaLaboral = function(pexperiencia) {
		Utils.List.delete(pexperiencia,this.experienciaLaboral);
	}	
	
	this.editarExperienciaLaboral = function(pexperiencia){
		this.nuevaExperiencia = false;
		this.experiencia = pexperiencia;
		$(".modal-experiencia-laboral").modal("show");
	}
	
	this.guardarFormacionAcademica = function() {
		
		console.log("Guardar");		
		Utils.Validation.init();
		Utils.Validation.required("#sel-fa-grado-academico","Formación Académica");
		Utils.Validation.required("#txt-fa-profesion","Profesión");
		Utils.Validation.required("#txt-fa-fecha-expedicion","Fecha de Expedición");
		Utils.Validation.required("#txt-fa-institucion","Institución");
		Utils.Validation.required("#sel-fa-pais","País");
		Utils.Validation.required("#txt-fa-documento-sustentatorio","Documento Sustentatorio");
		
		if (Utils.Validation.run()){
			//convertir fechas
			
			
			this.formacion.fechaExpedicion = moment(this.fechaExpedicion,"DD/MM/YYYY").toDate();
			this.formacion.grado = Utils.UI.Select.getSelectedText("sel-fa-grado-academico");
			this.formacion.pais = Utils.UI.Select.getSelectedText("sel-fa-pais");
			this.formacion.documento = Utils.UI.Control.getAttr("txt-fa-documento-sustentatorio","data-filename");
			
			if (this.nuevaFormacion) this.formacionAcademica.push(this.formacion);
			console.log("Formacion académica" , this.formacionAcademica);
			this.formacion = {};
			$('#txt-fa-documento-sustentatorio').val("");
			$(".modal-formacion-academica").modal("hide");
		}
	}
	
	this.guardarCapacitacion = function() {
		
		console.log("Guardar Capacitacion");		
		Utils.Validation.init();
		Utils.Validation.required("#txt-c-curso-capacitacion","Curso de Capacitación");
		Utils.Validation.required("#dat-c-fecha-inicio","Fecha de Inicio");
		Utils.Validation.required("#dat-c-fecha-fin","Fecha de Fin");
		
		Utils.Validation.dateLessThan("#dat-c-fecha-inicio",this.capacitacion.fechaFin,"Fecha de Inicio");
		Utils.Validation.dateGreaterThan("#dat-c-fecha-fin",this.capacitacion.fechaInicio,"Fecha de Fin");
				
		//Utils.Validation.required("#txt-c-horas-lectivas","Horas Lectivas");
		Utils.Validation.required("#txt-c-institucion","Institución");
		Utils.Validation.required("#sel-c-pais","País");
		Utils.Validation.required("#txt-c-documento-sustentatorio","Documento Sustentatorio");
		
		if (Utils.Validation.run()){

			this.capacitacion.fechaInicio = moment(this.capacitacion.fechaInicio,"DD/MM/YYYY").toDate();
			this.capacitacion.fechaFin = moment(this.capacitacion.fechaFin,"DD/MM/YYYY").toDate();
			this.capacitacion.pais = Utils.UI.Select.getSelectedText("sel-c-pais");
			this.capacitacion.documento = Utils.UI.Control.getAttr("txt-c-documento-sustentatorio","data-filename");

			if (this.nuevaCapacitacion) this.capacitaciones.push(this.capacitacion);
			
			console.log("Capacitaciones" , this.capacitaciones);
			
			this.capacitacion = {};
			$('#txt-c-documento-sustentatorio').val("");
			$(".modal-capacitacion").modal("hide");			
		}
	}
	
	this.guardarIdioma = function() {
		
		console.log("Guardar");		
		Utils.Validation.init();
		Utils.Validation.required("#sel-i-idioma","Idioma");
		Utils.Validation.required("#sel-i-nivel-escritura","Nivel de Escritura");
		Utils.Validation.required("#sel-i-nivel-hablado","Nivel de Hablado");		
		Utils.Validation.required("#sel-i-nivel-lectura","Nivel de Lectura");
		//Utils.Validation.required("#txt-i-documento-sustentatorio","Documento Sustentatorio");
		
		if (Utils.Validation.run()){
			
			this.idioma.idioma = Utils.UI.Select.getSelectedText("sel-i-idioma");
			this.idioma.escritura = Utils.UI.Select.getSelectedText("sel-i-nivel-escritura");
			this.idioma.hablado = Utils.UI.Select.getSelectedText("sel-i-nivel-hablado");
			this.idioma.lectura = Utils.UI.Select.getSelectedText("sel-i-nivel-lectura");
			this.idioma.documento = Utils.UI.Control.getAttr("txt-i-documento-sustentatorio","data-filename");
			
			console.log("Idiomas", this.personaIdiomas);			
			if (this.nuevoIdioma) this.personaIdiomas.push(this.idioma);
			this.idioma = {};
			$('#txt-i-documento-sustentatorio').val("");
			$(".modal-idiomas").modal("hide");
		}
	}
	
	this.guardarExperienciaLaboral = function() {
		
		console.log("Guardar Experiencia");		
		Utils.Validation.init();
		Utils.Validation.required("#txt-el-empresa","Empresa");		
		Utils.Validation.required("#txt-el-cargo","Cargo");		
		Utils.Validation.required("#dat-el-fecha-inicio","Fecha de Inicio");		
		Utils.Validation.required("#dat-el-fecha-fin","Fecha de Cese");
		
		Utils.Validation.dateLessThan("#dat-el-fecha-inicio",this.experiencia.fechaFin,"Fecha de Inicio");
		Utils.Validation.dateGreaterThan("#dat-el-fecha-fin",this.experiencia.fechaInicio,"Fecha de Cese");
		
		Utils.Validation.required("#txt-el-descripcion","Descripción");		
		Utils.Validation.required("#txt-el-descripcion","Descripción");
		Utils.Validation.required("#sel-el-area","Área");
		Utils.Validation.required("#sel-el-rubro","Rubro");
		Utils.Validation.required("#sel-el-sector","Sector");
		Utils.Validation.required("#sel-el-pais","País");
		Utils.Validation.required("#txt-el-documento-sustentatorio","Documento Sustentatorio");
		
		if (Utils.Validation.run()){
			//convertir fechas
			this.experiencia.fechaInicio = moment(this.experiencia.fechaInicio,"DD/MM/YYYY").toDate();
			this.experiencia.fechaFin = moment(this.experiencia.fechaFin,"DD/MM/YYYY").toDate();
			
			if (!this.experiencia.area)
				this.experiencia.area = Utils.UI.Select.getSelectedText("sel-el-area");
			
			this.experiencia.rubro = Utils.UI.Select.getSelectedText("sel-el-rubro");
			this.experiencia.sector = Utils.UI.Select.getSelectedText("sel-el-sector");
			this.experiencia.pais = Utils.UI.Select.getSelectedText("sel-el-pais");
			this.experiencia.documento = Utils.UI.Control.getAttr("txt-el-documento-sustentatorio","data-filename");
			
			if (this.nuevaExperiencia) this.experienciaLaboral.push(this.experiencia);
			console.log("Experiencia Laboral", this.experienciaLaboral);
			
			this.experiencia = {};
			$('#txt-el-documento-sustentatorio').val("");
			$(".modal-experiencia-laboral").modal("hide");
		}
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

		Utils.Validation.required("#txt-dp-documento","Documento");
		
		Utils.Validation.required("#txt-dp-ruc","R.U.C."); 
		Utils.Validation.len("#txt-dp-ruc","R.U.C.", 11);
		
		
		Utils.Validation.required("#txt-dp-correo","Correo Electrónico");
		Utils.Validation.email("#txt-dp-correo","Correo Electrónico");
		
		
		Utils.Validation.required("#sel-dp-pais-nacimiento","País de Nacimiento");
		Utils.Validation.required("#txt-dp-direccion","Dirección de Residencia");
		
		Utils.Validation.required("#sel-dp-departamento","Departamento");
		Utils.Validation.required("#sel-dp-provincia","Provincia");
		Utils.Validation.required("#sel-dp-distrito","Distrito");

		Utils.Validation.required("#txt-dp-curriculum","Curriculum");
		Utils.Validation.required("#txt-dp-foto","Foto");
		
		Utils.Validation.required("#txt-if-banco","Banco");
		Utils.Validation.required("#txt-if-cuenta","Número de Cuenta");
		Utils.Validation.required("#txt-if-cci","CCI");
		Utils.Validation.len("#txt-if-cci","CCI", 20);
		
		Utils.Validation.required("#sel-nivel-computacion","Nivel Computacion");
		
		Utils.Validation.minLen("#panel-formacion-academica", this.formacionAcademica, 1, "Formación Académica" , "panel-danger");
		//Utils.Validation.minLen("#panel-capacitacion", this.capacitaciones, 1, "Capacitación" , "panel-danger");
		//Utils.Validation.minLen("#panel-idiomas", this.personaIdiomas, 1, "Idioma" , "panel-danger");
		Utils.Validation.minLen("#panel-experiencia-laboral", this.experienciaLaboral, 1, "Experiencia Laboral" , "panel-danger");		
		
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

			Utils.List.set("personaId",self.formacionAcademica,data.personaId);
			Utils.List.set("personaId",self.capacitaciones,data.personaId);
			Utils.List.set("personaId",self.personaIdiomas,data.personaId);
			Utils.List.set("personaId",self.experienciaLaboral,data.personaId);
			
			Utils.Rest.save(APP.URL_API + "persona/formacionacademica",self.formacionAcademica);
			
			Utils.Rest.save(APP.URL_API + "persona/idioma",self.personaIdiomas);
			Utils.Rest.save(APP.URL_API + "persona/experiencia",self.experienciaLaboral);

			Utils.Rest.save(APP.URL_API + "persona/capacitacion",self.capacitaciones);
		
			$(".modal-confirmacion").modal("hide");
			
			Utils.Notification.info("Se registro correctamente!","Registro Completo");
			
			/*setTimeout( function() {  window.location = "/supervisores/mensaje.html";  }  ,  2000 );*/
			setTimeout( function() {  window.location = "/appbase/mensaje.html";  }  ,  2000 );
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

	function handleFiles(e) {
	    var ctx = document.getElementById('canvas').getContext('2d');
	    var img = new Image;
	    img.src = URL.createObjectURL(e.target.files[0]);
	    img.onload = function() {
	        ctx.drawImage(img, 0,0 , 300 , 150);
	    }
	}
	
	
	
});