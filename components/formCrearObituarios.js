Vue.component('create-obituarios',{
    template: /*html*/`
        <section id="height-auto" class="pt-5 pb-5">
            <h2>Crear obituario</h2>              
                <form id="form-obituarios" action="php/insertarObituarios" method="POST">
                    <div class="row">
                        <div class="col-12 col-md-12 text-raleway text-muted">
                            <label for="inputState">Ciudad donde se visualizará el obituario</label>
                            <select name="visualizar" id="inputState" class="form-control" required>
                                <option value="villavicencio">Villavicencio</option>
                                <option value="acacias">Acacias</option>
                                <option value="granada">Granada</option>
                                <option value="yopal">Yopal</option>
                                <option value="san jose">San José</option>
                                <option value="no-visualizar">No visualizar</option>
                            </select>
                        </div>
                    </div> 
                    <!-- ======================================================== -->
                    <!-- ================ DATOS GENERALES ======================= -->
                    <!-- ======================================================== -->
                    <div class="row pt-4 pb-4">
                        <div class="col-12 col-md-12">
                            <h4 class="text-muted text-comfortaa bg-grey-light p-2" style="margin-bottom:0px;"> Datos generales
                                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-caret-down float-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M3.204 5L8 10.481 12.796 5H3.204zm-.753.659l4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z"/>
                                </svg>
                            </h4>                            
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12 col-md-3 text-left text-md-left">
                            <div class="form-group text-raleway text-muted">
                                <label for="">Documento*</label>
                                <input name="documento" type="text" class="form-control" autocomplete="off" required>
                            </div>
                        </div>
                        <div class="col-12 col-md-3 text-left text-md-left">
                            <div class="form-group text-raleway text-muted">
                                <label for="">Nombre 1*</label>
                                <input name="nombre1" type="text" class="form-control" autocomplete="off" required>
                            </div>                            
                        </div>
                        <div class="col-12 col-md-3 text-left text-md-left">
                            <div class="form-group text-raleway text-muted">
                                <label for="">Nombre 2</label>
                                <input name="nombre2" type="text" class="form-control" autocomplete="off">
                            </div>                            
                        </div>
                        <div class="col-12 col-md-3 text-left text-md-left">
                            <div class="form-group text-raleway text-muted">
                                <label for="">Apellido 1*</label>
                                <input name="apellido1" type="text" class="form-control" autocomplete="off" required>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12 col-md-3 text-left text-md-left">
                            <div class="form-group text-raleway text-muted">
                                <label for="">Apellido 2</label>
                                <input name="apellido2" type="text" class="form-control" autocomplete="off">
                            </div>                     
                        </div>
                        <div class="col-12 col-md-3 text-left text-md-left">                            
                            <div class="form-group text-raleway text-muted">
                                <label for="">Fecha Nacimiento *</label>
                                <input name="fechaNacimiento" type="date" class="form-control" autocomplete="off" required>
                            </div>                                                 
                        </div>
                        <div class="col-12 col-md-3 text-left text-md-left">
                            <div class="form-group text-raleway text-muted">
                                <label for="">Fecha Fallecimiento *</label>
                                <input name="fechaFallecimiento" type="date" class="form-control" autocomplete="off" required>
                            </div>
                        </div>                    
                        <div class="col-12 col-md-3 text-left text-md-left">                            
                            <div class="form-group text-raleway text-muted">
                                <label for="">Lugar Fallecimiento *</label>
                                <input name="lugarFallecimiento" type="text" class="form-control" autocomplete="off" required>
                            </div>                  
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12 col-md-3 text-left text-md-left">
                            <div class="form-group text-raleway text-muted">
                                <label for="">Notaria</label>
                                <input name="notaria" type="text" class="form-control" autocomplete="off">
                            </div>                     
                        </div>
                    </div>
                    <!-- ======================================================== -->
                    <!-- ===================== EXEQUIAS ========================= -->
                    <!-- ======================================================== -->
                    <div class="row pt-4 pb-4">
                        <div class="col-12 col-md-12">
                            <h4 class="text-muted text-comfortaa bg-grey-light p-2" style="margin-bottom:0px;"> Exequias 
                                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-caret-down float-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M3.204 5L8 10.481 12.796 5H3.204zm-.753.659l4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z"/>
                                </svg>
                            </h4>                            
                        </div>
                    </div>
                    <div class="row pt-2">
                        <div class="col-12 col-md-3 text-left text-md-left">
                            <div class="form-group text-raleway text-muted">
                                <label for="date">Nombre sala</label>
                                <input name="salaExequias" type="text" class="form-control" autocomplete="off">
                            </div>                            
                        </div>
                        <div class="col-12 col-md-3 text-left text-md-left">
                            <div class="form-group text-raleway text-muted">
                                <label for="parent">Fecha exequias</label>
                                <input name="fechaExequias" type="date" class="form-control" autocomplete="off">
                            </div>
                        </div>                        
                        <div class="col-12 col-md-3 text-left text-md-left">
                            <div class="form-group text-raleway text-muted">
                                <label for="">Hora exequias</label>
                                <input name="horaExequias" type="time" class="form-control" autocomplete="off">
                            </div>
                        </div>
                        <div class="col-12 col-md-3 text-left text-md-left">
                            <div class="form-group text-raleway text-muted">
                                <label for="">Departamento</label>
                                <input name="departamentoExequias" type="text" class="form-control" autocomplete="off">
                            </div>
                        </div>
                        <div class="col-12 col-md-3 text-left text-md-left">
                            <div class="form-group text-raleway text-muted">
                                <label for="date">Lugar exequias (iglesia)</label>
                                <input name="lugarExequias" type="text" class="form-control" autocomplete="off">
                            </div>
                        </div>
                    </div>
                    <!-- ======================================================== -->
                    <!-- ===================== INHUMACION ========================= -->
                    <!-- ======================================================== -->
                    <div class="row pb-4">
                        <div class="col-12 col-md-12">
                            <h4 class="text-muted text-comfortaa bg-grey-light p-2" style="margin-bottom:0px;"> Inhumacion 
                                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-caret-down float-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M3.204 5L8 10.481 12.796 5H3.204zm-.753.659l4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z"/>
                                </svg>
                            </h4>                            
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12 col-md-3 text-left text-md-left">
                            <div class="form-group text-raleway text-muted">
                                <label for="parent">Destino final o cementerio</label>
                                <input name="destinoFinalCementerio" type="text" class="form-control" autocomplete="off">
                            </div>
                        </div>
                        <div class="col-12 col-md-3 text-left text-md-left">
                            <div class="form-group text-raleway text-muted">
                                <label for="date">Hora Inhumacion</label>
                                <input name="horaInhumacion" type="datetime-local" class="form-control" autocomplete="off">
                            </div>
                        </div>                    
                        <div class="col-12 col-md-3 text-left text-md-left">
                            <div class="form-group text-raleway text-muted">
                                <label for="">Ciudad</label>
                                <input name="ciudadInhumacion" type="text" class="form-control" autocomplete="off">
                            </div>
                        </div>
                        <div class="col-12 col-md-3 text-left text-md-left">
                            <div class="form-group text-raleway text-muted">
                                <label for="">Sector</label>
                                <input name="sectorInhumacion" type="text" class="form-control" autocomplete="off">
                            </div>
                        </div>
                        <div class="col-12 col-md-3 text-left text-md-left">
                            <div class="form-group text-raleway text-muted">
                                <label for="date">Ubicacion</label>
                                <input name="ubicacionInhumacion" type="text" class="form-control" autocomplete="off">
                            </div>
                        </div>
                    </div>
                    <!-- ======================================================== -->
                    <!-- ======================== OTROS ========================= -->
                    <!-- ======================================================== -->
                    <div class="row pb-4">
                        <div class="col-12 col-md-12">
                                <h4 class="text-muted text-comfortaa bg-grey-light p-2" style="margin-bottom:0px;"> Otros 
                                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-caret-down float-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M3.204 5L8 10.481 12.796 5H3.204zm-.753.659l4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z"/>
                                    </svg>
                                </h4>                            
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12 col-md-3 text-left text-md-left">
                            <div class="form-group text-raleway text-muted">
                                <label for="parent">Numero registro de defunción</label>
                                <input name="numeroRegistro" type="text" class="form-control">
                            </div>
                        </div>
                        <div class="col-12 col-md-3 text-left text-md-left">
                            <div class="form-group text-raleway text-muted">
                                <label for="">Fecha exhumación</label>
                                <input name="fechaExhumacion" type="date" class="form-control">
                            </div>  
                        </div>
                    </div>
                    <!-- ======================================================== -->
                    <!-- ======================================================== -->
                    <!-- ======================================================== -->
                    <div class="row">
                        <div class="col-md-12">
                            <button type="submit" class="btn btn-green-light mb-2">Ingresar obituario</button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    `
})