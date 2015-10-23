angular.module("main").controller("FormacionController", function(Utils,APP){


	var self = this;
	
	this.formacionAcademica = [];
	this.formacion = {};
	this.nuevaFormacion = false;

	this.grados = [];
	this.paises = [];
	Utils.Rest.getList(this,APP.URL_API + "pais","paises");
	Utils.Rest.getList(this,APP.URL_API + "tipo/grado","grados");

	refresh();

	this.agregarFormacionAcademica = function(){
		this.nuevaFormacion = true;
		$(".modal-formacion-academica").modal("show");
		console.log("Formacion Academica");
	}

	this.borrarFormacionAcademica = function(pformacion) {
		Utils.Rest.remove("formacionacademica/"+pformacion.formacionAcademicaId).success(function(){
			refresh();	
		});
	}

	this.editarFormacionAcademica = function(pformacion){
		this.nuevaFormacion = false;
		this.formacion = pformacion;
		$(".modal-formacion-academica").modal("show");
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
			
			this.formacion.grado = Utils.UI.Select.getSelectedText("sel-fa-grado-academico");
			this.formacion.pais = Utils.UI.Select.getSelectedText("sel-fa-pais");
			this.formacion.documento = Utils.UI.Control.getAttr("txt-fa-documento-sustentatorio","data-filename");
			
			Utils.Rest.save(APP.URL_API + "formacionacademica",self.formacion).success( function(){
				refresh();
			});			
			
			this.formacion = {};
			$('#txt-fa-documento-sustentatorio').val("");
			$('#txt-fa-documento-sustentatorio-ok').hide();
			$('#txt-fa-documento-sustentatorio').attr("data-filename","");
			$(".modal-formacion-academica").modal("hide");
		}
	}

	function refresh(){
		Utils.Rest.getList(self,APP.URL_API + "formacionacademica" ,"formacionAcademica");
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

	Utils.Mask.init();

});