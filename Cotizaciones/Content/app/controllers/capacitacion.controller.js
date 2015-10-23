angular.module("main").controller("CapacitacionController", function(Utils,APP){
	
	var self = this;

	this.capacitaciones=[];
	this.capacitacion={};
	this.nuevaCapacitacion = false;

	this.paises = [];
	Utils.Rest.getList(this,APP.URL_API + "pais","paises");

	refresh();

	this.agregarCapacitacion = function(){
		this.nuevaCapacitacion = true;
		$(".modal-capacitacion").modal("show");
		console.log("Capacitacion");
	}

	this.borrarCapacitacion = function(pcapacitacion) {
		Utils.Rest.remove("capacitacion/"+pcapacitacion.capacitacionId).success(function(){
			refresh();
		});
	}

	this.editarCapacitacion = function(pcapacitacion){
		this.nuevaCapacitacion = false;
		this.capacitacion = pcapacitacion;
		$(".modal-capacitacion").modal("show");
	}

	this.guardarCapacitacion = function() {
		
		console.log("Guardar Capacitacion");		
		Utils.Validation.init();
		Utils.Validation.required("#txt-c-curso-capacitacion","Curso de Capacitación");
		Utils.Validation.required("#dat-c-fecha-inicio","Fecha de Inicio");
		Utils.Validation.required("#dat-c-fecha-fin","Fecha de Fin");
		
		Utils.Validation.dateLessThan("#dat-c-fecha-inicio",this.capacitacion.fechaFin,"Fecha de Inicio");
		Utils.Validation.dateGreaterThan("#dat-c-fecha-fin",this.capacitacion.fechaInicio,"Fecha de Fin");
				
		Utils.Validation.required("#txt-c-institucion","Institución");
		Utils.Validation.required("#sel-c-pais","País");
		Utils.Validation.required("#txt-c-documento-sustentatorio","Documento Sustentatorio");
		
		if (Utils.Validation.run()){

			this.capacitacion.documento = Utils.UI.Control.getAttr("txt-c-documento-sustentatorio","data-filename");

			Utils.Rest.save(APP.URL_API + "capacitacion",this.capacitacion).success(function(){
				refresh();
			});

			this.capacitacion = {};
			$("#txt-c-documento-sustentatorio-ok" ).hide();
			$("#txt-c-documento-sustentatorio" ).attr("data-filename","");
			$("#txt-c-documento-sustentatorio" ).val("");
			$(".modal-capacitacion").modal("hide");			
		}
	}

	function refresh(){
		Utils.Rest.getList(self,APP.URL_API + "capacitacion", "capacitaciones");
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