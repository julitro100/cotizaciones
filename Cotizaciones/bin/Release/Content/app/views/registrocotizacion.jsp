<div class="row" data-ng-controller="RegistroController as regCtrl">
	<div class="col-md-12">
		<div class="panel panel-primary">
			<div class="panel-heading">
				<h4>COTIZACIÓN</h4>
			</div>
			<div class="panel-body">
				<div class="table-responsive">
					
					<table class="table table-striped table-hover table-bordered">
						<thead>
							<tr class="default">
								<th class="col-md-1">Nº</th>
								<th class="col-md-3">Nombre de Contacto</th>
				                <th class="col-md-5">Detalle</th>
				                <th class="col-md-2"></th>
							</tr>
						</thead>
						<tbody>
							<tr data-ng-repeat="pedido in regCtrl.pedidos" data-ng-class="{'success': pedido.Atendido}">
								<td>{{$index+1}}</td>
								<td>{{pedido.Nombre}}</td>
				                <td>{{pedido.Detalle}}</td>
								<td>
									<button data-ng-hide="pedido.Atendido" data-ng-click="regCtrl.responder(pedido)" class="btn btn-default bmd-ripple">
										<i class="fa fa-pencil-square-o"></i>
										Responder Pedido
									</button>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
			<div class="panel-footer">
			</div>
		</div>				
	</div>

	<!-- Modal  -->
	<div class="modal modal-info fade modal-responder" role="dialog">
		<div class="modal-dialog modal-lg bmd-modal-dialog">
			<div class="modal-content">
				<div class="modal-header bmd-bg-info bmd-text-blue-50">
					<button type="button" class="close" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
					<h4 class="modal-title">Presentación de la Cotización</h4>
				</div>

				<div id="form-cotizacion" class="modal-body">
					<div class="panel ">
						<div class="panel-heading">
							<h4>{{regCtrl.pedido.Detalle}}</h4>
						</div>
						<div class="panel-body">
							<div class="table-reponsive">
								<table id="tab-cotizacion" border-style="outset" border-width="1px" class="table table-striped table-hover table-bordered">
									<thead>
										<tr>
											<th class="col-md-5">
							                    <div class="form-group">
							                        <label>Servicio / Producto:</label>
							                        <select id="sel-producto" class="form-control" data-ng-model="regCtrl.producto.productoId" data-ng-change="regCtrl.productoSelected()">
											            <option data-ng-repeat="producto in regCtrl.productos" value="{{producto.ProductoId}}" data-precio="{{producto.Precio}}">{{producto.Descripcion}}</option>
										            </select>
							                    </div>
							                </th>
							            	<th class="col-md-2">
						                      	<div class="form-group">
							                        <label>Cantidad</label>
							                        <input id="txt-cantidad" tipo="number" class="form-control" data-ng-model="regCtrl.producto.cantidad" data-ng-init="regCtrl.producto.cantidad = 1" />
						                      	</div>
							                </th>
					                  		<th class="col-md-3">
							                    <div class="form-group">
							                      	<label>Precio</label>
							                      	<input id="txt-precio" tipo="number" class="form-control" data-ng-model="regCtrl.producto.precio" />
							                    </div>
				                  			</th>
					                  		<th class="col-md-2">
						                    	<div class="form-group">
						                    		<label></label>
						                      		<button class="btn btn-default bmd-floating bmd-ripple" data-ng-click="regCtrl.agregar()">
						                        		<i class="fa fa-plus"></i>
						                        		Agregar
						                      		</button>
						                    	</div>
					                  		</th>
					                  	</tr>
					                </thead>
				            	</table>
				            </div>

							<div class="table-reponsive">
								<table id="cotizacion" border-style="outset" border-width="1px" class="table table-striped table-hover table-bordered">
									<thead>
										<tr>
											<th class="col-md-1">Nº</th>
											<th class="col-md-5">Descripción</th>
											<th class="col-md-1">Cantidad</th>
											<th class="col-md-3">Precio</th>
											<th class="col-md-4">Subtotal</th>									
										</tr>
									</thead>
									<tbody>
										<tr data-ng-repeat="producto in regCtrl.detalle">
											<td>{{$index +1}}</td>
											<td>{{producto.productoId | tipo : regCtrl.productos : "ProductoId" : "Descripcion" }}</td>
											<td>{{producto.cantidad}}</td>
											<td>{{producto.precio | currency : "$" }}</td>
											<td>{{producto.subtotal | currency : "$"  }}</td>							
										</tr>
									</tbody>
					                <tfooter>
					                    <tr>
					                      	<td></td>
					                      	<td></td>
					                      	<td></td>
					                      	<th>Total:</th>
					                      	<th>{{regCtrl.detalle | total : "subtotal" | currency : "$" }}</th>
					                    </tr>
					                </tfooter>
								</table>
							</div>

							<div class="table-responsive">
								<table class="table table-condensed table-striped table-bordered">
									<thead>
										<tr>
											<th class="col-md-6">
												<h4>Condiciones de Venta:</h4>
						                        <label>
						                        	Precio: En dolares americanos y no incluye el I.G.V.<br/>
						                        	Forma de pago: 50% de adelanto, saldo contra entrega.<br/>
						                        	Validez de la oferta: 07 días o hasta agotar stock.
						                        </label>
						                    </th>
										</tr>
									</thead>
								</table>
							</div>				
						</div>
						<div class="modal-footer">
							<button class="btn btn-info bmd-ripple bmd-floating" data-ng-click="regCtrl.registrar()">
								<i class="fa fa-paper-plane"></i> 
						 		Enviar Cotización
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
