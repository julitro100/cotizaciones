<div data-ng-controller="IdiomaController as idmCtrl" class="bmd-floating">
	<div  class="panel panel-default">
		<div id="panel-idiomas" class="panel-heading">
			<a href="" class="btn btn-info bmd-ripple bmd-fab bmd-fab-sm bmd-floating pull-right" data-ng-click="idmCtrl.agregarIdiomas()" >
			  <!-- For browsers that do not support ligatures, fall back to specifying the icons using numeric character -->
			  <!-- <i class="bmd-icon material-icons">&#xe145;</i> -->
			  <i class="bmd-icon material-icons">add</i>
			</a>
			<h4>Idiomas</h4>
		</div>
		<div class="panel-body">
			<div class="table-responsive">
				<table class="table table-bordered table-striped">
					<thead>
						<tr>
							<td>Idioma</td>
							<td>Nivel de Escritura</td>
							<td>Nivel Hablado</td>
							<td>Nivel Lectura</td>
							<td><i class="fa fa-paperclip"> Documento Adjunto</i></td>
							<td></td>
						</tr>
					</thead>
					<tbody>
						<tr data-ng-repeat="idioma in idmCtrl.personaIdiomas">
							<td>{{idioma.idiomaId | tipo : idmCtrl.idiomas : "idiomaId" : "nombre" }}</td>
							<td>{{idioma.nivelEscrituraId | tipo : idmCtrl.niveles : "nivelId" : "descripcion" }}</td>
							<td>{{idioma.nivelHabladoId | tipo : idmCtrl.niveles : "nivelId" : "descripcion"}}</td>
							<td>{{idioma.nivelLecturaId | tipo : idmCtrl.niveles : "nivelId" : "descripcion"}}</td>
							<td align="center"><a class="btn btn-default" data-ng-show="idioma.documento != ''" href="/appbase/api/v1/file/download{{idioma.documento}}"><i class="fa fa-paperclip"></i></a></td>
							<td>
								<button class="btn btn-default pull-right" data-ng-click="idmCtrl.borrarIdiomas(idioma)"><i class="glyphicon glyphicon-trash"></i></button>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</div>
	
	<!-- Modal idiomas -->
	<div class="modal fade modal-idiomas" role="dialog" >
		<div class="modal-dialog modal-md">
			<div class="modal-content">
				<div class="modal-header bmd-bg-info bmd-text-blue-50">
					<button type="button" class="close" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
					<h4 class="modal-title">Idiomas</h4>
				</div>
				<div class="modal-body">
					<div class="form-group">
						<label>Idioma:</label>
						<select id="sel-i-idioma" data-ng-model="idmCtrl.idioma.idiomaId" class="form-control select2">
							<option data-ng-repeat="idioma in idmCtrl.idiomas" value="{{idioma.idiomaId}}">{{idioma.nombre}}</option>
						</select>
					</div>
					<div class="form-group">
						<label>Nivel de Escritura:</label>
						<select id="sel-i-nivel-escritura" data-ng-model="idmCtrl.idioma.nivelEscrituraId" class="form-control">
							<option data-ng-repeat="nivel in idmCtrl.niveles" value="{{nivel.nivelId}}">{{nivel.descripcion}}</option>
						</select>
					</div>
					<div class="form-group">
						<label>Nivel Hablado:</label>
						<select id="sel-i-nivel-hablado" data-ng-model="idmCtrl.idioma.nivelHabladoId" class="form-control">
							<option data-ng-repeat="nivel in idmCtrl.niveles" value="{{nivel.nivelId}}">{{nivel.descripcion}}</option>
						</select>
					</div>
					<div class="form-group">
						<label>Nivel Lectura:</label>
						<select id="sel-i-nivel-lectura" data-ng-model="idmCtrl.idioma.nivelLecturaId" class="form-control">
							<option data-ng-repeat="nivel in idmCtrl.niveles" value="{{nivel.nivelId}}">{{nivel.descripcion}}</option>
						</select>
					</div>
					<div class="form-group">
						<label><i class="fa fa-paperclip"></i> Documento Sustentatorio: (opcional)</label>
						<input id="txt-i-documento-sustentatorio" class="form-control" type="file" />
						<a id="txt-i-documento-sustentatorio-ok" href="#" class="btn btn-info btn-xs pull-right bmd-floating bmd-ripple" style="display:none;"> <i class="fa fa-check"></i> </a>
					</div>
				</div>

				<div class="modal-footer">
					<button class="btn btn-info bmd-floating bmd-ripple" data-ng-click="idmCtrl.guardarIdioma()">
						<i class="glyphicon glyphicon-save"></i>
						Guardar
					</button>
				</div>
			</div>
		</div>
	</div><!--/ Modal idiomas -->
</div>