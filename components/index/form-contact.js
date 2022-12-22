Vue.component('form-contact',{
    template: /*html*/`
        <section id="height-auto" class="pt-5 pb-5">
            <div class="container">
                <div class="row align-items-center p-green-light">
                    <div class="col-12 col-md-12 text-center text-md-center">
                        <svg width="4em" height="4em" viewBox="0 0 16 16" class="bi bi-person-lines-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm7 1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm2 9a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z"/>
                        </svg>  
                        <h1 class="text-comfortaa">{{ title }}</h1>
                        <h5 class="text-raleway text-muted">{{ textDesc }}</h5>
                    </div>
                </div>
                <form id="form-contact">
                    <div class="row justify-content-center pt-5 pb-3">
                        <div class="col-12 col-md-4 text-left text-md-left">
                            <div class="form-group text-raleway text-muted">
                                <label for="name">Nombre*</label>
                                <input name="nombre" type="text" class="form-control" required>
                            </div>
                            <div class="form-group text-raleway text-muted">
                                <label for="last-name">Apellidos*</label>
                                <input name="apellidos" type="text" class="form-control" required>
                            </div>
                            <div class="form-group text-raleway text-muted">
                                <label for="documento">N° Documento (sin puntos)*</label>
                                <input name="identificacion" type="number" class="form-control" required>
                            </div>
                        </div>
                        <div class="col-12 col-md-4 text-left text-md-left">
                            <div class="form-group text-raleway text-muted">
                                <label for="phone">Numero telefono*</label>
                                <input name="telefono" type="number" class="form-control" required>
                            </div>                            
                            <div class="form-group text-raleway text-muted">
                                <label for="depto">Departamento*</label>
                                <input name="departamento" type="text" class="form-control" required>
                            </div>
                            <div class="form-group text-raleway text-muted">
                                <label for="city">Ciudad*</label>
                                <input name="ciudad" type="text" class="form-control" required>
                            </div>
                        </div>
                        <div class="col-12 col-md-4 text-left text-md-left">
                            <div class="form-group text-raleway text-muted">
                                <label for="email">Email*</label>
                                <input name="correo" type="email" class="form-control" required>
                            </div>                           
                            <div class="form-group text-raleway text-muted">
                                <label for="address">Dirección de Contacto*</label>
                                <input name="direccion" type="text" class="form-control" required>
                            </div>
                            <br>
                            <div class="input-group mb-3 mt-2">
                                <div class="input-group-prepend">
                                    <label class="input-group-text" for="inputGroupSelect01">Asunto</label>
                                </div>
                                <select name="asunto" class="custom-select" id="inputGroupSelect01">
                                    <option selected>Seleccionar...</option>
                                    <option value="1">Contáctenos</option>
                                    <option value="2">Quejas y Reclamos</option>
                                    <option value="3">Felicitaciones</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="row justify-content-center">
                        <div class="col-12 col-md-12 text-left text-md-left">
                            <div class="form-group text-raleway text-muted">
                                <label for="exampleFormControlTextarea1">Mensaje*</label>
                                <textarea name="mensaje" class="form-control" id="exampleFormControlTextarea1" rows="3" requireds></textarea>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <!-- UPLOAD FILES -->
                            <!-- <div class="input-group mb-3">
                                <div class="form-group text-muted">
                                    <label for="files">Documentos Adjuntos (Los archivos deben ser menores que 2 MB.)</label>
                                    <input name="adjunto" type="file" class="form-control-file text-muted" id="files">
                                </div>
                            </div> -->
                            <!-- ACEPTAR TERMINOS Y CONDICIONES -->
                            <input type="checkbox" class="" id="exampleCheck1" required>
                            <label class="form-check-label" for="exampleCheck1">Aceptar los terminos *</label>
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
                            <!-- captcha -->
                            <div class="mb-3">
                                <div class="g-recaptcha" 
                                data-sitekey="6LdqFuQZAAAAAKANyXhnG9hr-UlGyEqBkhfACwx-"
                                data-callback="callbak"></div>
                            </div>
                            <!-- btn  -->
                            <input id="btn-send-data" class="btn btn-green-light mb-2" type="submit" value="Enviar mensaje"
                                v-on:click="sendContactInformation()">
                        </div>
                    </div>
                </form>
            </div>
        </section>
    `,
    methods:{        
        sendContactInformation: function(){
                var formContact = document.getElementById('form-contact');
                formContact.addEventListener('submit',function(e){
                    e.preventDefault();
                    fetch('php/enviarDatosContacto.php',{
                        method: 'POST',
                        body: data = new FormData(formContact)
                    })
                    .then(res => res.json())
                    .then(data => {
                        if(data.send == true ){
                            swal("Mensaje enviado!", "Se ha enviado correctamente su mensaje", "success");
                        }
                    })
            });
        }
    },
    data(){
        return{
            title: 'Contáctanos',
            textDesc: 'Líneas de Atención Al Cliente: (8) 668 52 86 - 018000 915286',
            asistance:{
                asistance_1: 'Marca lider en Servicios funerarios',
                asistance_2: '+ de 1.382 de profesionales',
                asistance_3: '+ de 261 salas de velación propias',
                asistance_4: '+ de 650 salas en convenio'
            },
            btnAsistance: 'Deseo saber mas',
            nombre:'',
            apellido: '',
        }
    },
})