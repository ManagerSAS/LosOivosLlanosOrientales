Vue.component('advantage-benefits',{
    template: /*html*/`
        <section id="height-auto" class="pt-5 pb-5 bg-grey">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-12 col-md-12 text-center text-md-center">
                        <h1 class="text-green-light text-comfortaa">{{ title }}</h1>
                    </div>
                </div>
                <div class="row justify-content-center pt-5 pb-3">
                    <div class="col-12 col-md-3 text-center text-md-center">
                        <h1 class="text-green-light">
                            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-flag" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M14.778.085A.5.5 0 0 1 15 .5V8a.5.5 0 0 1-.314.464L14.5 8l.186.464-.003.001-.006.003-.023.009a12.435 12.435 0 0 1-.397.15c-.264.095-.631.223-1.047.35-.816.252-1.879.523-2.71.523-.847 0-1.548-.28-2.158-.525l-.028-.01C7.68 8.71 7.14 8.5 6.5 8.5c-.7 0-1.638.23-2.437.477A19.626 19.626 0 0 0 3 9.342V15.5a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 1 0v.282c.226-.079.496-.17.79-.26C4.606.272 5.67 0 6.5 0c.84 0 1.524.277 2.121.519l.043.018C9.286.788 9.828 1 10.5 1c.7 0 1.638-.23 2.437-.477a19.587 19.587 0 0 0 1.349-.476l.019-.007.004-.002h.001M14 1.221c-.22.078-.48.167-.766.255-.81.252-1.872.523-2.734.523-.886 0-1.592-.286-2.203-.534l-.008-.003C7.662 1.21 7.139 1 6.5 1c-.669 0-1.606.229-2.415.478A21.294 21.294 0 0 0 3 1.845v6.433c.22-.078.48-.167.766-.255C4.576 7.77 5.638 7.5 6.5 7.5c.847 0 1.548.28 2.158.525l.028.01C9.32 8.29 9.86 8.5 10.5 8.5c.668 0 1.606-.229 2.415-.478A21.317 21.317 0 0 0 14 7.655V1.222z"/>
                            </svg>
                        </h1>
                        <hr class="hr-sm hr-border-green-light">
                        <h5 class="text-green-light text-raleway">{{asistance.asistance_1}}</h5>
                    </div>
                    <div class="col-12 col-md-3 text-center text-md-center">
                        <h1 class="text-green-light">
                            <i class="fa fa-user-o"></i>
                        </h1>
                        <hr class="hr-sm hr-border-green-light">
                        <h5 class="text-green-light text-raleway">{{asistance.asistance_2}}</h5>
                    </div>
                    <div class="col-12 col-md-3 text-center text-md-center">
                        <h1 class="text-green-light">
                            <i class="fa fa-building-o"></i>
                        </h1>
                        <hr class="hr-sm hr-border-green-light">
                        <h5 class="text-green-light text-raleway">{{asistance.asistance_3}}</h5>
                    </div>
                    <div class="col-12 col-md-3 text-center text-md-center">
                        <h1 class="text-green-light">
                            <i class="fa fa-handshake-o"></i>
                        </h1>
                        <hr class="hr-sm hr-border-green-light">
                        <h5 class="text-green-light text-raleway">{{asistance.asistance_4}}</h5>
                    </div>
                </div>
                <!-- ============ NUESTRO EQUIPO ============ -->
                <div class="row align-items-center">
                    <!-- image familia -->
                    <div class="col-12 col-md-5 order-md-2 text-center animate__animated animate__fadeInLeft animate__slower">
                        <img class="w-100" src="images/nuestroEquipo.webp">
                    </div>
                    <div class="col-12 col-md-6 order-md-1 animate__animated animate__fadeInUp animate__fast animate__delay-2s">
                        <!-- text heading -->
                        <h1 class="text-center text-md-left mb-2 text-green-light text-comfortaa"> {{titleTeam}} </h1>
                        <!-- text desc -->
                        <p class="text-muted text-justify mb-5 text-raleway">
                            {{ textTeam }}
                        </p>
                        <!-- button join online -->
                        <div class="text-center text-md-left">
                            <a class="btn btn-green-light lift text-raleway"  href="quienes-somos" role="button">{{btnSedes}}</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `,
    data(){
        return{
            title: 'Ventajas y Beneficios',
            asistance:{
                asistance_1: 'Marca lider en Servicios funerarios',
                asistance_2: '+ de 1.382 de profesionales',
                asistance_3: '+ de 261 salas de velación propias',
                asistance_4: '+ de 650 salas en convenio'
            },
            btnAsistance: 'Deseo saber mas',
            titleTeam: 'Nuestro equipo',
            textTeam: 'Los Olivos somos un grupo de más de 1382 profesionales, dispuestos a asistir con respeto y dignidad, para que en los momentos más difíciles se sienta protegido. Nuestra experiencia de más de 36 años, ha merecido la confianza de más de un millón de familias colombianas.',
            btnSedes: 'Conoce nuestro equipo',
        }
    }
})