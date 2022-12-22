Vue.component('productos-homenajes',{
    template: /*html*/`
        <section id="height-auto" class="pt-4 pb-4">
            <div class="container">
            <!-- ========== SALAS ==========-->
                <div class="row align-items-center">
                    <div class="col-12 col-md-12 order-md-2 text-center">
                        <h1 class="text-center text-comfortaa text-green-light text-md-center">Salas Vip</h1>
                        <hr class="hr-sm hr-border-green-light">
                    </div>
                </div><br>
                <div class="row justify-content-center">
                    <div class="col-12 col-md-4 text-center my-3">
                        <h3 class="text-green-apple-light text-comfortaa">Sala Diamante</h3>
                        <p class="text-green-apple-light text-comfortaa">Villavicencio</p>
                        <button class="text-green-apple-light btn" type="button" data-toggle="collapse" data-target="#salaDiamante" aria-expanded="false" aria-controls="salaDiamante">Ver sala <i class="fa fa-angle-down"></i></button>
                        <div class="collapse multi-collapse img-cenizarios" id="salaDiamante"><br>
                            <img class="rounded" src="images/homenajes/SalaDiamante.webp" alt="sala Diamante" width="280px">
                        </div>
                    </div>
                    <div class="col-12 col-md-4 text-center my-3">
                        <h3 class="text-green-apple-light text-comfortaa">Sala Presidencial</h3>
                        <p class="text-green-apple-light text-comfortaa">Villavicencio</p>
                        <button class="text-green-apple-light btn" type="button" data-toggle="collapse" data-target="#salaPresidencial" aria-expanded="false" aria-controls="salaPresidencial">Ver sala <i class="fa fa-angle-down"></i></button>
                        <div class="collapse multi-collapse img-cenizarios" id="salaPresidencial"><br>
                            <img class="rounded" src="images/homenajes/SalaPresidencial.webp" alt="sala Diamante" width="280px">
                        </div>
                    </div>
                    <div class="col-12 col-md-4 text-center my-3">
                        <h3 class="text-green-apple-light text-comfortaa">Sala Vip</h3>
                        <p class="text-green-apple-light text-comfortaa">Acacias</p>
                        <button class="text-green-apple-light btn" type="button" data-toggle="collapse" data-target="#salaVipAcacias" aria-expanded="false" aria-controls="salaVipAcacias">Ver sala <i class="fa fa-angle-down"></i></button>
                        <div class="collapse multi-collapse img-cenizarios" id="salaVipAcacias"><br>
                            <img class="rounded" src="images/homenajes/salaVip.webp" alt="sala Diamante" width="280px">
                        </div>
                    </div>
                    <div class="col-12 col-md-4 text-center my-3">
                        <h3 class="text-green-apple-light text-comfortaa">Sala Presidencial</h3>
                        <p class="text-green-apple-light text-comfortaa">Yopal</p>
                        <button class="text-green-apple-light btn" type="button" data-toggle="collapse" data-target="#salaPresidencialYopal" aria-expanded="false" aria-controls="salaPresidencialYopal">Ver sala <i class="fa fa-angle-down"></i></button>
                        <div class="collapse multi-collapse img-cenizarios" id="salaPresidencialYopal"><br>
                            <img class="rounded" src="images/sedes/sedeYopal/sala3.webp" alt="sala Diamante" width="270px">
                        </div>
                    </div>
                    <div class="col-12 col-md-4 text-center my-3">
                        <h3 class="text-green-apple-light text-comfortaa">Sala Presidencial</h3>
                        <p class="text-green-apple-light text-comfortaa">Granada</p>
                        <button class="text-green-apple-light btn" type="button" data-toggle="collapse" data-target="#salaPresidencialGranada" aria-expanded="false" aria-controls="salaPresidencialGranada">Ver sala <i class="fa fa-angle-down"></i></button>
                        <div class="collapse multi-collapse img-cenizarios" id="salaPresidencialGranada"><br>
                            <img class="rounded" src="images/sedes/sedeGranada/Sala3.webp" alt="sala Diamante" width="270px">
                        </div>
                    </div>
                </div>
            <!-- ========== CENIZARIOS ==========-->
                <div class="row">
                    <div class="col-12 col-md-12 text-center p-5">
                        <h2 class="text-green-light text-comfortaa">Cenizarios</h2>
                        <hr class="hr-sm hr-border-green-light"> <br>
                        <p class="text-justify text-md-justify text-raleway text-muted">
                            Distinción y sobriedad en nuestros Cenizarios, que se visten de gala para albergar los sentimientos de muchas familias, para quienes custodiamos sus tesoros más preciados, representados en las memorias de sus seres queridos en un ambiente tranquilo y confortable.
                        </p>
                    </div>
                </div>

                <div class="row justify-content-center">
                    <div class="col-12 col-md-3 text-center my-3">
                        <h3 class="text-green-apple-light text-comfortaa">Sencillos</h3>
                        <button class="text-green-apple-light btn" type="button" data-toggle="collapse" data-target="#cenizariosSencillos" aria-expanded="false" aria-controls="cenizariosSencillos">Ver Cenizario <i class="fa fa-angle-down"></i></button>                        
                        <div class="collapse multi-collapse img-cenizarios" id="cenizariosSencillos"><br>
                            <img src="images/homenajes/CenizarioSencillo.webp" alt="sala Diamante" width="230px">
                            <br>
                            <a id="app-whatsapp" class="text-green-apple-light btn" target="_blanck" href="https://api.whatsapp.com/send?phone=+573115554404&amp;text=Hola! deseo adquirir el cenizario Sencillo me pueden apoyar?">
                                Adquirir Cenizario
                            </a>
                        </div>
                    </div>
                    <div class="col-md-3 text-center my-3">
                        <h3 class="text-green-apple-light text-comfortaa">Dobles</h3>
                        <button class="text-green-apple-light btn" type="button" data-toggle="collapse" data-target="#cenizariosDobles" aria-expanded="false" aria-controls="cenizariosDobles">Ver Cenizario <i class="fa fa-angle-down"></i></button>                        
                        <div class="collapse multi-collapse img-cenizarios" id="cenizariosDobles"><br>
                            <img src="images/homenajes/CenizarioDoble.webp" alt="sala Diamante" width="230px">
                            <br>
                            <a id="app-whatsapp" class="text-green-apple-light btn" target="_blanck" href="https://api.whatsapp.com/send?phone=+573115554404&amp;text=Hola! deseo adquirir el cenizario Doble me pueden apoyar?">
                                Adquirir Cenizario
                            </a>
                        </div>
                    </div>
                    <div class="col-md-3 text-center my-3">
                        <h3 class="text-green-apple-light text-comfortaa">Octagonales</h3>
                        <button class="text-green-apple-light btn" type="button" data-toggle="collapse" data-target="#cenizariosOctagonales" aria-expanded="false" aria-controls="cenizariosOctagonales">Ver Cenizario <i class="fa fa-angle-down"></i></button>
                        <div class="collapse multi-collapse img-cenizarios" id="cenizariosOctagonales"><br>
                            <img src="images/homenajes/CenizarioExagonal.webp" alt="sala Diamante" width="230px">
                            <br>
                            <a id="app-whatsapp" class="text-raleway text-green-apple-light btn" target="_blanck" href="https://api.whatsapp.com/send?phone=+573115554404&amp;text=Hola! deseo adquirir el cenizario Octagonal me pueden apoyar?">
                                Adquirir Cenizario
                            </a>
                        </div>
                    </div>
                </div>
            <!-- ========== PLANES VITALICIOS ==========-->
                <div class="row">
                    <div class="col-md-12 text-center p-5">
                        <h2 class="text-green-light text-comfortaa">Planes Vitalicios</h2>
                        <hr class="hr-sm hr-border-green-light"><br>
                        <p class="text-muted text-raleway text-justify text-md-justify">
                            Es la mejor alternativa para adquirir una protección exequial de forma planeada y anticipada, permitiéndole tener un servicio superior que se ajusta a su necesidad, generando tranquilidad en momentos difíciles como lo es la partida de un ser querido. <br><br>
                        </p>
                        <div class="text-center m-3">
                            <button class="text-green-apple-light btn btn-outline-green" type="button" data-toggle="collapse" data-target="#beneficiosPlanesVitalicios" aria-expanded="false" aria-controls="beneficiosPlanesVitalicios">Beneficios <i class="fa fa-angle-down"></i></button> 
                        </div>
                        <div class="text-left collapse multi-collapse img-cenizarios" id="beneficiosPlanesVitalicios">
                            <div class="col-12 col-md-12 text-muted text-raleway">
                                <p><i class="fa fa-check text-green-light"></i> De uso Vitalicio.</p>
                                <p><i class="fa fa-check text-green-light"></i> Sin Carencia (Uso inmediato) y sin preexistencias médicas.</p>
                                <p><i class="fa fa-check text-green-light"></i> Cualquier parentesco y sin límite de edad.</p>
                                <p><i class="fa fa-check text-green-light"></i> Precio Único que no se incrementa con el tiempo.</p>
                                <p><i class="fa fa-check text-green-light"></i> Diferentes opciones del homenaje de acuerdo a su cultura y presupuesto, Garantizando la prestación del “Homenaje al Amor”</p>
                                <p><i class="fa fa-check text-green-light"></i> Facilidades de pago.</p>
                                <p><i class="fa fa-check text-green-light"></i> Asesoría durante las 24 horas del día, los 365 días del año con atención inmediata.</p>
                                <p><i class="fa fa-check text-green-light"></i> El respaldo de Los Olivos, una marca que cuenta con la Red Funeraria más grande del país.</p>
                                <p><i class="fa fa-check text-green-light"></i> El mejor servicio, con modernas y cómodas salas en la región.</p>
                                <p><i class="fa fa-check text-green-light"></i> Calidad total en nuestros procesos.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 col-md-12">
                        <div class="container">
                            <div class="ui-tabgroup">
                                <input class="ui-tab1" type="radio" id="tgroup_f_tab1" name="tgroup_f" checked />
                                <input class="ui-tab2" type="radio" id="tgroup_f_tab2" name="tgroup_f" />
                                <input class="ui-tab3" type="radio" id="tgroup_f_tab3" name="tgroup_f" />
                                <input class="ui-tab4" type="radio" id="tgroup_f_tab4" name="tgroup_f" />
                                <div id="tabs-planes" class="ui-tabs">
                                    <label class="ui-tab1 text-comfortaa" for="tgroup_f_tab1">Básico</label>
                                    <label class="ui-tab2 text-comfortaa" for="tgroup_f_tab2">Platino</label>
                                    <label class="ui-tab3 text-comfortaa" for="tgroup_f_tab3">Gold</label>
                                    <label class="ui-tab4 text-comfortaa" for="tgroup_f_tab4">Eterno</label>
                                </div>
                                <div class="ui-panels">
                                    <div class="ui-tab1" style="border-bottom: none;">
                                        <div class="row">
                                            <div class="col-12 col-md-3 text-center">
                                                <i class="fa fa-bookmark-o fa-3x text-green-light"></i>
                                                <h3 class="text-green-light text-center text-comfortaa">Básico</h3>
                                                <p class="text-muted text-raleway text-left">
                                                    Esta opción es pensada para que las familias de escasos recursos puedan dar un homenaje al amor a su ser querido.
                                                </p>
                                                <a id="app-whatsapp" class="btn btn-outline-info text-raleway" target="_blanck" href="https://api.whatsapp.com/send?phone=+573204316921&amp;text=Hola! deseo adquirir el plan Básico me pueden apoyar?">
                                                    <i class="fa fa-whatsapp"></i> Adquirir plan
                                                </a>
                                            </div>
                                            <div class="col-12 col-md-4 text-muted text-raleway">
                                                <p><i class="fa fa-check text-green-light"></i> Traslado local del cuerpo.</p>
                                                <p><i class="fa fa-check text-green-light"></i> Tramites y licencias.</p>
                                                <p><i class="fa fa-check text-green-light"></i> Preparacion del cuerpo.</p>
                                                <p><i class="fa fa-check text-green-light"></i> Cofre básico (Social).</p>
                                                <p><i class="fa fa-check text-green-light"></i> Traslado del cuerpo a la sala.</p>
                                                <p><i class="fa fa-check text-green-light"></i> Sala de Velación RESIDENCIA.</p>
                                                <p><i class="fa fa-check text-green-light"></i> Carteles (Serie 6).</p>
                                                <p><i class="fa fa-check text-green-light"></i> Servicio de cafeteria</p> 
                                                <p><i class="fa fa-check text-green-light"></i> Arreglo floral.</p>                                                
                                            </div>
                                            <div class="col-md-4 text-muted text-raleway">
                                                <p><i class="fa fa-check text-green-light"></i> Cinta membretada.</p>
                                                <p><i class="fa fa-check text-green-light"></i> Eucaristia o Acto religioso.</p>
                                                <p><i class="fa fa-check text-green-light"></i> Traslado campo santo.</p>
                                                <p><i class="fa fa-check text-green-light"></i> Bus para acompañantes.</p>
                                                <p><i class="fa fa-check text-green-light"></i> Destino Final (inhumación o cremación).</p>
                                                <p><i class="fa fa-check text-green-light"></i> Eucaristia mensual.</p>
                                                <p><i class="fa fa-check text-green-light"></i> Eucaristia anual.</p>
                                                <p><i class="fa fa-check text-green-light"></i> Encuentro de apoyo.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="ui-tab2" style="border-bottom: none;">
                                        <div class="row">
                                            <div class="col-12 col-md-3 text-center">
                                                <i class="fa fa-star-o fa-3x text-orange"></i>
                                                <h3 class="text-orange text-comfortaa">Platino</h3>
                                                <p class="text-raleway text-muted text-left">
                                                    esta opción presenta cobertura completa en sedes  de homenajes  Los Olivos.
                                                </p>
                                                <a id="app-whatsapp" class="btn btn-outline-danger text-raleway" target="_blanck" href="https://api.whatsapp.com/send?phone=+573204316921&amp;text=Hola! deseo adquirir el plan Platino me pueden apoyar?">
                                                    <i class="fa fa-whatsapp"></i> Adquirir plan
                                                </a>
                                            </div>
                                            <div class="col-12 col-md-4 text-raleway text-muted">
                                                <p><i class="fa fa-check text-orange"></i> Traslado local del cuerpo.</p>
                                                <p><i class="fa fa-check text-orange"></i> Tramites y licencias.</p>
                                                <p><i class="fa fa-check text-orange"></i> Preparacion del cuerpo.</p>
                                                <p><i class="fa fa-check text-orange"></i> Traslado del cuerpo a la sala.</p>
                                                <p><i class="fa fa-check text-orange"></i> Cofre (Plan).</p>
                                                <p><i class="fa fa-check text-orange"></i> Carteles (Serie 6).</p>
                                                <p><i class="fa fa-check text-orange"></i> Servicio de cafeteria</p> 
                                                <p><i class="fa fa-check text-orange"></i> Arreglo floral.</p>
                                                <p><i class="fa fa-check text-orange"></i> Cinta membretada.</p>
                                                <p><i class="fa fa-check text-orange"></i> Eucaristia o Acto religioso.</p>
                                            </div>
                                            <div class="col-12 col-md-4 text-raleway text-muted">
                                                <p><i class="fa fa-check text-orange"></i> Traslado campo santo.</p>
                                                <p><i class="fa fa-check text-orange"></i> Bus para acompañantes.</p>
                                                <p><i class="fa fa-check text-orange"></i> Destino Final (inhumación o cremación).</p>
                                                <p><i class="fa fa-check text-orange"></i> Conjunto recordatorio</p>
                                                <p><i class="fa fa-check text-orange"></i> Eucaristia mensual.</p>
                                                <p><i class="fa fa-check text-orange"></i> Eucaristia anual.</p>
                                                <p><i class="fa fa-check text-orange"></i> Encuentro de apoyo.</p>
                                                <p><i class="fa fa-check text-orange"></i> Salas de velación estandar.</p>
                                            </div>
                                        </div>    
                                    </div>
                                    <div class="ui-tab3" style="border-bottom: none;">
                                        <div class="row">
                                            <div class="col-md-3 text-center">
                                                <i class="fa fa-star fa-3x text-orange-light"></i>
                                                <h3 class="text-orange-light text-comfortaa">Gold</h3>
                                                <p class="text-muted text-raleway text-left">
                                                    Esta opción permite contar con un homenaje VIP para su ser querido en instalaciones de Los Olivos.
                                                </p>
                                                <a id="app-whatsapp" class="btn btn-outline-warning text-raleway" target="_blanck" href="https://api.whatsapp.com/send?phone=+573204316921&amp;text=Hola! deseo adquirir el plan Gold me pueden apoyar?">
                                                    <i class="fa fa-whatsapp"></i> Adquirir plan
                                                </a>
                                            </div>
                                            <div class="col-12 col-md-4 text-muted text-raleway">
                                                <p><i class="fa fa-check text-orange-light"></i> Traslado local del cuerpo.</p>
                                                <p><i class="fa fa-check text-orange-light"></i> Tramites y licencias.</p>
                                                <p><i class="fa fa-check text-orange-light"></i> Preparacion del cuerpo.</p>
                                                <p><i class="fa fa-check text-orange-light"></i> Cofre Semilujo.</p>
                                                <p><i class="fa fa-check text-orange-light"></i> Traslado del cuerpo a la sala.</p>
                                                <p><i class="fa fa-check text-orange-light"></i> Salas de velación Vip (Donde exista el servicio).</p>
                                                <p><i class="fa fa-check text-orange-light"></i> Carteles (Serie 6).</p>
                                                <p><i class="fa fa-check text-orange-light"></i> Servicio de cafeteria</p>
                                                <p><i class="fa fa-check text-orange-light"></i> Gastos de exhumación.</p>
                                            </div>
                                            <div class="col-12 col-md-4 text-muted text-raleway">
                                                <p><i class="fa fa-check text-orange-light"></i> Arreglo floral.</p>
                                                <p><i class="fa fa-check text-orange-light"></i> Cinta membretada.</p>
                                                <p><i class="fa fa-check text-orange-light"></i> Eucaristia o Acto religioso.</p>
                                                <p><i class="fa fa-check text-orange-light"></i> Traslado campo santo.</p>
                                                <p><i class="fa fa-check text-orange-light"></i> Bus para acompañantes.</p>
                                                <p><i class="fa fa-check text-orange-light"></i> Destino Final (inhumación o cremación).</p>
                                                <p><i class="fa fa-check text-orange-light"></i> Eucaristia mensual.</p>
                                                <p><i class="fa fa-check text-orange-light"></i> Eucaristia anual.</p>
                                                <p><i class="fa fa-check text-orange-light"></i> Encuentro de apoyo.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="ui-tab4" style="border-bottom: none;">
                                        <div class="row">
                                            <div class="col-12 col-md-3 text-center">
                                                <i class="fa fa-heart fa-3x text-red"></i>
                                                <h3 class="text-red text-comfortaa">Eterno</h3>
                                                <p class="text-muted text-raleway text-left">
                                                    Esta opción está habilitado solo para la ciudad de San Jose del Guaviare y permite contar con un homenaje que cubre hasta los gastos de exhumación, osario o cenizario a perpetuidad.
                                                </p>
                                                <a id="app-whatsapp" class="btn btn-outline-danger text-raleway" target="_blanck" href="https://api.whatsapp.com/send?phone=+573204316921&amp;text=Hola! deseo adquirir el plan Eterno me pueden apoyar?">
                                                    <i class="fa fa-whatsapp"></i> Adquirir plan
                                                </a>
                                            </div>
                                            <div class="col-12 col-md-4 text-muted text-raleway">
                                                <p><i class="fa fa-check text-red"></i> Traslado local del cuerpo.</p>
                                                <p><i class="fa fa-check text-red"></i> Tramites y licencias.</p>
                                                <p><i class="fa fa-check text-red"></i> Preparacion del cuerpo.</p>
                                                <p><i class="fa fa-check text-red"></i> Cofre lujo.</p>
                                                <p><i class="fa fa-check text-red"></i> Traslado del cuerpo a la sala.</p>
                                                <p><i class="fa fa-check text-red"></i> Carteles (Serie 6).</p>
                                                <p><i class="fa fa-check text-red"></i> Servicio de cafeteria</p> 
                                                <p><i class="fa fa-check text-red"></i> Gastos de exhumación.</p>
                                                <p><i class="fa fa-check text-red"></i> Arreglo floral.</p>
                                                <p><i class="fa fa-check text-red"></i> Cinta membretada.</p>                                                
                                                <p><i class="fa fa-check text-red"></i> Eucaristia o Acto religioso.</p>
                                            </div>
                                            <div class="col-12 col-md-4 text-muted text-raleway">
                                                <p><i class="fa fa-check text-red"></i> Traslado campo santo.</p>
                                                <p><i class="fa fa-check text-red"></i> Bus para acompañantes.</p>
                                                <p><i class="fa fa-check text-red"></i> Destino Final (inhumación o cremación).</p>
                                                <p><i class="fa fa-check text-red"></i> Eucaristia mensual.</p>
                                                <p><i class="fa fa-check text-red"></i> Eucaristia anual.</p>
                                                <p><i class="fa fa-check text-red"></i> Encuentro de apoyo.</p>
                                                <p><i class="fa fa-check text-red"></i> Salas de velación Vip (Donde exista el servicio).</p>
                                                <p><i class="fa fa-check text-red"></i> Conjunto recordatorio</p>
                                                <p><i class="fa fa-check text-red"></i> Osario o cenizario de perpetuidad.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `
})