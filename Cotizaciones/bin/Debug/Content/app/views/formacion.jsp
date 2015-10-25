<div data-ng-controller="FormacionController as formCtrl" class="bmd-floating">
	<div class="panel panel-default">
		<div id="panel-formacion-academica" class="panel-heading">
			<a href="" class="btn btn-info bmd-ripple bmd-fab bmd-fab-sm bmd-floating pull-right" data-ng-click="formCtrl.agregarFormacionAcademica()" >
				<!-- For browsers that do not support ligatures, fall back to specifying the icons using numeric character -->
				<!-- <i class="bmd-icon material-icons">&#xe145;</i> -->
				<i class="bmd-icon material-icons">add</i>
			</a>
			<h4>Formación Académica</h4>
			<p style="font-size: 11px;color: gray;">(Título, Post-grado, Maestria, Diplomado ...)</p>
		</div>
		<div class="panel-body">
			<div class="table-responsive">
				<table class="table table-bordered table-striped">
					<thead>
						<tr>
							<td>Formación Académica</td>
							<td>Profesión o especialidad</td>
							<td>Fecha de Expedición</td>
							<td>Institución Académica</td>
							<td>País</td>
							<td><i class="fa fa-paperclip"></i> Documento Adjunto</td>
							<td></td>
						</tr>
					</thead>
					<tbody>
						<tr data-ng-repeat="formacion in formCtrl.formacionAcademica">
							<td>{{formacion.gradoAcademicoId | tipo : formCtrl.grados : "gradoId" : "descripcion" }}</td>
							<td>{{formacion.especialidad}}</td>
							<td>{{formacion.fechaExpedicion | date : "dd/MM/yyyy"}}</td>
							<td>{{formacion.institucion}}</td>
							<td>{{formacion.paisId | tipo : formCtrl.paises : "paisId" : "nombre" }}</td>
							<td align="center">
								<a class="btn btn-default" href="/appbase/api/v1/file/download{{formacion.documento}}"><i class="fa fa-paperclip"></i></a>
							</td>
							<td align="center">
								<button class="btn btn-default pull-right" data-ng-click="formCtrl.borrarFormacionAcademica(formacion)"><i class="glyphicon glyphicon-trash"></i></button>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</div>

	<!-- Modal Formacion Academica -->
	<div class="modal fade modal-formacion-academica" role="dialog" >
		<div class="modal-dialog modal-md">
			<div class="modal-content">
				<div class="modal-header bmd-bg-info bmd-text-blue-50">
					<button type="button" class="close" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
					<h4 class="modal-title">Formación Académica</h4>
				</div>
				<div class="modal-body">
					<div class="form-group">
						<label>Fomación Académica:</label>
						<select id="sel-fa-grado-academico" data-ng-model="formCtrl.formacion.gradoAcademicoId" class="form-control">
							<option data-ng-repeat="grado in formCtrl.grados" value="{{grado.gradoId}}">{{grado.descripcion}}</option>
						</select>
					</div>
					<div class="form-group">
						<label >Profesión o Especialidad: </label>
						<input id="txt-fa-profesion" data-ng-model="formCtrl.formacion.especialidad"  type="text" class="form-control mayuscula" placeholder="Nombre completo de la especialidad" />
						<p style="font-size: 11px;color: gray;">Ingrese el nombre conforme aparece en el documento sustentatorio.</p>
					</div>
					<div class="form-group">
						<label ><i class="fa fa-calendar"></i> Fecha de Expedición:</label>
						<input id="txt-fa-fecha-expedicion" data-ng-model="formCtrl.formacion.fechaExpedicion" type="text" class="form-control fecha" data-provide="datepicker" data-date-format="dd/mm/yyyy" data-date-language="es" placeholder="dd/mm/aaaa" />
					</div>
					<div class="form-group">
						<label >Institución Académica:</label>
						<input id="txt-fa-institucion" type="text" data-ng-model="formCtrl.formacion.institucion" class="form-control mayuscula" placeholder="Nombre completo de la Institución académica." />
						<p style="font-size: 11px;color: gray;">Ingrese el nombre conforme aparece en el documento sustentatorio.</p>
					</div>
					<div class="form-group">
						<label>País:</label>
						<select id="sel-fa-pais" data-ng-model="formCtrl.formacion.paisId" class="form-control pais">
							<option data-ng-repeat="pais in formCtrl.paises" value="{{pais.paisId}}">{{pais.nombre}}</option>
						</select>
					</div>
					<div class="form-group">
						<label class="control-label"><i class="fa fa-paperclip"></i> Documento Sustentatorio:</label>
						<input id="txt-fa-documento-sustentatorio" type="file" class="form-control" />
						<a id="txt-fa-documento-sustentatorio-ok" href="#" class="btn btn-info btn-xs pull-right bmd-floating bmd-ripple" style="display:none;"> <i class="fa fa-check"></i> </a>
					</div>
				</div>
				<div class="modal-footer">
					<button class="btn btn-info bmd-floating bmd-ripple" data-ng-click="formCtrl.guardarFormacionAcademica()">
						<i class="glyphicon glyphicon-save"></i>
						Guardar
					</button>
				</div>
			</div>
		</div>
	</div><!--/ Modal Formacion Academica -->
</div>
