Vue.component('continuidad-plan',{
    template: /*html*/`
        <section id="height-auto" class="pt-5 pb-5 pt-md-13">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-md-12">
                        <h2 class="text-comfortaa text-muted">
                            Actualización de Datos
                        </h2>
                        <p class="text-raleway text-muted">
                            Los campos marcados con * son obligatorios. Tener en cuenta que toda la información que se consigne en este formulario, será verificada por parte de SERFUNLLANOS LOS OLIVOS, si usted recibe notificación deberá hacer ajuste a su actualización, de lo contrario no será aprobada. Cualquier inexactitud en los cambios detectados en el momento del servicio, será causal de la negación del mismo.
                        </p>
                        <h4 class="text-comfortaa text-muted bg-grey-light p-2 rounded">
                            Datos Titular
                        </h4>
                    </div>
                </div>
                <form id="form-continuidad" method="POST">
                    <div class="row justify-content-center">
                        <div class="col-12 col-md-4 text-left text-md-left">
                            <div class="form-group text-raleway text-muted">
                                <label for="tramite">Tramite*</label>
                                <select name="tramite" class="form-control" required>
                                    <option>Actualizacion de datos</option>
                                </select>
                            </div>
                            <div class="form-group text-raleway text-muted">
                                <label for="">Tipo afiliado*</label>
                                <select name="tipoAfiliado" class="form-control" required>
                                    <option>Titular</option>
                                </select>
                            </div>
                            <div class="form-group text-raleway text-muted">
                                <label for="">Tipo Documento*</label>
                                <select name="tipodocumento" class="form-control" required>
                                    <option>CC</option>
                                    <option>TI</option>
                                    <option>CE</option>
                                </select>
                            </div>
                            <div class="form-group text-raleway text-muted">
                                <label for="">N° Documento*</label>
                                <input name="documento" type="number" class="form-control" required>
                            </div>
                            <div class="form-group text-raleway text-muted">
                                <label for="">Departamento*</label>
                                <input name="departamento" type="text" class="form-control" required>
                            </div>                        
                        </div>
                        <div class="col-12 col-md-4 text-left text-md-left">
                            <div class="form-group text-raleway text-muted">
                                <label for="ciudad">Ciudad *</label>
                                <input name="ciudad" type="text" class="form-control" required>
                            </div>
                            <div class="form-group text-raleway text-muted">
                                <label for="name">Nombre</label>
                                <input name="nombre" type="text" class="form-control" required>
                            </div>
                            <div class="form-group text-raleway text-muted">
                                <label for="last-name">Apellidos *</label>
                                <input name="apellidos" type="text" class="form-control" required>
                            </div>
                            <div class="form-group text-raleway text-muted">
                                <label for="email">Correo electrónico*</label>
                                <input name="correo" type="email" class="form-control" required>
                            </div>                            
                            <div class="form-group text-raleway text-muted">
                                <label for="date">Fecha nacimiento *</label>
                                <input name="fechaNacimiento" type="date" class="form-control" required>
                            </div>
                        </div>
                        <div class="col-12 col-md-4 text-left text-md-left">
                            <div class="form-group text-raleway text-muted">
                                <label for="documento">Nombre de la empresa *</label>
                                <input name="nombreEmpresa" type="text" class="form-control" required>
                            </div>
                            <div class="form-group text-raleway text-muted">
                                <label for="address">Dirección *</label>
                                <input name="direccion" type="text" class="form-control" required>
                            </div>
                            <div class="form-group text-raleway text-muted">
                                <label for="ocupacion">Ocupación *</label>
                                <input name="ocupacion" type="text" class="form-control" required>
                            </div>
                            <div class="form-group text-raleway text-muted">
                                <label for="phone">Telefono celular *</label>
                                <input name="telefono" type="number" class="form-control" required>
                            </div>
                        </div>
                    </div>
                    <!-- ======================================================== -->
                    <!-- ================ DATOS ADICIONALES ===================== -->
                    <!-- ======================================================== -->
                    <div class="row pt-4 pb-4">
                        <div class="col-12 col-md-12">
                            <button class="btn btn-link btn-block text-left bg-grey-light" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                <h4 class="text-muted text-comfortaa" style="margin-bottom:0px;">Datos de los Beneficiarios
                                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-caret-down float-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M3.204 5L8 10.481 12.796 5H3.204zm-.753.659l4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z"/>
                                    </svg>
                                </h4>                            
                            </button>
                        </div>
                    </div>
                    <div class="collapse" id="collapseOne">
                        <div class="row">
                            <div class="col-12 col-md-3 text-left text-md-left">
                                <div class="form-group text-raleway text-muted">
                                    <label for="parent">Parentesco</label>
                                    <input name="parentescoB1" type="text" class="form-control" id="parent">
                                </div>
                            </div>
                            <div class="col-12 col-md-3 text-left text-md-left">
                                <div class="form-group text-raleway text-muted">
                                    <label for="">Nombre*</label>
                                    <input name="nombreB1" type="text" class="form-control">
                                </div>
                            </div>
                            <div class="col-12 col-md-3 text-left text-md-left">
                                <div class="form-group text-raleway text-muted">
                                    <label for="">Apellidos</label>
                                    <input name="apellidoB1"type="text" class="form-control">
                                </div>
                            </div>
                            <div class="col-12 col-md-3 text-left text-md-left">
                                <div class="form-group text-raleway text-muted">
                                    <label for="date">Fecha nacimiento*</label>
                                    <input name="fechaNacimientoB1" type="date" class="form-control" id="date" aria-describedby="date">
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12 col-md-3 text-left text-md-left">
                                <div class="form-group text-raleway text-muted">
                                    <input name="parentescoB2" type="text" class="form-control" id="parent">
                                </div>
                            </div>
                            <div class="col-12 col-md-3 text-left text-md-left">
                                <div class="form-group text-raleway text-muted">
                                    <input name="nombreB2" type="text" class="form-control" id="name">
                                </div>
                            </div>
                            <div class="col-12 col-md-3 text-left text-md-left">
                                <div class="form-group text-raleway text-muted">
                                    <input name="apellidoB2" type="text" class="form-control" id="last-name" aria-describedby="city">
                                </div>
                            </div>
                            <div class="col-12 col-md-3 text-left text-md-left">
                                <div class="form-group text-raleway text-muted">
                                    <input name="fechaNacimientoB2" type="date" class="form-control" id="date" aria-describedby="date">
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12 col-md-3 text-left text-md-left">
                                <div class="form-group text-raleway text-muted">
                                    <input name="parentescoB3" type="text" class="form-control" id="parent">
                                </div>
                            </div>
                            <div class="col-12 col-md-3 text-left text-md-left">
                                <div class="form-group text-raleway text-muted">
                                    <input name="nombreB3" type="text" class="form-control" id="name">
                                </div>
                            </div>
                            <div class="col-12 col-md-3 text-left text-md-left">
                                <div class="form-group text-raleway text-muted">
                                    <input name="apellidoB3" type="text" class="form-control" id="last-name" aria-describedby="city">
                                </div>
                            </div>
                            <div class="col-12 col-md-3 text-left text-md-left">
                                <div class="form-group text-raleway text-muted">
                                    <input name="fechaNacimientoB3" type="date" class="form-control" id="date" aria-describedby="date">
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12 col-md-3 text-left text-md-left">
                                <div class="form-group text-raleway text-muted">
                                    <input name="parentescoB4" type="text" class="form-control" id="parent">
                                </div>
                            </div>
                            <div class="col-12 col-md-3 text-left text-md-left">
                                <div class="form-group text-raleway text-muted">
                                    <input name="nombreB4" type="text" class="form-control" id="name">
                                </div>
                            </div>
                            <div class="col-12 col-md-3 text-left text-md-left">
                                <div class="form-group text-raleway text-muted">
                                    <input name="apellidoB4" type="text" class="form-control" id="last-name" aria-describedby="city">
                                </div>
                            </div>
                            <div class="col-12 col-md-3 text-left text-md-left">
                                <div class="form-group text-raleway text-muted">
                                    <input name="fechaNacimientoB4" type="date" class="form-control" id="date" aria-describedby="date">
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12 col-md-3 text-left text-md-left">
                                <div class="form-group text-raleway text-muted">
                                    <input name="parentescoB5" type="text" class="form-control" id="parent">
                                </div>
                            </div>
                            <div class="col-12 col-md-3 text-left text-md-left">
                                <div class="form-group text-raleway text-muted">
                                    <input name="nombreB5" type="text" class="form-control" id="name">
                                </div>
                            </div>
                            <div class="col-12 col-md-3 text-left text-md-left">
                                <div class="form-group text-raleway text-muted">
                                    <input name="apellidoB5" type="text" class="form-control" id="last-name" aria-describedby="city">
                                </div>
                            </div>
                            <div class="col-12 col-md-3 text-left text-md-left">
                                <div class="form-group text-raleway text-muted">
                                    <input name="fechaNacimientoB5" type="date" class="form-control" id="date" aria-describedby="date">
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12 col-md-3 text-left text-md-left">
                                <div class="form-group text-raleway text-muted">
                                    <input name="parentescoB6" type="text" class="form-control" id="parent">
                                </div>
                            </div>
                            <div class="col-12 col-md-3 text-left text-md-left">
                                <div class="form-group text-raleway text-muted">
                                    <input name="nombreB6" type="text" class="form-control" id="name">
                                </div>
                            </div>
                            <div class="col-12 col-md-3 text-left text-md-left">
                                <div class="form-group text-raleway text-muted">
                                    <input name="apellidoB6" type="text" class="form-control" id="last-name" aria-describedby="city">
                                </div>
                            </div>
                            <div class="col-12 col-md-3 text-left text-md-left">
                                <div class="form-group text-raleway text-muted">
                                    <input name="fechaNacimientoB6" type="date" class="form-control" id="date" aria-describedby="date">
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12 col-md-3 text-left text-md-left">
                                <div class="form-group text-raleway text-muted">
                                    <input name="parentescoB7" type="text" class="form-control" id="parent">
                                </div>
                            </div>
                            <div class="col-12 col-md-3 text-left text-md-left">
                                <div class="form-group text-raleway text-muted">
                                    <input name="nombreB7" type="text" class="form-control" id="name">
                                </div>
                            </div>
                            <div class="col-12 col-md-3 text-left text-md-left">
                                <div class="form-group text-raleway text-muted">
                                    <input name="apellidoB7" type="text" class="form-control" id="last-name" aria-describedby="city">
                                </div>
                            </div>
                            <div class="col-12 col-md-3 text-left text-md-left">
                                <div class="form-group text-raleway text-muted">
                                    <input name="fechaNacimientoB7" type="date" class="form-control" id="date" aria-describedby="date">
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- ======================================================== -->
                    <!-- ============== RELACIONES ADICIONALES ================== -->
                    <!-- ======================================================== -->
                    <div class="row pb-4">
                        <div class="col-12 col-md-12">
                            <button class="btn btn-link btn-block text-left bg-grey-light" type="button" data-toggle="collapse" data-target="#collapseTwo   " aria-expanded="true" aria-controls="collapseTwo">
                                <h4 class="text-muted text-comfortaa" style="margin-bottom:0px;">Relación Adicionales
                                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-caret-down float-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M3.204 5L8 10.481 12.796 5H3.204zm-.753.659l4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z"/>
                                    </svg>
                                </h4>                            
                            </button>
                        </div>
                    </div>
                    <div class="collapse" id="collapseTwo">
                        <div class="row">
                            <div class="col-12 col-md-3 text-left text-md-left">
                                <div class="form-group text-raleway text-muted">
                                    <label for="parent">Parentesco</label>
                                    <input name="parentescoA1" type="text" class="form-control" id="parent">
                                </div>
                            </div>
                            <div class="col-12 col-md-3 text-left text-md-left">
                                <div class="form-group text-raleway text-muted">
                                    <label for="name">Nombre</label>
                                    <input name="nombreA1" type="text" class="form-control" id="name">
                                </div>
                            </div>
                            <div class="col-12 col-md-3 text-left text-md-left">
                                <div class="form-group text-raleway text-muted">
                                    <label for="last-name">Apellidos</label>
                                    <input name="apellidoA1" type="text" class="form-control" id="last-name" aria-describedby="city">
                                </div>
                            </div>
                            <div class="col-12 col-md-3 text-left text-md-left">
                                <div class="form-group text-raleway text-muted">
                                    <label for="date">Fecha nacimiento*</label>
                                    <input name="fechaNacimientoA1" type="date" class="form-control" id="date" aria-describedby="date">
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12 col-md-3 text-left text-md-left">
                                <div class="form-group text-raleway text-muted">
                                    <input name="parentescoA2" type="text" class="form-control" id="parent">
                                </div>
                            </div>
                            <div class="col-12 col-md-3 text-left text-md-left">
                                <div class="form-group text-raleway text-muted">
                                    <input name="nombreA2" type="text" class="form-control" id="name">
                                </div>
                            </div>
                            <div class="col-12 col-md-3 text-left text-md-left">
                                <div class="form-group text-raleway text-muted">
                                    <input name="apellidoA2" type="text" class="form-control" id="last-name" aria-describedby="city">
                                </div>
                            </div>
                            <div class="col-12 col-md-3 text-left text-md-left">
                                <div class="form-group text-raleway text-muted">
                                    <input name="fechaNacimientoA2" type="date" class="form-control" id="date" aria-describedby="date">
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12 col-md-3 text-left text-md-left">
                                <div class="form-group text-raleway text-muted">
                                    <input name="parentescoA3" type="text" class="form-control" id="parent">
                                </div>
                            </div>
                            <div class="col-12 col-md-3 text-left text-md-left">
                                <div class="form-group text-raleway text-muted">
                                    <input name="nombreA3" type="text" class="form-control" id="name">
                                </div>
                            </div>
                            <div class="col-12 col-md-3 text-left text-md-left">
                                <div class="form-group text-raleway text-muted">
                                    <input name="apellidoA3" type="text" class="form-control" id="last-name" aria-describedby="city">
                                </div>
                            </div>
                            <div class="col-12 col-md-3 text-left text-md-left">
                                <div class="form-group text-raleway text-muted">
                                    <input name="fechaNacimientoA3" type="date" class="form-control" id="date" aria-describedby="date">
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12 col-md-3 text-left text-md-left">
                                <div class="form-group text-raleway text-muted">
                                    <input name="parentescoA4" type="text" class="form-control" id="parent">
                                </div>
                            </div>
                            <div class="col-12 col-md-3 text-left text-md-left">
                                <div class="form-group text-raleway text-muted">
                                    <input name="nombreA4" type="text" class="form-control" id="name">
                                </div>
                            </div>
                            <div class="col-12 col-md-3 text-left text-md-left">
                                <div class="form-group text-raleway text-muted">
                                    <input name="apellidoA4" type="text" class="form-control" id="last-name" aria-describedby="city">
                                </div>
                            </div>
                            <div class="col-12 col-md-3 text-left text-md-left">
                                <div class="form-group text-raleway text-muted">
                                    <input name="fechaNacimientoA4" type="date" class="form-control" id="date" aria-describedby="date">
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12 col-md-3 text-left text-md-left">
                                <div class="form-group text-raleway text-muted">
                                    <input name="parentescoA5" type="text" class="form-control" id="parent">
                                </div>
                            </div>
                            <div class="col-12 col-md-3 text-left text-md-left">
                                <div class="form-group text-raleway text-muted">
                                    <input name="nombreA5" type="text" class="form-control" id="name">
                                </div>
                            </div>
                            <div class="col-12 col-md-3 text-left text-md-left">
                                <div class="form-group text-raleway text-muted">
                                    <input name="apellidoA5" type="text" class="form-control" id="last-name" aria-describedby="city">
                                </div>
                            </div>
                            <div class="col-12 col-md-3 text-left text-md-left">
                                <div class="form-group text-raleway text-muted">
                                    <input name="fechaNacimientoA5" type="date" class="form-control" id="date" aria-describedby="date">
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12 col-md-3 text-left text-md-left">
                                <div class="form-group text-raleway text-muted">
                                    <input name="parentescoA6" type="text" class="form-control" id="parent">
                                </div>
                            </div>
                            <div class="col-12 col-md-3 text-left text-md-left">
                                <div class="form-group text-raleway text-muted">
                                    <input name="nombreA6" type="text" class="form-control" id="name">
                                </div>
                            </div>
                            <div class="col-12 col-md-3 text-left text-md-left">
                                <div class="form-group text-raleway text-muted">
                                    <input name="apellidoA6" type="text" class="form-control" id="last-name" aria-describedby="city">
                                </div>
                            </div>
                            <div class="col-12 col-md-3 text-left text-md-left">
                                <div class="form-group text-raleway text-muted">
                                    <input name="fechaNacimientoA6" type="date" class="form-control" id="date" aria-describedby="date">
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12 col-md-3 text-left text-md-left">
                                <div class="form-group text-raleway text-muted">
                                    <input name="parentescoA7" type="text" class="form-control" id="parent">
                                </div>
                            </div>
                            <div class="col-12 col-md-3 text-left text-md-left">
                                <div class="form-group text-raleway text-muted">
                                    <input name="nombreA7" type="text" class="form-control" id="name">
                                </div>
                            </div>
                            <div class="col-12 col-md-3 text-left text-md-left">
                                <div class="form-group text-raleway text-muted">
                                    <input name="apellidoA7" type="text" class="form-control" id="last-name" aria-describedby="city">
                                </div>
                            </div>
                            <div class="col-12 col-md-3 text-left text-md-left">
                                <div class="form-group text-raleway text-muted">
                                    <input name="fechaNacimientoA7" type="date" class="form-control" id="date" aria-describedby="date">
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- ======================================================== -->
                    <!-- ======================================================== -->
                    <!-- ======================================================== -->
                    <div class="row justify-content-center">                        
                        <div class="col-12 col-md-12 text-left text-md-left">
                            <div class="form-group text-muted">
                                <label for="files">Documentos Adjuntos (Los archivos deben ser menores que 2 MB.)</label>
                                <input name="adjunto" type="file" class="form-control-file text-muted" id="files">
                            </div>
                        </div>
                    </div>
                    <div class="row justify-content-center">                        
                        <div class="col-12 col-md-12 text-left text-md-left">
                            <div class="form-group text-raleway text-muted">
                                <label for="exampleFormControlTextarea1">Observaciones</label>
                                <textarea name="mensaje" class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <input type="checkbox" class="" id="exampleCheck1" required>
                            <label class="form-check-label" for="exampleCheck1">Aceptar los terminos</label>
                            <p class="text-raleway text-left text-md-left text-muted">
                                De acuerdo con la Ley Estatutaria 1581 de 2.012 de Protección de Datos y el Decreto 1377 de
                                2.013, le informamos que sus datos consignados en el presente formulario serán incorporados
                                en una base de datos de responsabilidad de SERFUNLLANOS LOS OLIVOS, siendo tratados con
                                las siguientes finalidades: históricos, científicos, estadísticos, gestión administrativa, gestión de
                                clientes, encuestas de opinión, prospección comercial, venta a distancia, gestión de cobros y
                                pagos, gestión económica y contable. De igual modo, se le informa que la base de datos en la
                                que se encuentran sus datos personales es tratada cumpliendo con las medidas de seguridad
                                definidas en la política de tratamiento desarrollada por SERFUNLLANOS LOS OLIVOS a la cual se
                                puede tener acceso a través de la página web www.villavicencio.losolivos.co.
                                Usted puede ejercitar los derechos de acceso, corrección, supresión, revocación o reclamo por
                                infracción sobre sus datos, mediante escrito dirigido a SERFUNLLANOS LOS OLIVOS por correo
                                electrónico protecciondatosvillavicencio@losolivos.co, indicando en el asunto el derecho que
                                desea ejercitar, o mediante correo ordinario remitido a la dirección: Av. 40 No. 20-05/15 Barrio
                                Camoa, Villavicencio - Meta.
                            </p>
                            <button type="submit"  class="btn btn-green-light mb-2">Enviar mensaje</button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    `,
    methods:{
        sendDataForm(){
            let formContinuidad = document.getElementById('form-continuidad');
            let data = new FormData(formContinuidad);
            // @click="sendDataForm"
            // fetch('php/enviarDatosContinuidadPlan.php',{
            //     method: 'POST',
            //     body: data
            // })
            //     .then(res => res.json())
            //     .then(data => {
            //         console.log(data)
            //         if(data.send == true ){
            //             location.href = 'index.html';
            //             swal("Mensaje enviado!", "Se envió correctamente tu mensaje", "success");
            //         }else{
            //             console.log(data)
            //             swal("No se envio tu mensaje!", "Si tu mensaje no se envio correctamente puedes escribirnos al correo: contactenosvillavicencio@losolivos.co", "error");
            //         }
            //     });
        }
    }
})