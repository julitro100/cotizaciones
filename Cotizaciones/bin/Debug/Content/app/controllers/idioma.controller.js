angular.module("main").controller("IdiomaController", function(Utils,APP){

	var self = this;
	this.niveles = [];
	this.idiomas = [];
	this.paises = [];
	Utils.Rest.getList(this,APP.URL_API + "pais","paises");
	Utils.Rest.getList(this,APP.URL_API + "tipo/nivel","niveles");
	Utils.Rest.getList(this,APP.URL_API + "tipo/idioma","idiomas");

	this.idioma={};
	this.personaIdiomas=[];
	this.nuevoIdioma = false;

	refresh();

	//IDIOMAS
	this.agregarIdiomas = function(){
		this.nuevoIdioma = true;
		$(".modal-idiomas").modal("show");
		console.log("Idiomas");
	}

	this.borrarIdiomas = function(pidioma) {
		Utils.Rest.remove("personaidioma/" + pidioma.personaIdiomaId).success(function(){
			refresh();	
		});
	}

	this.editarIdiomas = function(pidioma){
		this.nuevoIdioma = false;
		this.idioma = pidioma;
		$(".modal-idiomas").modal("show");
	}

	this.guardarIdioma = function() {
		
		console.log("Guardar");		
		Utils.Validation.init();
		Utils.Validation.required("#sel-i-idioma","Idioma");
		Utils.Validation.required("#sel-i-nivel-escritura","Nivel de Escritura");
		Utils.Validation.required("#sel-i-nivel-hablado","Nivel de Hablado");		
		Utils.Validation.required("#sel-i-nivel-lectura","Nivel de Lectura");
		
		if (Utils.Validation.run()){
			
			this.idioma.documento = Utils.UI.Control.getAttr("txt-i-documento-sustentatorio","data-filename");
			
			Utils.Rest.save(APP.URL_API + "personaidioma",this.idioma).success(function(){
				refresh();
			});

			this.idioma = {};

			$('#txt-i-documento-sustentatorio-ok').hide();
			$('#txt-i-documento-sustentatorio').val("");
			$('#txt-i-documento-sustentatorio').attr("data-filename","");
			$(".modal-idiomas").modal("hide");


		}
	}


	function refresh(){
		Utils.Rest.getList(self,APP.URL_API + "personaidioma" ,"personaIdiomas");
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