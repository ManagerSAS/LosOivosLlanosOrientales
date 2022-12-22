Vue.component('plans-individual',{
    template: /*html*/`
        <section>
            <div class="container">
                <div class="row">
                    <div class="col-12 col-md-12 text-center p-5">
                        <h4 class="text-green-light">Individuales</h4>
                        <hr class="hr-sm hr-border-green-light">
                    </div>
                </div>
                <!-- ======== PLAN MASCOTA ======== -->
                <div class="row pt-5 pb-5 align-items-center">
                    <div class="col-12  col-md-6 text-center">
                        <img class="w-100" src="images/planes/Mascotas.png" alt="plan familia empresarial">
                    </div>
                    <div class="col-12 col-md-6 ">
                        <h2 class="text-center text-md-left text-orange text-comfortaa">
                        Plan Mascotas
                        </h2>
                        <p class="text-raleway text-muted text-justify">
                        Porque también hace parte de tu familia, te traemos estos beneficios para proteger a tu mascota:<br><br>
                        •	Orientación medica veterinaria virtual<br>
                        •	Consulta medica veterinaria a domicilio o en Red veterinaria<br>
                        •	Guardería para mascotas en caso de hospitalización del propietario.<br>
                        •	Baño y peluquería canina (corte de uñas, limpieza externa de oídos y de dientes)<br>
                        •	Servicio de eutanasia o incineración de la mascota. <br><br>
                        Aplican condiciones y restricciones según las carencias y condiciones del plan mascotas
                        </p><br>
                        <p class="text-center text-md-left text-raleway">
                                <a id="app-whatsapp" class="text-orange btn-ver-sala " target="_blanck" href="https://api.whatsapp.com/send?phone=+573176368888&amp;text=Hola! deseo adquirir el plan Unidos Individual, me pueden apoyar?">
                                Adquirir plan
                            </a>
                        </p>
                    </div>
                </div>
                <!-- ======== PLAN UNIDOS ======== -->
                <div class="row pt-5 pb-5 align-items-center">
                    <div class="col-12  order-md-2 col-md-6 text-center">
                        <img class="w-100" src="images/planes/planUnidosIndividual.png" alt="plan familia empresarial">
                    </div>
                    <div class="col-12 col-md-6 order-md-1">
                        <h2 class="text-center text-md-left text-orange text-comfortaa">
                            Plan Unidos
                        </h2>
                        <p class="text-raleway text-muted text-justify">
                            Diseñado para que puedas proteger a 6 integrantes de tu núcleo familiar hasta el 4to grado de consanguinidad y hasta el 2do grado de afinidad. <br><br>
                            - Afiliado principal.<br>
                            - 6 beneficiarios hasta los 70 años.
                        </p><br>
                        <p class="text-center text-md-left text-raleway">
                            <button class="btn text-orange" type="button" data-toggle="collapse" data-target="#planUnidosIndividual" aria-expanded="false" aria-controls="planUnidosIndividual">Cobertura <i class="fa fa-angle-down"></i></button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <a id="app-whatsapp" class="text-orange btn-ver-sala " target="_blanck" href="https://api.whatsapp.com/send?phone=+573176368888&amp;text=Hola! deseo adquirir el plan Unidos Individual, me pueden apoyar?">
                                Adquirir plan
                            </a>
                        </p>
                    </div>
                </div>
                <!-- ======== PLAN UNIDOS COBERTURA ======== -->
                <div class="collapse multi-collapse" id="planUnidosIndividual">
                    <div class="row">
                        <div class="col-12 col-md-3">
                            <h1 class="text-orange-light text-center text-md-center">
                                <img src="images/Desprendimiento.png" height="45px">
                            </h1>
                            <h5 class="text-orange text-comfortaa text-center text-md-center">Desprendimiento</h5>
                            <p class="text-muted text-raleway">
                                - Atención las 24 horas.<br>
                                - Arreglo estético. <br>
                                - Cofre. <br>
                                - Traslado Nacional hasta 300km.
                            </p>
                        </div>
                        <div class="col-12 col-md-3">
                            <h1 class="text-orange-light text-center text-md-center">
                                <img src="images/Acogida.png" height="45px">
                            </h1>
                            <h5 class="text-orange text-comfortaa text-center text-md-center">Acogida</h5>
                            <p class="text-muted text-raleway">
                                - Sala de velación. <br>
                                - Velación Virtual. <br>
                                - Acompañamiento musical. <br>
                                - Arreglo floral.
                            </p>
                        </div>
                        <div class="col-12 col-md-3">
                            <h1 class="text-orange-light text-center text-md-center">
                                <img src="images/Despedida.png" height="45px">
                            </h1>
                            <h5 class="text-center text-md-center text-orange text-comfortaa">Despedida</h5>
                            <p class="text-muted text-raleway">
                                - Cinta membretada.<br>
                                - Transporte para acompañantes.<br>
                                - Carroza fúnebre.<br>
                                - Cremación o inhumación por 4 años con los convenios que tenga la red nacional Los Olivos.
                            </p>
                        </div>
                        <div class="col-12 col-md-3">
                            <h1 class="text-orange-light text-center text-md-center">
                                <img src="images/Renacimiento.png" height="45px">
                            </h1>
                            <h5 class="text-center text-md-center text-orange text-comfortaa">Renacimiento</h5>
                            <p class="text-muted text-raleway">
                                - Misa mensual y anual.<br>
                                - Encuentros de apoyo y duelo.
                            </p>
                        </div>
                    </div>
                    <div class="row pb-2 pt-3">
                        <div class="col-12 col-md-12 text-right">
                            <p class="text-muted">Aplica Términos y Condiciones</p>
                        </div>
                    </div>
                </div>
                <!-- ======== PLAN UNIDOS 10 ======== -->
                <div class="row pt-5 pb-5 align-items-center">
                    <div class="col-12 col-md-6 order-md-1 text-center order-md-2">
                        <img class="w-100" src="images/planes/planUnidos10Individual.png" alt="plan familia empresarial">
                    </div>           
                    <div class="col-12 col-md-6 order-md-2">
                        <h2 class="text-comfortaa text-center text-md-left text-green-apple-light">
                            Plan Unidos 10
                        </h2>
                        <p class="text-raleway text-muted text-justify">
                            Diseñado para que puedas proteger a 9 integrantes de tu núcleo familiar hasta el 4to grado de consanguinidad y hasta el 2do grado de afinidad. <br><br>
                            - Afiliado principal hasta los 70 años. <br>
                            - 2 beneficiarios hasta los 75 años (entre padres, cónyuge o suegros).<br>
                            - 7 beneficiarios menores de 65 años.
                        </p><br>
                        <p class="text-center text-md-left text-raleway">
                            <button class="btn text-raleway text-green-apple-light" type="button" data-toggle="collapse" data-target="#planUnidos10Individual" aria-expanded="false" aria-controls="planUnidos10Individual">Cobertura <i class="fa fa-angle-down"></i></button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <a id="app-whatsapp" class="text-green-apple-light" target="_blanck" href="https://api.whatsapp.com/send?phone=+573176368888&amp;text=Hola! deseo adquirir el plan Unidos 10 Individual, me pueden apoyar?">
                                Adquirir plan
                            </a>
                        </p>
                    </div>
                </div>
                <!-- ======== PLAN UNIDOS 10 COBERTURA ======== -->
                <div class="collapse multi-collapse" id="planUnidos10Individual">
                    <div class="row">
                        <div class="col-12 col-md-3">
                            <h1 class="text-orange-light text-center text-md-center">
                                <img src="images/Desprendimiento.png" height="45px">
                            </h1>
                            <h5 class="text-center text-md-center text-green-apple-light text-comfortaa">Desprendimiento</h5>
                            <p class="text-muted text-raleway">
                                - Atención las 24 horas.<br>
                                - Arreglo estético. <br>
                                - Cofre. <br>
                                - Traslado Nacional hasta 300km.
                            </p>
                        </div>
                        <div class="col-12 col-md-3">
                            <h1 class="text-orange-light text-center text-md-center">
                                <img src="images/Acogida.png" height="45px">
                            </h1>
                            <h5 class="text-center text-md-center text-green-apple-light text-comfortaa">Acogida</h5>
                            <p class="text-muted text-raleway">
                                - Sala de velación. <br>
                                - Velación Virtual. <br>
                                - Acompañamiento musical. <br>
                                - Arreglo floral.
                            </p>
                        </div>
                        <div class="col-12 col-md-3">
                            <h1 class="text-orange-light text-center text-md-center">
                                <img src="images/Despedida.png" height="45px">
                            </h1>
                            <h5 class="text-center text-md-center text-green-apple-light text-comfortaa">Despedida</h5>
                            <p class="text-muted text-raleway">
                                - Cinta membretada.<br>
                                - Transporte para acompañantes.<br>
                                - Carroza fúnebre.<br>
                                - Cremación o inhumación por 4 años con los convenios que tenga la red nacional Los Olivos.
                            </p>
                        </div>
                        <div class="col-12 col-md-3">
                            <h1 class="text-orange-light text-center text-md-center">
                                <img src="images/Renacimiento.png" height="45px">
                            </h1>
                            <h5 class="text-center text-md-center text-green-apple-light text-comfortaa">Renacimiento</h5>
                            <p class="text-muted text-raleway">
                                - Misa mensual y anual.<br>
                                - Encuentros de apoyo y duelo.
                            </p>
                        </div>                
                    </div>
                    <div class="row pb-2 pt-3">
                        <div class="col-12 col-md-12 text-right">
                            <p class="text-muted">Aplica Términos y Condiciones</p>
                        </div>
                    </div>
                </div>
                <!-- ======== PLAN PLENITUD ======== -->
                <div class="row pt-5 pb-5 align-items-center">
                    <div class="col-12 col-md-6 order-md-2 text-center">
                        <img class="w-100" src="images/planes/planPlenitud.png" alt="plan familia empresarial">
                    </div>
                    <div class="col-12 col-md-6 order-md-1">
                        <h2 class="text-green-light text-comfortaa text-center text-md-left">Plan Plenitud</h2>
                        <p class="text-muted text-justify text-raleway">
                            <b>Grupo Familiar:</b> <br><br>
                                - Afiliado principal y conyugue hasta los 70 años.<br>
                                - Hijos o hermanos. <br><br>
                            <b>Plenitud Padres y/o Suegros:</b> <br><br>
                                - Afiliado principal y conyugue hasta los 70 años. <br>
                                - Hijos o hermanos. <br>
                                - Padres y/o suegros hasta los 74 años (solo dos de estos parentescos).
                        </p><br>
                        <p class="text-md-left text-center text-raleway">
                            <button class="btn text-green-light" type="button" data-toggle="collapse" data-target="#planPlenitud" aria-expanded="false" aria-controls="planPlenitud">Cobertura <i class="fa fa-angle-down"></i></button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <a id="app-whatsapp" class="text-green-light" target="_blanck" href="https://api.whatsapp.com/send?phone=+573176368888&amp;text=Hola! deseo adquirir el plan Plenitud, me pueden apoyar?">
                                Adquirir plan
                            </a>
                        </p>
                    </div>
                </div>
                <!-- ======== PLAN PLENITUD COBERTURA ======== -->
                <div class="collapse multi-collapse" id="planPlenitud">
                    <div class="row">
                        <div class="col-12 col-md-3">
                            <h1 class="text-orange-light text-center text-md-center">
                                <img src="images/Desprendimiento.png" height="45px">
                            </h1>
                            <h4 class="text-center text-md-center text-green-light text-comfortaa">Desprendimiento</h4>
                            <p class="text-muted text-raleway text-left">
                                - Atención las 24 horas.<br>
                                - Arreglo estético. <br>
                                - Cofre. <br>
                                - Traslado Nacional hasta 300km.
                            </p>
                        </div>
                        <div class="col-12 col-md-3">
                            <h1 class="text-orange-light text-center text-md-center">
                                <img src="images/Acogida.png" height="45px">
                            </h1>
                            <h4 class="text-center text-md-center text-green-light text-comfortaa">Acogida</h4>
                            <p class="text-muted text-raleway text-left">
                                - Sala de velación. <br>
                                - Velación Virtual. <br>
                                - Acompañamiento musical. <br>
                                - Arreglo floral.
                            </p>
                        </div>
                        <div class="col-12 col-md-3">
                            <h1 class="text-orange-light text-center text-md-center">
                                <img src="images/Despedida.png" height="45px">
                            </h1>
                            <h4 class="text-center text-md-center text-green-light text-comfortaa">Despedida</h4>
                            <p class="text-muted text-raleway text-left">
                                - Cinta membretada.<br>
                                - Transporte para acompañantes.<br>
                                - Carroza fúnebre.<br>
                                - Cremación o inhumación por 4 años con los convenios que tenga la red nacional Los Olivos.
                            </p>
                        </div>
                        <div class="col-12 col-md-3">
                            <h1 class="text-orange-light text-center text-md-center">
                                <img src="images/Renacimiento.png" height="45px">
                            </h1>
                            <h4 class="text-center text-md-center text-green-light text-comfortaa">Renacimiento</h4>
                            <p class="text-muted text-raleway text-left">
                                - Misa mensual y anual.<br>
                                - Encuentros de apoyo y duelo.
                            </p>
                        </div>
                    </div>
                    <div class="row pb-2 pt-3">
                        <div class="col-md-12 text-right">
                            <p class="text-muted text-raleway">Aplica Términos y Condiciones</p>
                        </div>
                    </div>
                </div>
                <!-- ======== ADICIONAL ADULTO MAYOR ======== -->
                <div class="row pt-5 pb-5 align-items-center">
                    <div class="col-12  col-md-6 text-center">
                        <img class="w-100" src="images/planes/Tercera_Edad.png" alt="plan familia empresarial">
                    </div>
                    <div class="col-12 col-md-6 ">
                        <h2 class="text-center text-md-left text-orange text-comfortaa">
                        Adicional Adulto Mayor
                        </h2>
                        <p class="text-raleway text-muted text-justify">
                        Diseñado para brindar protección al adulto mayor. Se podrán ingresar máximo dos beneficiarios como adicionales al plan hasta los 80 años y 364 días<br><br>
                        Aplican condiciones y restricciones <br><br>
                        </p><br>
                        <p class="text-center text-md-left text-raleway">
                                <a id="app-whatsapp" class="text-orange btn-ver-sala " target="_blanck" href="https://api.whatsapp.com/send?phone=+573176368888&amp;text=Hola! deseo adquirir el plan Unidos Individual, me pueden apoyar?">
                                Adquirir plan
                            </a>
                        </p>
                    </div>
                </div>
                <!-- ======== PLAN TU BIENESTAR ======== -->
                <!-- <div class="row pt-5 pb-5 align-items-center">
                    <div class="col-12 col-md-6 order-md-1 text-center order-md-2">
                        <img class="w-100" src="images/planes/planTuBienestar.png" alt="plan familia empresarial">
                    </div>           
                    <div class="col-12 col-md-6 order-md-2">
                        <h2 class="text-comfortaa text-center text-md-left text-green-apple-light">
                            Plan tu bienestar
                        </h2>
                        <p class="text-raleway text-muted text-justify">
                        Grupo Familiar:<br><br>
                        - Tipo 1: Afiliado principal y conyugue hasta los 70 años, Hijos o hermanos y padres y/o suegros hasta los 70 años (solo dos de estos parentescos). <br>
                        - Tipo 2: Afiliado principal Y 5 beneficiarios hasta los 70 años.
                        <br><br>
                        Asistencias gratuitas:<br><br>
                         > Desempleo
                         > Tercera Edad
                         > Mascotas
                         > Telefónica
                         > Médicas
                        </p><br>
                        <p class="text-center text-md-left text-raleway">
                            <button class="btn text-raleway text-green-apple-light" type="button" data-toggle="collapse" data-target="#planBienestarIndividual" aria-expanded="false" aria-controls="planBienestarIndividual">Cobertura <i class="fa fa-angle-down"></i></button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <a id="app-whatsapp" class="text-green-apple-light" target="_blanck" href="https://api.whatsapp.com/send?phone=+573176368888&amp;text=Hola! deseo adquirir el plan Tu Bienestar, me pueden apoyar?">
                                Adquirir plan
                            </a>
                        </p>
                    </div>
                </div> -->
                <!-- ======== PLAN TU BIENESTAR ======== -->
                <!-- <div class="collapse multi-collapse" id="planBienestarIndividual">
                    <div class="row">
                        <div class="col-12 col-md-3">
                            <h1 class="text-orange-light text-center text-md-center">
                                <img src="images/Desprendimiento.png" height="45px">
                            </h1>
                            <h5 class="text-center text-md-center text-green-apple-light text-comfortaa">Desprendimiento</h5>
                            <p class="text-muted text-raleway">
                                - Atención las 24 horas.<br>
                                - Arreglo estético. <br>
                                - Cofre. <br>
                                - Traslado Nacional hasta 300km.
                            </p>
                        </div>
                        <div class="col-12 col-md-3">
                            <h1 class="text-orange-light text-center text-md-center">
                                <img src="images/Acogida.png" height="45px">
                            </h1>
                            <h5 class="text-center text-md-center text-green-apple-light text-comfortaa">Acogida</h5>
                            <p class="text-muted text-raleway">
                                - Sala de velación. <br>
                                - Velación Virtual. <br>
                                - Acompañamiento musical. <br>
                                - Arreglo floral.
                            </p>
                        </div>
                        <div class="col-12 col-md-3">
                            <h1 class="text-orange-light text-center text-md-center">
                                <img src="images/Despedida.png" height="45px">
                            </h1>
                            <h5 class="text-center text-md-center text-green-apple-light text-comfortaa">Despedida</h5>
                            <p class="text-muted text-raleway">
                                - Cinta membretada.<br>
                                - Transporte para acompañantes.<br>
                                - Carroza fúnebre.<br>
                                - Cremación o inhumación por 4 años con los convenios que tenga la red nacional Los Olivos.
                            </p>
                        </div>
                        <div class="col-12 col-md-3">
                            <h1 class="text-orange-light text-center text-md-center">
                                <img src="images/Renacimiento.png" height="45px">
                            </h1>
                            <h5 class="text-center text-md-center text-green-apple-light text-comfortaa">Renacimiento</h5>
                            <p class="text-muted text-raleway">
                                - Misa mensual y anual.<br>
                                - Encuentros de apoyo y duelo.
                            </p>
                        </div>
                        
                    </div>
                    <div class="row pb-2 pt-3">
                        <div class="col-12 col-md-12 text-right">
                            <p class="text-muted">Aplica Términos y Condiciones</p>
                        </div>
                    </div>
                </div> -->
            </div>
        </section>
    `
})