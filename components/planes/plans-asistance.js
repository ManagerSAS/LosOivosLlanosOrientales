Vue.component('plans-asistance',{
    template: /*html*/`
        <section class="pt-5 pb-5">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-md-12 p-5 text-center">
                        <img src="images/MasVidaParaTi.png" alt="" width="150px">
                        <hr class="hr-sm hr-border-green-light">
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-12 col-md-10">
                        <h3 class="text-comfortaa text-muted text-left text-md-left"> Asistencias:</h3>
                        <p class="text-muted text-raleway">
                            Adquiere grandes beneficios en tu plan de previsión exequial, ven y Conoce el complemento ideal para la protección y tranquilidad en los momentos más importantes de tu vida y la de tu familia.
                        </p>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-12 col-md-3 p-3 m-2">
                        <div class="text-center text-red">
                            <i class="fa fa-stethoscope fa-4x"></i>
                            <h3 class="text-comfortaa">Asistencia <br> Médica</h3>
                        </div>
                        <p class="text-raleway text-muted text-left text-md-left">    
                            - Medíco o enfermera a domicilio en caso de accidente. <br>
                            - Medicamentos derivados de la atención médica de urgencias. <br>
                            - Envío a domicilio de exámenes derivados de la atención de urgencias. <br>
                            - Orientación telefónica médica. <br>
                            - Coordinación telefónica de citas médicas.
                        </p>
                    </div>
                    <div class="col-12 col-md-3 p-3 m-2">
                        <div class="text-center text-green-light">
                            <i class="fa fa-user-o fa-4x"></i>
                            <h3 class="text-comfortaa">Asistencia <br> Personal</h3>
                        </div>
                        <p class="text-raleway text-muted text-left text-md-left">
                            - Conductor elegido. <br>
                            - Auxilio de transporte desde y hacia el aeropuerto. <br>
                            - Mecánico a domicilio para motocicletas. <br>
                            - Acompañante para diligencias personales. <br>
                            - Coordinación para compras a domicilio.
                        </p>
                    </div>
                    <div class="col-12 col-md-3 p-3 m-2">
                        <div class="text-center text-orange">
                            <i class="fa fa-paw fa-4x"></i>
                            <h3 class="text-comfortaa">Asistencia para Mascota</h3>
                        </div>
                        <p class="text-raleway text-muted text-left text-md-left">
                            - Consulta médica veterinaria a domicilio. <br>
                            - Orientación médica veterinaria telefónica. <br>
                            - Servicio de eutanasia por enfermedad o accidente grave. <br>
                            - Servicio de incineración de la mascota fallecida.  <br>
                            - Primera vacuna de la mascota.
                        </p>
                    </div>
                </div>
                <div class="row justify-content-center pt-4">
                    <div class="col-12 col-md-3 p-3 m-2">
                        <div class="center-object">
                            <div class="text-center text-orange-light">
                                <i class="fa fa-blind fa-4x"></i>
                                <h3 class="text-comfortaa">Asistencia <br> Tercera Edad</h3>
                            </div>
                        </div>
                        <p class="text-raleway text-muted text-left text-md-left">    
                            - Coordinación y acompañante para citas médicas. <br>
                            - Recordatorio de fechas especiales. <br>
                            - Envío de exámenes médicos. <br>
                            - Lavandería a domicilio. <br>
                            - Aseo general del hogar. <br>
                            - Coordinación para compras a domicilio. <br>
                            - Paseo de mascotas.
                        </p>
                    </div>
                    <div class="col-12 col-md-3 p-3 m-2">
                        <div class="text-center text-orange">
                            <i class="fa fa-book fa-4x"></i>
                            <h3 class="text-comfortaa">Asistencia <br> Educativa</h3>
                        </div>
                        <p class="text-raleway text-muted text-left text-md-left">
                            - Asesorías educativas telefónicas. <br>
                            - Transporte escolar por accidente o enfermedad. <br>
                            - Referencia para eventos infantiles . <br>
                            - Información para matriculas escolares. <br>
                            - Referencias de bibliotecas nacionales.
                        </p>
                    </div>
                    <div class=" col-12 col-md-3 p-3 m-2">
                        <div class="text-center text-green-apple-light">
                            <i class="fa fa-phone fa-4x"></i>
                            <h3 class="text-comfortaa">Asistencia <br> Telefónica</h3>
                        </div>
                        <p class="text-raleway text-muted text-left text-md-left">
                            - Trasmisión de mensajes urgentes. <br>
                            - Conexión con números de emergencia. <br>
                            - Información cultural. <br>
                            - Referencias médicasa a nivel nacional. <br>
                            - Información sobre el estado de las vías.
                        </p>
                    </div>
                </div>

                <!-- SEGUROS DE VIDA -->
                <div class="rounded p-3" style="background-color: #f1f1f133;">
                    <div class="row p-4 m-3 align-items-center">
                        <div class="col-12 col-md-4 text-center">
                            <img src="images/logoSolidaria.png" width="250px">
                        </div>
                        <div class="col-12 col-md-8">
                            <h3 class="text-comfortaa text-muted text-left text-md-left"> Seguros de Vida:</h3>
                            <p class="text-muted text-raleway">
                                Con el respaldo de Aseguradora Solidaria de Colombia podrás adquirir una gran variedad de seguros de vida para que continues protegiendo a tu familia.
                            </p>
                            <button class="btn text-green-olivo" type="button" data-toggle="collapse" data-target="#segurosDeVida" aria-expanded="false" aria-controls="segurosDeVida">Seguros <i class="fa fa-angle-down"></i></button>
                        </div>
                    </div>
                    <div class="collapse multi-collapse" id="segurosDeVida">
                        <div class="row">
                            <div class="col-12 col-md-3">
                                <div class="text-left text-green-light">
                                    <h5 class="text-comfortaa">SOLICANASTA</h5>
                                </div>
                                <p class="text-raleway text-muted">
                                    Protégete y cuida el bienestar de tu familia.
                                </p>
                            </div>
                            <div class="col-12 col-md-3">
                                <div class="text-left text-green-light">
                                    <h5 class="text-comfortaa">SOLICANASTA FAMILIAR</h5>
                                </div>
                                <p class="text-raleway text-muted">
                                    Amplía la protección a toda tu familia según tu estado civil.
                                </p>
                            </div>
                            <div class="col-12 col-md-3">
                                <div class="text-left text-green-light">
                                    <h5 class="text-comfortaa">SOLIENVIDA S.O.S</h5>
                                </div>
                                <p class="text-raleway text-muted">
                                    Tu seguro de vida, te brinda asistencias para disfrutar en vida.
                                </p>
                            </div>
                            <div class="col-12 col-md-3">
                                <div class="text-left text-green-light">
                                    <h5 class="text-comfortaa">SOLIHOGAR SEGURO</h5>
                                </div>
                                <p class="text-raleway text-muted">
                                    Ahora con tu  plan de previsión puedes proteger los contenidos de tu hogar.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="row m-4">
                    <div class="col-md-12 text-center">
                        <a id="app-whatsapp" class="btn btn-green-light" target="_blanck" href="https://api.whatsapp.com/send?phone=+573115554404&amp;text=Hola! deseo adquirir mas información de las asistencias y seguros de vida, me pueden apoyar?">
                            Solicitar mas Información
                        </a>
                    </div>
                </div>
            </div>
        </section>
    `
})