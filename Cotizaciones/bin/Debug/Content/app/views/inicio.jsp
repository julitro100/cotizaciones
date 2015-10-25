<div data-ng-controller="RegistroController as regCtrl" class="bmd-floating">
	<div class="panel panel-default">
		<div class="panel-heading">
			<h4>Datos Personales</h4>
		</div>

		<div class="panel-body">
			<div class="row">
				<div class="col-md-9 form-horizontal">
					<div class="form-group">
						<label class="col-md-3 control-label" >Nombres:</label>
						<div class="col-md-9">
							<input id="txt-dp-nombres" data-ng-model="regCtrl.persona.nombres" type="text" class="form-control mayuscula" placeholder="Nombres" />
						</div>
					</div>
					<div class="form-group">
						<label class="col-md-3 control-label">Apellidos:</label>
						<div class="col-md-9">
							<input id="txt-dp-apellidos" data-ng-model="regCtrl.persona.apellidos" type="text" class="form-control mayuscula" placeholder="Apellidos" />
						</div>
					</div>
					<div class="form-group">
						<label class="col-md-3 control-label" >Fecha de Nacimiento:</label>
						<div class="col-md-4">
							<input id="txt-dp-fecha-nacimiento" data-ng-model="regCtrl.persona.fechaNacimiento" type="text" class="form-control fecha" data-provide="datepicker" data-date-format="dd/mm/yyyy" data-date-language="es" placeholder="dd/mm/aaaa" />
						</div>
					</div>
					<div class="form-group">
						<label class="col-md-3 control-label" >País de nacimiento</label>
						<div class="col-md-4">
							<select id="sel-dp-pais-nacimiento" data-ng-model="regCtrl.persona.paisNacimientoId" class="form-control pais">
								<option data-ng-repeat="pais in regCtrl.paises" value="{{pais.paisId}}">{{pais.nombre}}</option>
							</select>
						</div>
					</div>
					<div class="form-group">
						<label class="col-md-3 control-label" >Sexo:</label>
						<div class="col-md-4">
							<select id="sel-dp-sexo" data-ng-model="regCtrl.persona.sexo" class="form-control">
								<option value="">-- Seleccione --</option>
								<option value="M">Masculino</option>
								<option value="F">Femenino</option>
							</select>
						</div>
					</div>
					<div class="form-group">
						<label class="col-md-3 control-label">Tipo de Documento:</label>
						<div class="col-md-4">
							<select id="sel-dp-tipo-documento" data-ng-model="regCtrl.persona.tipoDocumentoId" class="form-control" data-ng-change="regCtrl.tipoDocumento()">
								<option data-ng-repeat="tipo in regCtrl.tipodocumento" value="{{tipo.tipoDocumentoId}}">{{tipo.descripcion}}</option>
							</select>
						</div>
					</div>
					<div class="form-group">
						<label class="col-md-3 control-label">Número Documento:</label>
						<div class="col-md-6">
							<input id="txt-dp-numero-documento" data-ng-model="regCtrl.persona.numeroDocumento" type="text" class="form-control" placeholder="Número de Documento" />
						</div>
					</div>
					<div class="form-group">
						<label class="col-md-3 control-label" ><i class="fa fa-paperclip"></i> Adjuntar Documento de Identidad</label>
						<div class="col-md-6">
							<input id="txt-dp-documento" data-ng-model="regCtrl.persona.documento" class="form-control" type="file" />
						</div>
						<div class="col-md-1">
							<a id="txt-dp-documento-ok" href="#" class="btn btn-info btn-xs pull-right bmd-floating bmd-ripple" style="display:none;"> <i class="fa fa-check"></i> </a>
						</div>
					</div>
					<div class="form-group">
						<label class="col-md-3 control-label" >R.U.C.</label>
						<div class="col-md-4">
							<input id="txt-dp-ruc" data-ng-model="regCtrl.persona.RUC" type="text" class="form-control ruc" placeholder="R.U.C." />
						</div>
					</div>
					<div class="form-group">
						<label class="col-md-3 control-label">Teléfono Fijo:</label>
						<div class="col-md-4">
							<input id="txt-dp-telefono" data-ng-model="regCtrl.persona.telefono" type="text" class="form-control numero" placeholder="Teléfono Fijo" required/>
						</div>
					</div>
					<div class="form-group">
						<label class="col-md-3 control-label">Teléfono Celular:</label>
						<div class="col-md-4">
							<input id="txt-dp-celular" data-ng-model="regCtrl.persona.celular" type="text" class="form-control numero" placeholder="Teléfono Celular" required/>
						</div>
					</div>
					<div class="form-group">
						<label class="col-md-3 control-label">Correo Electrónico:</label>
						<div class="col-md-9">
							<input id="txt-dp-correo" data-ng-model="regCtrl.persona.email" type="email" class="form-control" placeholder="CORREO ELECTRÓNICO" required/>
						</div>
					</div>					
					<div class="form-group">
						<label class="col-md-3 control-label">Dirección domiciliaria:</label>
						<div class="col-md-9">
							<input id="txt-dp-direccion" data-ng-model="regCtrl.persona.direccion" type="text" class="form-control mayuscula" placeholder="Dirección domiciliaria" />
						</div>
					</div>
					<div class="form-group">
						<label class="col-md-3 control-label"></label>
						<div class="col-md-9">
							<div class="row">
								<div class="col-md-4">
									<div class="form-group" style="padding-right: 20px; padding-left: 15px;">
										<label  class="control-label">Departamento:</label>
										<select id="sel-dp-departamento" class="form-control" data-ng-model="regCtrl.persona.departamentoId" data-ng-change="regCtrl.departamentoSelected()" >
											<option data-ng-repeat="departamento in regCtrl.departamentos" value="{{departamento.departamentoId}}">{{departamento.nombre}}</option>
										</select>
									</div>
								</div>
								<div class="col-md-4">
									<div class="form-group" style="padding-right: 20px; padding-left: 15px;">
										<label  class="control-label">Provincia:</label>
										<select id="sel-dp-provincia" class="form-control" data-ng-model="regCtrl.persona.provinciaId" data-ng-change="regCtrl.provinciaSelected()" >
											<option data-ng-repeat="provincia in regCtrl.provincias" value="{{provincia.provinciaId}}">{{provincia.nombre}}</option>
										</select>
									</div>
								</div>
								<div class="col-md-4">
									<div class="form-group" style="padding-right: 15px; padding-left: 15px;">
										<label  class="control-label">Distrito:</label>
										<select id="sel-dp-distrito" data-ng-model="regCtrl.persona.distritoId" class="form-control">
											<option data-ng-repeat="distrito in regCtrl.distritos" value="{{distrito.distritoId}}">{{distrito.nombre}}</option>
										</select>
									</div>
								</div>
							</div>
						</div>
					</div>
					
					<div class="form-group">
						<label class="col-md-3 control-label"><i class="fa fa-paperclip"></i> Adjuntar Curriculum:</label>
						<div class="col-md-5">
							<input id="txt-dp-curriculum" data-ng-model="regCtrl.persona.cv" class="form-control" type="file" />
						</div>
						<div class="col-md-1">
							<a id="txt-dp-curriculum-ok" href="#" class="btn btn-info btn-xs pull-right bmd-floating bmd-ripple" style="display:none;"> <i class="fa fa-check"></i> </a>
						</div>
					</div>	
				</div>
				<div class="col-md-3" align="right">
					<div style="width: 150px">
						<canvas id="canvas" style="width: 150px;height: 200px;background-color: gray;"></canvas>		
						<input id="txt-dp-foto" type="file" class="form-control" data-ng-model="regCtrl.persona.foto" />
						<a id="txt-dp-foto-ok" href="#" class="btn btn-info btn-xs pull-right bmd-floating bmd-ripple" style="display:none;"> <i class="fa fa-check"></i> </a>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="panel panel-default">
		<div class="panel-heading">
			<h4>Información Financiera</h4>
		</div>
		<div class="panel-body">
			<div class="row">
				<div class="col-md-9 form-horizontal">
					<div class="form-group">
						<label class="col-md-3 control-label" >Banco:</label>
						<div class="col-md-9">
							<input id="txt-if-banco" data-ng-model="regCtrl.persona.banco" type="text" class="form-control mayuscula" placeholder="Nombre del banco" />
						</div>
					</div>
					<div class="form-group">
						<label class="col-md-3 control-label" >Número de Cuenta:</label>
						<div class="col-md-9">
							<input id="txt-if-cuenta" data-ng-model="regCtrl.persona.cuenta" type="text" class="form-control cuenta" placeholder="Número de Cuenta" />
						</div>
					</div>
					<div class="form-group">
						<label class="col-md-3 control-label" >CCI:</label>
						<div class="col-md-9">
							<input id="txt-if-cci" data-ng-model="regCtrl.persona.CCI" type="text" class="form-control cci" placeholder="Código de Cuenta Interbancario" />
							<p style="font-size: 11px;color: gray;">Ingresa los 20 dígitos de la cuenta de destino (CCI) sin considerar espacios en blanco o alguno de los símbolos: (-) (,) (/) (*).
							<br /> Por ejemplo: Si el CCI que vas a ingresar es de la forma 002-100-012022434968-49 ingrésalo de esta manera: 00210001202243496849</p>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="panel-footer">
		</div>
	</div>

	<div class="panel panel-default">
		<div id="panel-formacion-academica" class="panel-heading">
			<a href="" class="btn btn-info bmd-ripple bmd-fab bmd-fab-sm bmd-floating pull-right" data-ng-click="regCtrl.agregarFormacionAcademica()" >
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
							<td><i class="fa fa-paperclip"></i></td>
							<td></td>
						</tr>
					</thead>
					<tbody>
						<tr data-ng-repeat="formacion in regCtrl.formacionAcademica">
							<td>{{formacion.grado}}</td>
							<td>{{formacion.especialidad}}</td>
							<td>{{formacion.fechaExpedicion | date : "dd/MM/yyyy"}}</td>
							<td>{{formacion.institucion}}</td>
							<td>{{formacion.pais}}</td>
							<td><a href="/appbase/api/v1/file/download{{formacion.documento}}"><i class="fa fa-paperclip"></i></a></td>
							<td>
								<button class="btn btn-default pull-right" data-ng-click="regCtrl.borrarFormacionAcademica(formacion)"><i class="glyphicon glyphicon-trash"></i></button>
								
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</div>

	<div class="panel panel-default">
		<div id="panel-capacitacion" class="panel-heading">
			<a href="" class="btn btn-info bmd-ripple bmd-fab bmd-fab-sm bmd-floating pull-right" data-ng-click="regCtrl.agregarCapacitacion()" >
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
							<td><i class="fa fa-paperclip"></i></td>
							<td></td>
						</tr>
					</thead>
					<tbody>
						<tr data-ng-repeat="capacitacion in regCtrl.capacitaciones">
							<td>{{capacitacion.capacitacion}}</td>
							<td>{{capacitacion.fechaInicio | date : "dd/MM/yyyy"}}</td>
							<td>{{capacitacion.fechaFin | date : "dd/MM/yyyy"}}</td>
							<td>{{capacitacion.horasLectivas}}</td>
							<td>{{capacitacion.institucion}}</td>
							<td>{{capacitacion.pais}}</td>
							<td><a href="/appbase/api/v1/file/download{{capacitacion.documento}}"><i class="fa fa-paperclip"></i></a></td>
							<td>
								<button class="btn btn-default pull-right" data-ng-click="regCtrl.borrarCapacitacion(capacitacion)"><i class="glyphicon glyphicon-trash"></i></button>
								
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</div>

	<div  class="panel panel-default">
		<div id="panel-idiomas" class="panel-heading">
			<a href="" class="btn btn-info bmd-ripple bmd-fab bmd-fab-sm bmd-floating pull-right" data-ng-click="regCtrl.agregarIdiomas()" >
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
							<td><i class="fa fa-paperclip"></i></td>
							<td></td>
						</tr>
					</thead>
					<tbody>
						<tr data-ng-repeat="idioma in regCtrl.personaIdiomas">
							<td>{{idioma.idioma}}</td>
							<td>{{idioma.escritura}}</td>
							<td>{{idioma.hablado}}</td>
							<td>{{idioma.lectura}}</td>
							<td><a data-ng-show="idioma.documento != ''" href="/appbase/api/v1/file/download{{idioma.documento}}"><i class="fa fa-paperclip"></i></a></td>
							<td>
								<button class="btn btn-default pull-right" data-ng-click="regCtrl.borrarIdiomas(idioma)"><i class="glyphicon glyphicon-trash"></i></button>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</div>

	<div  class="panel panel-default">
		<div id="panel-experiencia-laboral" class="panel-heading">
			<a href="" class="btn btn-info bmd-ripple bmd-fab bmd-fab-sm bmd-floating pull-right" data-ng-click="regCtrl.agregarExperienciaLaboral()" >
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
							<td><i class="fa fa-paperclip"></i></td>
							<td></td>
						</tr>
					</thead>
					<tbody>
						<tr data-ng-repeat="experiencia in regCtrl.experienciaLaboral">
							<td>{{experiencia.empresa}}</td>
							<td>{{experiencia.cargo}}</td>
							<td>{{experiencia.fechaInicio | date : "dd/MM/yyyy" }}</td>
							<td>{{experiencia.fechaFin | date : "dd/MM/yyyy" }}</td>
							<td>{{experiencia.descripcion}}</td>
							<td>{{experiencia.area}}</td>
							<td>{{experiencia.rubro}}</td>
							<td>{{experiencia.sector}}</td>
							<td>{{experiencia.pais}}</td>
							<td><a href="/appbase/api/v1/file/download{{experiencia.documento}}"><i class="fa fa-paperclip"></i></a></td>
							<td>
								<button class="btn btn-default pull-right" data-ng-click="regCtrl.borrarExperienciaLaboral(experiencia)"><i class="glyphicon glyphicon-trash"></i></button>
								
							</td>
						</tr>	
					</tbody>
				</table>
			</div>
		</div>
	</div>

	<div  class="panel panel-default">
		<div id="panel-computacion" class="panel-heading">
			<h4>Conocimientos en Computación</h4>
		</div>
		<div class="panel-body">
			<div class="row">
				<div class="form-group">
					<label class="control-label col-md-3">¿Tiene Ud. Conocimientos en computación?</label>
					<div class="col-md-1">
						<div class="radio bmd-radio">
							<label>
								<input class="bmd-radio-input bmd-ripple bmd-ink-gray" data-ng-model="regCtrl.persona.computacion" type="radio" id="rb-computacion" name="rb-computacion" value="true">
								Si
								<span class="bmd-radio-check"></span>
							</label>
						</div>
					</div>
					<div class="col-md-1">
						<div class="radio bmd-radio">
							<label>
								<input class="bmd-radio-input bmd-ripple bmd-ink-gray" data-ng-model="regCtrl.persona.computacion" type="radio" id="rb-computacion" name="rb-computacion" value="false" data-ng-init="regCtrl.persona.computacion ='false'">
								No
								<span class="bmd-radio-check"></span>
							</label>
						</div>
					</div>
					<div class="col-md-4" data-ng-show="regCtrl.persona.computacion=='true'">
						<div class="form-group">
							<label class="col-md-2">Nivel</label>
							<div class="col-md-6">
								<select id="sel-nivel-computacion" class="form-control" data-ng-model="regCtrl.persona.nivelComputacionId">
									<option data-ng-repeat="nivel in regCtrl.niveles" value="{{nivel.nivelId}}">{{nivel.descripcion}}</option>
								</select>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="panel-footer">
		</div>
	</div>

	<div  class="panel panel-default">
		<div id="panel-informacion-adicional" class="panel-heading">
			<h4>Información Adicional</h4>
		</div>
		<div class="panel-body">
			<div class="row">
				<div class="form-group">
					<label  class="col-md-3 control-label">¿Ha trabajado en la APCI?</label>
					<div class="col-md-1">
						<div class="radio bmd-radio">
							<label>
								<input class="bmd-radio-input bmd-ripple bmd-ink-gray" type="radio" id="rb-trabaja-apci" data-ng-model="regCtrl.persona.trabajoEnAPCI" name="rb-trabaja-apci" value="true">
								Si
								<span class="bmd-radio-check"></span>
							</label>
						</div>
					</div>
					<div class="col-md-1">
						<div class="radio bmd-radio">
							<label>
								<input class="bmd-radio-input bmd-ripple bmd-ink-gray" type="radio" id="rb-trabaja-apci" data-ng-model="regCtrl.persona.trabajoEnAPCI" name="rb-trabaja-apci" value="false" data-ng-init="regCtrl.persona.trabajoEnAPCI ='false'">
								No
								<span class="bmd-radio-check"></span>
							</label>
						</div>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="form-group">
					<label  class="col-md-3 control-label">¿Tiene familiares trabajando en la APCI?</label>
					<div class="col-md-1">
						<div class="radio bmd-radio">
							<label>
								<input class="bmd-radio-input bmd-ripple bmd-ink-gray" type="radio" id="rb-familiares-apci" data-ng-model="regCtrl.persona.familiaresEnAPCI" name="rb-familiares-apci" value="true">
								Si
								<span class="bmd-radio-check"></span>
							</label>
						</div>
					</div>
					<div class="col-md-1">
						<div class="radio bmd-radio">
							<label>
								<input class="bmd-radio-input bmd-ripple bmd-ink-gray" type="radio" id="rb-familiares-apci" data-ng-model="regCtrl.persona.familiaresEnAPCI" name="rb-familiares-apci" value="false" data-ng-init="regCtrl.persona.familiaresEnAPCI ='false'">
								No
								<span class="bmd-radio-check"></span>
							</label>
						</div>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="form-group">
					<label  class="col-md-3 control-label">¿Ocupa un cargo directivo en una ONGD / ENIEX?</label>
					<div class="col-md-1">
						<div class="radio bmd-radio">
							<label>
								<input class="bmd-radio-input bmd-ripple bmd-ink-gray" data-ng-model="regCtrl.persona.directivoONGD_ENIEX" type="radio" id="rb-ong" name="rb-ong" value="true">
								Si
								<span class="bmd-radio-check"></span>
							</label>
						</div>
					</div>
					<div class="col-md-1">
						<div class="radio bmd-radio">
							<label>
								<input class="bmd-radio-input bmd-ripple bmd-ink-gray" data-ng-model="regCtrl.persona.directivoONGD_ENIEX" type="radio" id="rb-ong" name="rb-ong" value="false" data-ng-init="regCtrl.persona.directivoONGD_ENIEX ='false'">
								No
								<span class="bmd-radio-check"></span>
							</label>
						</div>
					</div>
				</div>	
			</div>
			<div class="row">
				<div class="form-group">
					<label  class="col-md-3 control-label">¿Anteriormente ha ocupado un cargo directivo en una ONGD / ENIEX?</label>
					<div class="col-md-1">
						<div class="radio bmd-radio">
							<label>
								<input class="bmd-radio-input bmd-ripple bmd-ink-gray" data-ng-model="regCtrl.persona.fueDirectivoONGD_ENIEX" type="radio" id="rb-fue-ong" name="rb-fue-ong" value="true">
								Si
								<span class="bmd-radio-check"></span>
							</label>
						</div>
					</div>
					<div class="col-md-1">
						<div class="radio bmd-radio">
							<label>
								<input class="bmd-radio-input bmd-ripple bmd-ink-gray" data-ng-model="regCtrl.persona.fueDirectivoONGD_ENIEX" type="radio" id="rb-fue-ong" name="rb-fue-ong" value="false" data-ng-init="regCtrl.persona.fueDirectivoONGD_ENIEX ='false'">
								No
								<span class="bmd-radio-check"></span>
							</label>
						</div>
					</div>
				</div>	
			</div>		
		</div>
		<div class="panel-footer">
		</div>
	</div>
	<div class="panel-footer">
		<button class="btn btn-info bmd-floating bmd-ripple" data-ng-click="regCtrl.registrarse()">
			<i class="glyphicon glyphicon-save"></i>
			Registrar
		</button>
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
						<input id="txt-c-curso-capacitacion" data-ng-model="regCtrl.capacitacion.capacitacion" type="text" class="form-control mayuscula" placeholder="Nombre del curso de capacitación" />
					</div>
					<div class="form-group">
						<label class="control-label"><i class="fa fa-calendar"></i> Fecha de Inicio:</label>
						<input id="dat-c-fecha-inicio" data-ng-model="regCtrl.capacitacion.fechaInicio" type="text" class="form-control fecha" data-provide="datepicker" data-date-format="dd/mm/yyyy" data-date-language="es" placeholder="dd/mm/aaaa" />
					</div>
					<div class="form-group">
						<label class="control-label"><i class="fa fa-calendar"></i> Fecha de Fin:</label>
						<input id="dat-c-fecha-fin" data-ng-model="regCtrl.capacitacion.fechaFin" type="text" class="form-control fecha" data-provide="datepicker" data-date-format="dd/mm/yyyy" data-date-language="es" placeholder="dd/mm/aaaa" />
					</div>
					<div class="form-group">
						<label class="control-label">Horas Lectivas:</label>
						<input id="txt-c-horas-lectivas" data-ng-model="regCtrl.capacitacion.horasLectivas" type="number" class="form-control" />
					</div>
					<div class="form-group">
						<label class="control-label">Institución Académica:</label>
						<input id="txt-c-institucion" data-ng-model="regCtrl.capacitacion.institucion" type="text" class="form-control mayuscula" placeholder="Nombre completo de la Institución académica." />
						<p style="font-size: 11px;color: gray;">Ingrese el nombre conforme aparece en el documento sustentatorio.</p>
					</div>
					<div class="form-group">
						<label class="control-label">País:</label>
						<select id="sel-c-pais" class="form-control pais" data-ng-model="regCtrl.capacitacion.paisId">
							<option data-ng-repeat="pais in regCtrl.paises"  value="{{pais.paisId}}">{{pais.nombre}}</option>
						</select>
					</div>
					<div class="form-group">
						<label class="control-label"><i class="fa fa-paperclip"></i> Documento Sustentatorio:</label>
						<input id="txt-c-documento-sustentatorio" type="file" class="form-control" />
						<a id="txt-c-documento-sustentatorio-ok" href="#" class="btn btn-info btn-xs pull-right bmd-floating bmd-ripple" style="display:none;"> <i class="fa fa-check"></i> </a>
					</div>
				</div>
				<div class="modal-footer">
					<button class="btn btn-info bmd-floating bmd-ripple" data-ng-click="regCtrl.guardarCapacitacion()">
						<i class="glyphicon glyphicon-save"></i>
						Guardar
					</button>
				</div>
			</div>
		</div>
	</div><!--/ Modal Capacitación -->

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
						<select id="sel-i-idioma" data-ng-model="regCtrl.idioma.idiomaId" class="form-control select2">
							<option data-ng-repeat="idioma in regCtrl.idiomas" value="{{idioma.idiomaId}}">{{idioma.nombre}}</option>
						</select>
					</div>
					<div class="form-group">
						<label>Nivel de Escritura:</label>
						<select id="sel-i-nivel-escritura" data-ng-model="regCtrl.idioma.nivelEscrituraId" class="form-control">
							<option data-ng-repeat="nivel in regCtrl.niveles" value="{{nivel.nivelId}}">{{nivel.descripcion}}</option>
						</select>
					</div>
					<div class="form-group">
						<label>Nivel Hablado:</label>
						<select id="sel-i-nivel-hablado" data-ng-model="regCtrl.idioma.nivelHabladoId" class="form-control">
							<option data-ng-repeat="nivel in regCtrl.niveles" value="{{nivel.nivelId}}">{{nivel.descripcion}}</option>
						</select>
					</div>
					<div class="form-group">
						<label>Nivel Lectura:</label>
						<select id="sel-i-nivel-lectura" data-ng-model="regCtrl.idioma.nivelLecturaId" class="form-control">
							<option data-ng-repeat="nivel in regCtrl.niveles" value="{{nivel.nivelId}}">{{nivel.descripcion}}</option>
						</select>
					</div>
					<div class="form-group">
						<label><i class="fa fa-paperclip"></i> Documento Sustentatorio: (opcional)</label>
						<input id="txt-i-documento-sustentatorio" class="form-control" type="file" />
						<a id="txt-i-documento-sustentatorio-ok" href="#" class="btn btn-info btn-xs pull-right bmd-floating bmd-ripple" style="display:none;"> <i class="fa fa-check"></i> </a>
					</div>
				</div>

				<div class="modal-footer">
					<button class="btn btn-info bmd-floating bmd-ripple" data-ng-click="regCtrl.guardarIdioma()">
						<i class="glyphicon glyphicon-save"></i>
						Guardar
					</button>
				</div>
			</div>
		</div>
	</div><!--/ Modal idiomas -->

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
						<input id="txt-el-empresa" data-ng-model="regCtrl.experiencia.empresa" class="form-control mayuscula" type="text" />
					</div>
					<div class="form-group">
						<label>Cargo Desempeñado:</label>
						<input id="txt-el-cargo" data-ng-model="regCtrl.experiencia.cargo" class="form-control" />
					</div>
					<div class="form-group">
						<label>Fecha de Inicio:</label>
						<input id="dat-el-fecha-inicio" data-ng-model="regCtrl.experiencia.fechaInicio" class="form-control fecha" type="text" data-provide="datepicker" data-date-format="dd/mm/yyyy" data-date-language="es" placeholder="dd/mm/aaaa" />
					</div>
					<div class="form-group">
						<label>Fecha de Cese:</label>
						<input id="dat-el-fecha-fin" data-ng-model="regCtrl.experiencia.fechaFin" class="form-control fecha" type="text" data-provide="datepicker" data-date-format="dd/mm/yyyy" data-date-language="es" placeholder="dd/mm/aaaa" />
					</div>
					<div class="form-group">
						<label>Descripción de Funciones:</label>
						<textarea id="txt-el-descripcion" data-ng-model="regCtrl.experiencia.descripcion" class="form-control mayuscula"></textarea>
					</div>
					<div class="row">
						<div class="col-md-6">
							<div class="form-group">
								<label>Área:</label>
								<select id="sel-el-area" data-ng-model="regCtrl.experiencia.areaId" class="form-control select2">
									<option data-ng-repeat="area in regCtrl.areas" value="{{area.areaId}}">{{area.nombre}}</option>								
								</select>
							</div>
						</div>
						<div class="col-md-6" data-ng-show="regCtrl.experiencia.areaId=='20'">
							<div class="form-group">
								<label>Especifique: </label>
								<input type="text" class="form-control mayuscula" data-ng-model="regCtrl.experiencia.area" />
							</div>
						</div>
					</div>
							
					<div class="form-group">
						<label>Rubro:</label>
						<select id="sel-el-rubro" data-ng-model="regCtrl.experiencia.rubroId" class="form-control select2">
							<option data-ng-repeat="rubro in regCtrl.rubros" value="{{rubro.rubroId}}">{{rubro.descripcion}}</option>
						</select>
					</div>
					<div class="form-group">
						<label>Sector:</label>
						<select id="sel-el-sector" data-ng-model="regCtrl.experiencia.sectorId" class="form-control select2">
							<option data-ng-repeat="sector in regCtrl.sectores" value="{{sector.sectorId}}">{{sector.nombre}}</option>
						</select>
					</div>
					
					<div class="form-group">
						<label>País:</label>
						<select id="sel-el-pais" data-ng-model="regCtrl.experiencia.paisId" class="form-control pais">
							<option data-ng-repeat="pais in regCtrl.paises" value="{{pais.paisId}}">{{pais.nombre}}</option>
						</select>
					</div>
					<div class="form-group">
						<label><i class="fa fa-paperclip"></i> Documento Sustentatorio:</label>
						<input id="txt-el-documento-sustentatorio" class="form-control" data-ng-model="regCtrl.experiencia.documento" type="file" />
						<a id="txt-el-documento-sustentatorio-ok" href="#" class="btn btn-info btn-xs pull-right bmd-floating bmd-ripple" style="display:none;"> <i class="fa fa-check"></i> </a>
					</div>
				</div>
				<div class="modal-footer">
					<button class="btn btn-info bmd-floating bmd-ripple" data-ng-click="regCtrl.guardarExperienciaLaboral()">
						<i class="glyphicon glyphicon-save"></i>
						Guardar
					</button>
				</div>
			</div>
		</div>
	</div><!--/ Modal Experiencia Laboral -->
	
	<!-- Modal  -->
	<div class="modal fade modal-confirmacion" role="dialog" >
		<div class="modal-dialog modal-md">
			<div class="modal-content">
				<div class="modal-header bmd-text-blue-50 bmd-bg-info">
					<button type="button" class="close" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
					<h4 class="modal-title ">Declaración Jurada</h4>
				</div>
				<div class="modal-body">
					 <p> Declaro bajo juramento  que la información que he proporcionado es veraz y asumo las responsabilidades y consecuencias legales que ello produzca. </p>
				</div>
				<div class="modal-footer">
					<button class="btn btn-info bmd-ripple bmd-floating" data-ng-click="regCtrl.confirmarRegistro()"><i class="fa fa-check"></i> Aceptar</button>
					<button class="btn bmd-text-red-50 bmd-bg-red-300 bmd-ripple bmd-floating" data-dismiss="modal" aria-label="Close" ><i class="fa fa-times"></i> Cancelar</button>
				</div>
			</div>
		</div>
	</div><!--/ Modal  -->
</div>