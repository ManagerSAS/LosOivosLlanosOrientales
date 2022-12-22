Vue.component('datos-protegidos',{
    template: /*html*/`
        <section id="height-auto" class="pt-4 pb-4 pt-md-11 pb-md-11">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-12 col-md-12 order-md-2 text-center pt-5">
                        <h1 class="text-left text-md-center text-green-light text-comfortaa">
                            {{ titleProtected }}
                        </h1>
                        <hr class="hr-sm hr-border-green-light">
                        <p class="text-left text-md-left text-comfortaa text-muted">
                            {{ textProtected }}
                        </p>
                        <h3 class="text-left text-md-left text-comfortaa text-green-apple-light">
                            {{ subtitleProtectedDocs }}
                        </h3>
                        <ul class="list-group list-group-flush text-muted text-raleway">
                            <li class="list-group-item text-left text-md-left" v-for="protect of protecteds">
                                {{ protect.linkDesc }}
                                <a v-bind:href="protect.idUrl" target="_blank"><i class="fa fa-file-o float-right"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    `,
    data(){
        return {
            titleProtected: 'Protección de datos',
            textProtected: 'De acuerdo con la Ley Estatutaria 1581 de 2.012 de Protección de Datos y el Decreto 1377 de 2.013, le informamos que SERFUNLLANOS LOS OLIVOS ha desarrollado una serie mecanismo con el fin de garantizar la proteccion, almacenamiento y tratamiento de sus datos personales los cuales puede consultar a continuacion o por medio del correo protecciondatosvillavicencio@losolivos.co. De igual modo, se le informa que la base de datos en la que se encuentran sus datos personales es tratada cumpliendo con las medidas de seguridad definidas en la política de tratamiento desarrollada por SERFUNLLANOS LOS OLIVOS a la cual se puede tener acceso a través de la página web www.villavicencio.losolivos.co. Usted puede ejercitar los derechos de acceso, corrección, supresión, revocación o reclamo por infracción sobre sus datos, mediante escrito dirigido a SERFUNLLANOS LOS OLIVOS por correo electrónico protecciondatosvillavicencio@losolivos.co, indicando en el asunto el derecho que desea ejercitar, o mediante correo ordinario remitido a la dirección: Av. 40 No. 20-05/15 Barrio Camoa, Villavicencio - Meta. Consulta de documentacion:',
            subtitleProtectedDocs: 'Consulta de documentacion:',
            protecteds:[
                {linkDesc: 'Aviso de privacidad', idUrl: 'pdf/Aviso de Privacidad.pdf'},
                {linkDesc: 'Clausula informativa', idUrl: 'pdf/Clausula Informativa.pdf'},
                {linkDesc: 'Manual interno de políticas y procedimientos', idUrl: 'pdf/PR3-GD --MANUAL INTERNO DE POLITICAS Y PROCEDIMIENTOS.pdf'},
                {linkDesc: 'Políticas Internas de Seguridad', idUrl: 'pdf/PR2-GD MANUAL DE POLITICAS INTERNAS DE SEGURIDAD.pdf'},
                {linkDesc: 'Políticas Web', idUrl: 'pdf/PR4-GD -MANUAL TRATAMIENTO POLITICA WEB.pdf'},
            ],
        }
    },
})