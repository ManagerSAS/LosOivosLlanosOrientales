Vue.component('continuidad-plan-empresarial',{
    template: /*html*/`
        <section id="height-auto" class="pt-5 pb-5 pt-md-13">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-md-12">
                        <h2 class="text-comfortaa text-muted">
                            NOVEDADES DE AFILIACIONES EMPRESARIALES
                        </h2>
                    </div>
                </div><br><br>
            
                <form id="form-continuidad-empresarial" @submit.prevent="sendResponse">
                    <div class="row">
                        <div class="col-12 col-md-12">
                            <h4 class="text-comfortaa text-muted">
                                Datos de la empresa:
                            </h4>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12 col-md-6 text-left text-md-left">
                            <div class="form-group text-raleway text-muted">
                                <label for="">Correo electronico: <span style="color:red">*</span></label>
                                <input v-model="email" name="email" type="text" class="form-control" required>
                            </div>
                        </div>
                        <div class="col-12 col-md-6 text-left text-md-left">
                            <div class="form-group text-raleway text-muted">
                                <label for="empresa">Nombre empresa: <span style="color:red">*</span></label>
                                <input v-model="empresa" name="empresa" type="text" class="form-control" required>
                            </div>
                        </div>
                        
                    </div>
                    <div class="row mb-5">
                        <div class="col-12 col-md-4 text-left text-md-left">
                            <div class="form-group text-raleway text-muted">
                                <label for="funcionario">Funcionario que radica:<span style="color:red">*</span></label>
                                <input v-model="funcionario" name="funcionario" type="text" class="form-control" required>
                            </div>
                        </div>
                        <div class="col-12 col-md-4 text-left text-md-left">
                            <div class="form-group text-raleway text-muted">
                                <label for="centro">Centro de trabajo (opcional):</label>
                                <input v-model="centro" name="centro" type="text" class="form-control">
                            </div>
                        </div>
                        <div class="col-12 col-md-4 text-left text-md-left">
                            <div class="form-group text-raleway text-muted">
                                <label for="celularEmpresa">Numero de celular de la empresa: <span style="color:red">*</span></label>
                                <input v-model="celularEmpresa" name="celularEmpresa" type="text" class="form-control" required>
                            </div>
                        </div>
                        <div class="row">
                        <div class="col-md-12">
                            <p class="ml-3 text-raleway text-left text-md-left text-muted">
                                Estimado funcionario afiliado podrá inscribir todas las novedades que requiera, cada vez que registre una el sistema refrescará los campos de 
                                DATOS DE LA NOVEDAD y podrá inscribir otra sin tener que volver a colocar los DATOS DE LA EMPRESA cualquier inquietud comunicarse al siguiente número: XXX XXX XXXX                                
                            </p>
                        </div>
                    </div>
                    </div>

                    <div class="row">
                        <div class="col-12 col-md-12">
                            <h4 class="text-comfortaa text-muted">
                                Datos de la novedad:
                            </h4>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-12 col-md-4 text-left text-md-left">
                            <div class="form-group text-raleway text-muted">
                                <label for="apellido1">Primer apellido: <span style="color:red">*</span></label>
                                <input v-model="apellido1" name="apellido1" type="text" class="form-control" required>
                            </div>
                        </div>
                        <div class="col-12 col-md-4 text-left text-md-left">
                            <div class="form-group text-raleway text-muted">
                                <label for="apellido2">Segundo apellido: <span style="color:red">*</span></label>
                                <input v-model="apellido2" name="apellido2" type="text" class="form-control" required>
                            </div>
                        </div>
                        <div class="col-12 col-md-4 text-left text-md-left">
                            <div class="form-group text-raleway text-muted">
                                <label for="nombre">Nombres: <span style="color:red">*</span></label>
                                <input v-model="nombre" name="nombre" type="text" class="form-control" required>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-12 col-md-4 text-left text-md-left">
                            <div class="form-group text-raleway text-muted">
                                <label for="tipoDocumento">Tipo de documento: <span style="color:red">*</span></label>
                                <select v-model="tipoDocumento" name="tipoDocumento" class="form-control" required>
                                    <option value="C.C">C.C</option>
                                    <option value="C.E">C.E</option>
                                    <option value="P.E.P">P.E.P</option>
                                </select>
                            </div>    
                        </div>
                        <div class="col-12 col-md-4 text-left text-md-left">
                            <div class="form-group text-raleway text-muted">
                                <label for="documento">N° Documento: <span style="color:red">*</span></label>
                                <input v-model="documento" name="documento" type="text" class="form-control" required>
                            </div> 
                        </div>
                        <div class="col-12 col-md-4 text-left text-md-left">
                            <div class="form-group text-raleway text-muted">
                                <label for="fechaNacimiento">Fecha nacimiento: <span style="color:red">*</span></label>
                                <input v-model="fechaNacimiento" name="fechaNacimiento" type="date" class="form-control" required>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-12 col-md-4 text-left text-md-left">
                            <div class="form-group text-raleway text-muted">
                                <label for="edad">Edad: <span style="color:red">*</span></label>
                                <input v-model="edad" name="edad" type="number" class="form-control" required>
                            </div>
                        </div>
                        <div class="col-12 col-md-4 text-left text-md-left">
                            <div class="form-group text-raleway text-muted">
                                <label for="numeroCelular">Numero de celular: <span style="color:red">*</span></label>
                                <input v-model="numeroCelular" name="numeroCelular" type="number" class="form-control" required>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-12 col-md-4 text-left text-md-left">
                            <div class="form-group text-raleway text-muted">
                                <label for="tramite">Tipo de novedad: <span style="color:red">*</span></label>
                                <select v-model="tramite" name="tramite" class="form-control" required>
                                    <option value="Ingreso">Ingreso</option>
                                    <option value="Retiro">Retiro</option>
                                    <option value="Actualización">Actualización</option>
                                    <option value="Novedad">Novedad</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-12 col-md-4 text-left text-md-left">
                            <div class="form-group text-raleway text-muted">
                                <label for="mes">Mes a partir de cuando aplica: <span style="color:red">*</span></label>
                                <select v-model="mes" name="mes" class="form-control" required>
                                    <option value="Enero">Enero</option>
                                    <option value="Febrero">Febrero</option>
                                    <option value="Marzo">Marzo</option>
                                    <option value="Abril">Abril</option>
                                    <option value="Mayo">Mayo</option>
                                    <option value="Junio">Junio</option>
                                    <option value="Julio">Julio</option>
                                    <option value="Agosto">Agosto</option>
                                    <option value="Septiembre">Septiembre</option>
                                    <option value="Octubre">Octubre</option>
                                    <option value="Noviembre">Noviembre</option>
                                    <option value="Diciembre">Diciembre</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-12 col-md-4 text-left text-md-left">
                            <div class="form-group text-raleway text-muted">
                                <label for="seguro">Aplica seguro de vida: <span style="color:red">*</span></label>
                                <select v-model="seguro" name="seguro" class="form-control" required>
                                    <option value="Si">Si</option>
                                    <option value="No">No</option>
                                </select>
                            </div>
                        </div>
                    </div>                                                                    
                                        
                    <div class="row">
                        <div class="col-md-12">
                            <input v-model="terminos" type="checkbox" class="" id="terminos" name="terminos" required>
                            <label class="form-check-label" for="terminos">Aceptar los terminos</label><br><br>
                            <p class="text-raleway text-left text-md-left text-muted">
                                De acuerdo con la Ley Estatutaria 1581 de 2.012 de Protección de Datos y con el Decreto 1377 de 2.013, le informamos 
                                que sus datos consignados en el presente formulario serán incorporados en una base de datos responsabilidad de SERFUNLLANOS
                                LOS OLIVOS, siendo tratados con la finalidad de: Fines históricos, científicos o estadísticos, Gestión de estadísticas internas,
                                Gestión administrativa, Gestión de clientes, Encuestas de opinión. De igual modo, se le informa que la base de datos en la que
                                se encuentran sus datos personales es tratada cumpliendo con las medidas de seguridad definidas en la política de tratamiento
                                desarrollada por SERFUNLLANOS LOS OLIVOS a la cual se puede tener acceso a través de la página web: villavicencio.losolivos.co
                            </p>
                            <button type="submit" class="btn btn-green-light mb-2">Enviar respuesta</button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    `,
    data: () => ({
        email: '',
        empresa: '',
        funcionario: '',
        centro: '',
        celularEmpresa: '',

        apellido1: '',
        apellido2: '',
        nombre: '',
        tipoDocumento: '',
        documento: '',
        fechaNacimiento: '',
        edad: '',
        numeroCelular: '',
        tramite: '',
        mes:'',
        seguro: '',
        terminos: ''


    }),
    methods:{
        
        sendResponse(){
            var data = {
                email: this.email,
                empresa: this.empresa,
                funcionario: this.funcionario,
                centro: this.centro,
                celularEmpresa: this.celularEmpresa,

                apellido1: this.apellido1,
                apellido2: this.apellido2,
                nombre: this.nombre,
                tipoDocumento: this.tipoDocumento,
                documento: this.documento,
                fechaNacimiento: this.fechaNacimiento,
                edad: this.edad,
                numeroCelular: this.numeroCelular,
                tramite: this.tramite,
                mes:this.mes,
                seguro: this.seguro,
                terminos: this.terminos
            }

            $.ajax({
                method: 'POST',
                url: 'php/enviarDatosContinuidadPlanEmpresarial.php',
                data: data,
                dataType: 'json'
            })
            .done(data => {
                console.log(data);
            })
            .catch(err => console.log(err))
            swal("Mensaje enviado!", "Se envió correctamente tu mensaje", "success"); 
            this.apellido1 = ''
            this.apellido2 = ''
            this.nombre = ''
            this.tipoDocumento = ''
            this.documento = ''
            this.fechaNacimiento = ''
            this.edad = ''
            this.numeroCelular = ''
            this.tramite = ''
            this.mes = ''
            this.seguro = ''
            this.termino = ''

        }
    }
})