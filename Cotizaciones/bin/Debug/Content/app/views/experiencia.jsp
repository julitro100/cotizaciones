<div data-ng-controller="ExperienciaController as expCtrl" class="bmd-floating">
	<div  class="panel panel-default">
		<div id="panel-experiencia-laboral" class="panel-heading">
			<a href="" class="btn btn-info bmd-ripple bmd-fab bmd-fab-sm bmd-floating pull-right" data-ng-click="expCtrl.agregarExperienciaLaboral()" >
			  <!-- For browsers that do not support ligatures, fall back to specifying the icons using numeric character -->
			  <!-- <i class="bmd-icon material-icons">&#xe145;</i> -->
			  <i class="bmd-icon material-icons">add</i>
			</a>
			<h4>Experiencia Laboral</h4>
		</div>
		<div class="panel-body">
			<div class="table-responsive">
				<table class="table table-bordered table-striped">
					<thead>
						<tr>
							<td>Empresa / Institución</td>
							<td>Cargo</td>
							<td>Fecha de Inicio</td>
							<td>Fecha de Cese</td>
							<td>Descripción</td>
							<td>Area</td>
							<td>Rubro</td>
							<td>Sector</td>
							<td>País</td>
							<td><i class="fa fa-paperclip"></i> Documento Adjunto</td>
							<td></td>
						</tr>
					</thead>
					<tbody>
						<tr data-ng-repeat="experiencia in expCtrl.experienciaLaboral">
							<td>{{experiencia.empresa}}</td>
							<td>{{experiencia.cargo}}</td>
							<td>{{experiencia.fechaInicio}}</td>
							<td>{{experiencia.fechaFin}}</td>
							<td>{{experiencia.descripcion}}</td>
							<td>{{experiencia.area}}</td>
							<td>{{experiencia.rubroId}}</td>
							<td>{{experiencia.sectorId}}</td>
							<td>{{experiencia.paisId | tipo : expCtrl.paises : "paisId": "nombre"}}</td>
							<td align="center"><a class="btn btn-default" href="/appbase/api/v1/file/download{{experiencia.documento}}"><i class="fa fa-paperclip"></i></a></td>
							<td>
								<button class="btn btn-default pull-right" data-ng-click="expCtrl.borrarExperienciaLaboral(experiencia)"><i class="glyphicon glyphicon-trash"></i></button>
							</td>
						</tr>	
					</tbody>
				</table>
			</div>
		</div>
	</div>

	<!-- Modal Experiencia Laboral -->
	<div class="modal fade modal-experiencia-laboral" role="dialog" >
		<div class="modal-dialog modal-md">
			<div class="modal-content">
				<div class="modal-header bmd-bg-info bmd-text-blue-50">
					<button type="button" class="close" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
					<h4 class="modal-title">Experiencia Laboral</h4>
				</div>
				<div class="modal-body">
					<div class="form-group">
						<label>Empresa / Institución:</label>
						<input id="txt-el-empresa" data-ng-model="expCtrl.experiencia.empresa" class="form-control mayuscula" type="text" />
					</div>
					<div class="form-group">
						<label>Cargo Desempeñado:</label>
						<input id="txt-el-cargo" data-ng-model="expCtrl.experiencia.cargo" class="form-control" />
					</div>
					
					<div class="form-group">
						<label>Descripción de Funciones:</label>
						<textarea id="txt-el-descripcion" data-ng-model="expCtrl.experiencia.descripcion" class="form-control mayuscula"></textarea>
					</div>
					<div class="row">
						<div class="col-md-6">
							<div class="form-group">
								<label>Fecha de Inicio:</label>
								<input id="dat-el-fecha-inicio" data-ng-model="expCtrl.experiencia.fechaInicio" class="form-control fecha" type="text" data-provide="datepicker" data-date-format="dd/mm/yyyy" data-date-language="es" placeholder="dd/mm/aaaa" />
							</div>
						</div>
						<div class="col-md-6">
							<div class="form-group">
								<label>Fecha de Cese:</label>
								<input id="dat-el-fecha-fin" data-ng-model="expCtrl.experiencia.fechaFin" class="form-control fecha" type="text" data-provide="datepicker" data-date-format="dd/mm/yyyy" data-date-language="es" placeholder="dd/mm/aaaa" />
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-md-6">
							<div class="form-group">
								<label>Área:</label>
								<select id="sel-el-area" data-ng-model="expCtrl.experiencia.areaId" class="form-control select2">
									<option data-ng-repeat="area in expCtrl.areas" value="{{area.areaId}}">{{area.nombre}}</option>								
								</select>
							</div>
						</div>
						<div class="col-md-6" data-ng-show="expCtrl.experiencia.areaId=='20'">
							<div class="form-group">
								<label>Especifique: </label>
								<input type="text" class="form-control mayuscula" data-ng-model="expCtrl.experiencia.area" />
							</div>
						</div>
					</div>

					<div class="row">
						<div class="col-md-6">
							<div class="form-group">
								<label>Rubro:</label>
								<select id="sel-el-rubro" data-ng-model="expCtrl.experiencia.rubroId" class="form-control select2">
									<option data-ng-repeat="rubro in expCtrl.rubros" value="{{rubro.rubroId}}">{{rubro.descripcion}}</option>
								</select>
							</div>
						</div>
						<div class="col-md-6">
							<div class="form-group">
								<label>Sector:</label>
								<select id="sel-el-sector" data-ng-model="expCtrl.experiencia.sectorId" class="form-control select2">
									<option data-ng-repeat="sector in expCtrl.sectores" value="{{sector.sectorId}}">{{sector.nombre}}</option>
								</select>
							</div>
						</div>
					</div>
					<div class="form-group">
						<label>País:</label>
						<select id="sel-el-pais" data-ng-model="expCtrl.experiencia.paisId" class="form-control pais">
							<option data-ng-repeat="pais in expCtrl.paises" value="{{pais.paisId}}">{{pais.nombre}}</option>
						</select>
					</div>
					<div class="form-group">
						<label><i class="fa fa-paperclip"></i> Documento Sustentatorio:</label>
						<input id="txt-el-documento-sustentatorio" class="form-control" data-ng-model="expCtrl.experiencia.documento" type="file" />
						<a id="txt-el-documento-sustentatorio-ok" href="#" class="btn btn-info btn-xs pull-right bmd-floating bmd-ripple" style="display:none;"> <i class="fa fa-check"></i> </a>
					</div>
				</div>
				<div class="modal-footer">
					<button class="btn btn-info bmd-floating bmd-ripple" data-ng-click="expCtrl.guardarExperienciaLaboral()">
						<i class="glyphicon glyphicon-save"></i>
						Guardar
					</button>
				</div>
			</div>
		</div>
	</div><!--/ Modal Experiencia Laboral -->
</div>