<div data-ng-controller="CapacitacionController as capCtrl" class="bmd-floating">
	
	<div class="panel panel-default">
		<div id="panel-capacitacion" class="panel-heading">
			<a href="" class="btn btn-info bmd-ripple bmd-fab bmd-fab-sm bmd-floating pull-right" data-ng-click="capCtrl.agregarCapacitacion()" >
			  <!-- For browsers that do not support ligatures, fall back to specifying the icons using numeric character -->
			  <!-- <i class="bmd-icon material-icons">&#xe145;</i> -->
			  <i class="bmd-icon material-icons">add</i>
			</a>
			<h4>Capacitación</h4>
			<p style="font-size: 11px;color: gray;">(Cursos, Seminarios, Talleres ...)</p>
		</div>
		<div class="panel-body">
			<div class="table-responsive">
				<table class="table table-bordered table-striped">
					<thead>
						<tr>
							<td>Capacitación</td>
							<td>Fecha de Inicio</td>
							<td>Fecha de Fin</td>
							<td>Horas lectivas</td>
							<td>Institución Académica</td>
							<td>País</td>
							<td><i class="fa fa-paperclip"></i> Documento Adjunto</td>
							<td></td>
						</tr>
					</thead>
					<tbody>
						<tr data-ng-repeat="capacitacion in capCtrl.capacitaciones">
							<td>{{capacitacion.capacitacion.toUpperCase()}}</td>
							<td>{{capacitacion.fechaInicio}}</td>
							<td>{{capacitacion.fechaFin}}</td>
							<td>{{capacitacion.horasLectivas}}</td>
							<td>{{capacitacion.institucion.toUpperCase()}}</td>
							<td>{{capacitacion.paisId | tipo : capCtrl.paises : "paisId" : "nombre"}}</td>
							<td align="center"><a class="btn btn-default" href="/appbase/api/v1/file/download{{capacitacion.documento}}"><i class="fa fa-paperclip"></i></a></td>
							<td>
								<button class="btn btn-default pull-right" data-ng-click="capCtrl.borrarCapacitacion(capacitacion)"><i class="glyphicon glyphicon-trash"></i></button>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</div>

	<!-- Modal Capacitación -->
	<div class="modal fade modal-capacitacion" role="dialog" >
		<div class="modal-dialog modal-md">
			<div class="modal-content">
				<div class="modal-header bmd-bg-info bmd-text-blue-50">
					<button type="button" class="close" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
					<h4 class="modal-title">Capacitación</h4>
				</div>
				<div class="modal-body">
					<div class="form-group">
						<label class="control-label">Curso de Capacitación:</label>
						<input id="txt-c-curso-capacitacion" data-ng-model="capCtrl.capacitacion.capacitacion" type="text" class="form-control mayuscula" placeholder="Nombre del curso de capacitación" />
					</div>
					<div class="form-group">
						<label class="control-label"><i class="fa fa-calendar"></i> Fecha de Inicio:</label>
						<input id="dat-c-fecha-inicio" data-ng-model="capCtrl.capacitacion.fechaInicio" type="text" class="form-control fecha" data-provide="datepicker" data-date-format="dd/mm/yyyy" data-date-language="es" placeholder="dd/mm/aaaa" />
					</div>
					<div class="form-group">
						<label class="control-label"><i class="fa fa-calendar"></i> Fecha de Fin:</label>
						<input id="dat-c-fecha-fin" data-ng-model="capCtrl.capacitacion.fechaFin" type="text" class="form-control fecha" data-provide="datepicker" data-date-format="dd/mm/yyyy" data-date-language="es" placeholder="dd/mm/aaaa" />
					</div>
					<div class="form-group">
						<label class="control-label">Horas Lectivas:</label>
						<input id="txt-c-horas-lectivas" data-ng-model="capCtrl.capacitacion.horasLectivas" type="number" class="form-control" />
					</div>
					<div class="form-group">
						<label class="control-label">Institución Académica:</label>
						<input id="txt-c-institucion" data-ng-model="capCtrl.capacitacion.institucion" type="text" class="form-control mayuscula" placeholder="Nombre completo de la Institución académica." />
						<p style="font-size: 11px;color: gray;">Ingrese el nombre conforme aparece en el documento sustentatorio.</p>
					</div>
					<div class="form-group">
						<label class="control-label">País:</label>
						<select id="sel-c-pais" class="form-control pais" data-ng-model="capCtrl.capacitacion.paisId">
							<option data-ng-repeat="pais in capCtrl.paises"  value="{{pais.paisId}}">{{pais.nombre}}</option>
						</select>
					</div>
					<div class="form-group">
						<label class="control-label"><i class="fa fa-paperclip"></i> Documento Sustentatorio:</label>
						<input id="txt-c-documento-sustentatorio" type="file" class="form-control" />
						<a id="txt-c-documento-sustentatorio-ok" href="#" class="btn btn-info btn-xs pull-right bmd-floating bmd-ripple" style="display:none;"> <i class="fa fa-check"></i> </a>
					</div>
				</div>
				<div class="modal-footer">
					<button class="btn btn-info bmd-floating bmd-ripple" data-ng-click="capCtrl.guardarCapacitacion()">
						<i class="glyphicon glyphicon-save"></i>
						Guardar
					</button>
				</div>
			</div>
		</div>
	</div><!--/ Modal Capacitación -->

</div>