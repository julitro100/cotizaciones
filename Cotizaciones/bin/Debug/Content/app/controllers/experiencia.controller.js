angular.module("main").controller("ExperienciaController", function(Utils,APP){

	
	var self = this;

	this.rubros = [];
	this.sectores = [];
	this.areas = [];
	this.paises = [];
	
	Utils.Rest.getList(this,APP.URL_API + "pais","paises");
	Utils.Rest.getList(this,APP.URL_API + "tipo/rubro","rubros");
	Utils.Rest.getList(this,APP.URL_API + "tipo/sector","sectores");
	Utils.Rest.getList(this,APP.URL_API + "tipo/area","areas");

	this.experiencia={};
	this.experienciaLaboral=[];
	this.nuevaExperiencia=false;

	refresh();

	//EXPERIENCIA LABORAL
	this.agregarExperienciaLaboral = function(){
		this.nuevaExperiencia = true;
		$(".modal-experiencia-laboral").modal("show");
		console.log("Experiencia Laboral");
	}

	this.borrarExperienciaLaboral = function(pexperiencia) {
		Utils.Rest.remove("experiencia/" + pexperiencia.experienciaId).success(function(){
			refresh();	
		});
	}	
	
	this.editarExperienciaLaboral = function(pexperiencia){
		this.nuevaExperiencia = false;
		this.experiencia = pexperiencia;
		$(".modal-experiencia-laboral").modal("show");
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

			if (!this.experiencia.area)
				this.experiencia.area = Utils.UI.Select.getSelectedText("sel-el-area");
			
			this.experiencia.rubro = Utils.UI.Select.getSelectedText("sel-el-rubro");
			this.experiencia.sector = Utils.UI.Select.getSelectedText("sel-el-sector");
			this.experiencia.pais = Utils.UI.Select.getSelectedText("sel-el-pais");
			this.experiencia.documento = Utils.UI.Control.getAttr("txt-el-documento-sustentatorio","data-filename");
			
			Utils.Rest.save(APP.URL_API + "experiencia",self.experiencia).success( function(){
				refresh();
			});	

			this.experiencia = {};
			$('#txt-el-documento-sustentatorio').attr("data-filename","");
			$('#txt-el-documento-sustentatorio').val("");
			$('#txt-el-documento-sustentatorio-ok').hide();
			$(".modal-experiencia-laboral").modal("hide");
		}
	}


	function refresh(){
		Utils.Rest.getList(self,APP.URL_API + "experiencia" ,"experienciaLaboral");
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