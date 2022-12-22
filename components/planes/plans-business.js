Vue.component('plans-business',{
    template: /*html*/`
        <section>
            <div class="container">
                <div class="row">
                    <div class="col-12 col-md-12 text-center p-5">
                        <h4 class="text-orange">Empresariales</h4>
                        <hr class="hr-sm hr-border-orange">
                    </div>
                </div>
                <!-- ======== PLAN MI FAMILIA ======== -->
                <div class="row pt-5 pb-5 align-items-center">
                    <div class="col-12 col-md-6 text-center">
                        <img class="w-100" src="images/planes/planFamilia.png" alt="plan familia empresarial">
                    </div>
                    <div class="col-12 col-md-6">
                        <div>
                            <h2 class="text-center text-md-left text-orange-light text-comfortaa">
                                Plan Mi Familia
                            </h2>
                            <p class="text-raleway text-muted text-justify">
                                Diseñado para que puedas proteger tu núcleo familiar básico, según tu estado civil (Casado o Soltero), y así garantizar la tranquilidad de cada uno de los miembros de tu familia. <br><br>
                                - Afiliado principal y conyugue sin límite de edad. <br>
                                - Hijos o hermanos. <br>
                                - Padres y/o suegros.
                            </p><br>
                            <p class="text-center text-md-left text-raleway">
                                <button class="btn text-orange-light" type="button" data-toggle="collapse" data-target="#planMiFamilia" aria-expanded="false" aria-controls="planMiFamilia">Cobertura <i class="fa fa-angle-down"></i></button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <a id="app-whatsapp" class="text-orange-light btn-ver-sala " target="_blanck" href="https://api.whatsapp.com/send?phone=+573115554404&amp;text=Hola! deseo adquirir el plan mi familia empresarial, me pueden apoyar?">
                                    Adquirir plan
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
                <!-- ======== PLAN MI FAMILIA COBERTURA ======== -->
                <div class="collapse multi-collapse" id="planMiFamilia">
                    <div class="row pt-5">
                        <div class="col-12 col-md-3">
                            <h1 class="text-orange-light text-center text-md-center">
                                <img src="images/Desprendimiento.png" height="45px">
                            </h1>
                            <h5 class="text-orange-light text-comfortaa text-center text-md-center">Desprendimiento</h5>
                            <p class="text-muted text-raleway">
                                - Atención las 24 horas.<br>
                                - Arreglo estético. <br>
                                - Cofre. <br>
                                - Traslado Nacional.
                            </p>
                        </div>
                        <div class="col-12 col-md-3">
                            <h1 class="text-orange-light text-center text-md-center">
                                <img src="images/Acogida.png" height="45px">
                            </h1>
                            <h5 class="text-orange-light text-comfortaa text-center text-md-center">Acogida</h5>
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
                            <h5 class="text-center text-md-center text-orange-light text-comfortaa">Despedida</h5>
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
                            <h5 class="text-center text-md-center text-orange-light text-comfortaa">Renacimiento</h5>
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
                    <div class="col-12 col-md-6 text-center order-md-2">
                        <img class="w-100" src="images/planes/planUnidos10.png" alt="">
                    </div>           
                    <div class="col-12 col-md-6 order-md-1">
                        <h2 class="text-comfortaa text-center text-md-left text-red">
                            Plan Unidos 10
                        </h2>
                        <p class="text-raleway text-muted text-justify">
                            Diseñado para que puedas proteger a 9 integrantes de tu núcleo familiar hasta el 4to grado de consanguinidad y hasta el 2do grado de afinidad. <br><br>
                            - Afiliado principal sin límite de edad. <br>
                            - 2 beneficiarios sin límite de edad (entre padres y/o suegros). <br>
                            - 7 beneficiarios menores de 65 años.
                        </p><br>
                        <p class="text-center text-md-left text-raleway">
                            <button class="btn text-raleway text-red" type="button" data-toggle="collapse" data-target="#planUnidos10" aria-expanded="false" aria-controls="planUnidos10">Cobertura <i class="fa fa-angle-down"></i></button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <a id="app-whatsapp" class="text-red" target="_blanck" href="https://api.whatsapp.com/send?phone=+573115554404&amp;text=Hola! deseo adquirir el plan Unidos 10 empresarial, me pueden apoyar?">
                                Adquirir plan
                            </a>
                        </p>
                    </div>
                </div>
                <!-- ======== PLAN UNIDOS 10 COBERTURA ======== -->
                <div class="collapse multi-collapse" id="planUnidos10">
                    <div class="row">
                        <div class="col-12 col-md-3">
                            <h1 class="text-orange-light text-center text-md-center">
                                <img src="images/Desprendimiento.png" height="45px">
                            </h1>
                            <h5 class="text-center text-md-center text-red text-comfortaa">Desprendimiento</h5>
                            <p class="text-muted text-raleway">
                                - Atención las 24 horas.<br>
                                - Arreglo estético. <br>
                                - Cofre. <br>
                                - Traslado Nacional.
                            </p>
                        </div>
                        <div class="col-12 col-md-3">
                            <h1 class="text-orange-light text-center text-md-center">
                                <img src="images/Acogida.png" height="45px">
                            </h1>
                            <h5 class="text-center text-md-center text-red text-comfortaa">Acogida</h5>
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
                            <h5 class="text-center text-md-center text-red text-comfortaa">Despedida</h5>
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
                            <h5 class="text-center text-md-center text-red text-comfortaa">Renacimiento</h5>
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
                <!-- ======== PLAN UNIDOS ======== -->
                <div class="row pt-5 pb-5 align-items-center">
                    <div class="col-12 col-md-6 text-center">
                        <img class="w-100" src="images/planes/planUnidos.png" alt="plan familia empresarial">
                    </div>
                    <div class="col-12 col-md-6">
                        <h2 class="text-green-apple-light text-comfortaa text-center text-md-left">Plan Unidos</h2>
                        <p class="text-muted text-justify text-raleway">
                            Diseñado para que puedas proteger a 6 integrantes de tu núcleo familiar hasta el 4to grado de consanguinidad y hasta el 2do grado de afinidad. <br><br>
                            - Afiliado principal sin límite de edad. <br>
                            - 6 beneficiarios hasta los 74 años.
                        </p><br>
                        <p class="text-md-left text-center text-raleway">
                            <button class="btn text-green-apple-light" type="button" data-toggle="collapse" data-target="#planUnidos" aria-expanded="false" aria-controls="planUnidos">Cobertura <i class="fa fa-angle-down"></i></button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <a id="app-whatsapp" class="text-green-apple-light" target="_blanck" href="https://api.whatsapp.com/send?phone=+573115554404&amp;text=Hola! deseo adquirir el plan unidos empresarial, me pueden apoyar?">
                                Adquirir plan
                            </a>
                        </p>
                    </div>
                </div>
                <!-- ======== PLAN UNIDOS COBERTURA ======== -->
                <div class="collapse multi-collapse" id="planUnidos">
                    <div class="row">
                        <div class="col-12 col-md-3">
                            <h1 class="text-orange-light text-center text-md-center">
                                <img src="images/Desprendimiento.png" height="45px">
                            </h1>
                            <h4 class="text-center text-md-center text-green-apple-light text-comfortaa">Desprendimiento</h4>
                            <p class="text-muted text-raleway text-left">
                                - Atención las 24 horas.<br>
                                - Arreglo estético. <br>
                                - Cofre. <br>
                                - Traslado Nacional.
                            </p>
                        </div>
                        <div class="col-12 col-md-3">
                            <h1 class="text-orange-light text-center text-md-center">
                                <img src="images/Acogida.png" height="45px">
                            </h1>
                            <h4 class="text-center text-md-center text-green-apple-light text-comfortaa">Acogida</h4>
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
                            <h4 class="text-center text-md-center text-green-apple-light text-comfortaa">Despedida</h4>
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
                            <h4 class="text-center text-md-center text-green-apple-light text-comfortaa">Renacimiento</h4>
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
            </div>
        </section>
    `
})