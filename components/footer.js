Vue.component('footer-olivos',{
    template: /*html*/`
        <footer id="footer" role="footer" class="pt-5 pb-5 bg-linear-gradient-blue-light">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-md-3">
                        <img class="logo-olivos-blanco" src="images/losolivosblanco.png" alt="logo los olivos blanco">
                    </div>
                    <div class="col-12 col-md-9 align-items-center">
                        <br>
                        <p class="text-white text-raleway">{{ textDesc }}</p>
                    </div>
                </div>
                <div class="row pt-5">
                    <div class="col-12 col-md-4">
                        <h4 class="text-white text-comfortaa">{{ contact }}</h4>
                        <p class="text-left text-md-left text-raleway text-white" v-html="address"></p>
                        <a target="_blank" href="https://www.facebook.com/608272796187936/" class="text-white ml-3"><i class="fa fa-facebook-square fa-2x"></i></a>
                        <a target="_blank" href="https://instagram.com/losolivosllanosorientales?igshid=5cx1kfj6pcvs" class="text-white ml-3"><i class="fa fa-instagram fa-2x"></i></a>
                        <br/><br/>
                        <img src="images/logo/supersolidaria-white.png" width="230px">
                    </div>
                    <div class="col-12 col-md-4 align-items-center">
                        <h4 class="text-white text-comfortaa">{{ titleInteresting }}</h4>
                        <ul class="list-simple-white">
                            <li v-for="interesting of linkInteresting">
                                <a v-bind:href="interesting.url" v-bind:target="interesting.target" class="text-raleway"> {{ interesting.link }} <i class="fa fa-angle-right"></i></a>
                            </li>
                        </ul>
                    </div>
                    <div class="col-12 col-md-4 align-items-center">
                        <h4 class="text-white  text-comfortaa">{{ titleFuncionary }}</h4>
                        <ul class="list-simple-white">
                            <li v-for="funcionary of linkFuncionary">
                                <a v-bind:href="funcionary.url" v-bind:target="funcionary.target" class="text-raleway" > {{ funcionary.link }} <i class="fa fa-angle-right"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="row pt-5">
                    <div class="col-12 col-md-12 align-items-center text-center">
                        <a target="_blank" href="https://www.agenciamanager.com" class="text-white text-comfortaa">{{ copyright }}</a>
                    </div>
                </div>
            </div>
        </footer>
    `,
    data(){
        return{
            textDesc:'En los Olivos Llanos Orientales atendemos y orientamos a nuestros afiliados para la coordinación de homenajes las 24 horas de día, los 365 días del año  en el PBX 6 68 52 86 o nuestra línea 01 8000 915 286.',
            contact: 'Contacto',
            address: 'Dirección oficina principal: Avenida 40 N° 20-05/15 <br> Línea trámites administrativos: (8) 6653986/87 <br> línea atención al cliente: 01 8000 915 286  PBX 6 68 52 86 <br> E – mail: contactenosvillavicencio@losolivos.co',
            titleInteresting:'Enlaces de intéres',
            linkInteresting:[
                {link:'Actualización de datos', url: 'continuidad-plan'},
                {link:'Solicitud de auxilios', url: 'https://web.losolivosvillavicencio.com/solicitud-auxilios/'},
                {link:'Novedades empresariales', url: 'https://novedades.losolivosvillavicencio.com/novedades-empresariales'},
                {link:'Precoordinacion del homenaje', url: 'https://novedades.losolivosvillavicencio.com/homenajes/'},
                {link:'Proteccion de datos', url: 'proteccion-datos'},
                {link:'Asistencias', url: 'asistencias'},
                {link:'Seguros de vida', url: 'seguros-vida'},
                {link:'Actualizacion RTE', url: 'actualizacionrte'},
                // {link:'Actualizacion ADEM', url: 'https://villavicencio.losolivos.co/sites/villavicencio.losolivos.co/files/CONTRATO%20EMPRESARIAL%20WEB.pdf', target:'_blank'},
                {link:'¿Preguntas frecuentes?', url: 'preguntas-frecuentes'}
            ],
            titleFuncionary:'Enlaces funcionarios',
            linkFuncionary:[
                {link:'Normatividad Covid-19', url: 'pdf/Normatividad COVID-19.pdf', target:'_blank'},
                {link:'Afiliaciones', url: 'https://docs.google.com/forms/d/e/1FAIpQLScVrr-wpQWw4r8l6xFRkBAjW_B8slsvMjQ26Kw11stGgPdkIA/viewform', target:'_blank'},
                {link:'Intranet', url: 'https://intranetvillavicencio.losolivos.co/', target:'_blank'},
                {link:'ORFEO', url: 'https://190.93.128.166/orfeo/login.php', target:'_blank'},
                {link:'Los Olivos lG', url: 'login', target:'_blank'},
            ],
            copyright:'© 2020 losolivosvillavicencio.com | Todos los derechos reservados agenciamanager.com'
        }
    }
})