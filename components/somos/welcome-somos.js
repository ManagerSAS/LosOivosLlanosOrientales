Vue.component('section-welcome',{
    template: /*html*/`
        <section class="pt-5 pb-5 pt-md-13 pb-md-11">
            <div class="container pt-5">
                <div class="row pt-5">
                    <div class="col-12 col-md-12">
                        <!-- ====== ICON SVG QUIENES SOMOS ====== -->
                        <h1 class="text-center text-green-light">
                            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-building" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022zM6 8.694L1 10.36V15h5V8.694zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15z"/>
                                <path d="M2 11h1v1H2v-1zm2 0h1v1H4v-1zm-2 2h1v1H2v-1zm2 0h1v1H4v-1zm4-4h1v1H8V9zm2 0h1v1h-1V9zm-2 2h1v1H8v-1zm2 0h1v1h-1v-1zm2-2h1v1h-1V9zm0 2h1v1h-1v-1zM8 7h1v1H8V7zm2 0h1v1h-1V7zm2 0h1v1h-1V7zM8 5h1v1H8V5zm2 0h1v1h-1V5zm2 0h1v1h-1V5zm0-2h1v1h-1V3z"/>
                            </svg>
                        </h1>
                        <!-- ====== TEXT HEADING ====== -->
                        <h1 class="text-center text-green-light text-md-center mb-2 text-comfortaa"> {{ title }} </h1>                        
                    </div>
                </div>
                <!-- ====== SOMOS ====== -->
                <div class="row pt-5 pb-5 pt-md-11 pb-md-11">
                    <div class="col-12 col-md-12">
                        <h4 class="text-justify text-muted text-md-left text-comfortaa">{{ titleSomos }}</h4>
                        <p class="text-justify text-muted text-md-justify text-raleway">{{ somos }}</p>
                        <hr class="hr-sm hr-border-green-light">
                    </div>
                </div>
                <!-- ====== MISION ====== -->
                <div class="row pt-5 pb-5 align-items-center">
                    <div class="col-12 col-md-4">
                        <h2 class="text-center text-md-center text-comfortaa text-green-light">
                            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-shield-fill-check" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M8 .5c-.662 0-1.77.249-2.813.525a61.11 61.11 0 0 0-2.772.815 1.454 1.454 0 0 0-1.003 1.184c-.573 4.197.756 7.307 2.368 9.365a11.192 11.192 0 0 0 2.417 2.3c.371.256.715.451 1.007.586.27.124.558.225.796.225s.527-.101.796-.225c.292-.135.636-.33 1.007-.586a11.191 11.191 0 0 0 2.418-2.3c1.611-2.058 2.94-5.168 2.367-9.365a1.454 1.454 0 0 0-1.003-1.184 61.09 61.09 0 0 0-2.772-.815C9.77.749 8.663.5 8 .5zm2.854 6.354a.5.5 0 0 0-.708-.708L7.5 8.793 6.354 7.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z"/>
                            </svg>
                            {{ titleMision }}
                        </h2>
                    </div>
                    <div class="col-12 col-md-8">
                        <p class="text-muted text-justify text-md-left text-raleway">{{ mision }}</p>
                    </div>
                </div>
                <!-- ====== VISION ====== -->
                <div class="row pt-5 pb-5 align-items-center ">
                    <div class="col-12 col-md-4">
                        <h2 class="text-center text-md-center text-comfortaa text-green-light">
                            <i class="fa fa-leaf"></i>
                            {{ titleVision }}
                        </h2>
                    </div>
                    <div class="col-12 col-md-8">
                        <p class="text-muted text-justify text-md-left text-raleway">{{ vision }}</p>
                    </div>
                </div>
            </div>
        </section>
    `,
    data(){
        return {
            title: '¿Quiénes Somos?',
            titleSomos: 'MAS DE 25 AÑOS DE PREVISIÓN Y PRESTACIÓN DEL SERVICIO EXEQUIAL A LA COMUNIDAD LLANERA.',
            somos: 'Somos una cooperativa de segundo grado, constituida el 8 de marzo de 1994, se crea con el apoyo de varias entidades del sector cooperativo regional y nacional y que hoy son asociados. El 31 de mayo de 1996 se inaugura la Sede en Villavicencio, actualmente contamos con infraestructura propia en los diferentes departamentos, con espacios que brindan comodidad y calidez, mostrando un nuevo estilo de prestación del servicio funerario. Somos una organización que presenta cobertura en los departamentos de la AMAZORINOQUIA Colombiana, de manera directa en los departamentos del Meta, Casanare, Guaviare, Guainía y por medio de convenios en los Departamentos del Vichada, Vaupés y Amazonas. Actualmente somos líderes en la previsión exequial en la región, con diversidad de productos y precios que se ajustan a las necesidades de las familias colombianas.',
            titleMision: 'Misión',
            mision: 'En SERFUNLLANOS somos una entidad del sector solidario, socialmente responsable con el medio ambiente y la sociedad, dedicada a la previsión y prestación de servicios exequiales integrales a nuestros asociados y comunidad en general.',
            titleVision: 'Visión',
            vision: 'En el 2021 SERFUNLLANOS mantendrá el liderazgo en el sector, y la preferencia de la comunidad en la Orinoquia y Amazonia colombiana, por la previsión y oferta de servicios exequiales integrales, soportados en una sólida red de atención a nivel regional y nacional, con productos y servicios de alta calidad en la cultura de un homenaje al amor.',
        }
    },
})