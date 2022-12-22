Vue.component('asistencias-b-n',{
    template: /*html*/`
        <section id="height-auto" class="pt-4 pb-4 pt-md-13 pb-md-11">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-12 col-md-12 order-md-2 text-center">
                        <h1 class="text-left text-md-center text-green-light text-comfortaa">
                            {{ title }}
                        </h1>
                        <hr class="hr-sm hr-border-green-light">
                        <h3 class="text-left text-md-left text-comfortaa text-green-apple-light">
                            {{ subtitleBusiness }}
                        </h3>
                        <ul class="list-group list-group-flush  text-muted text-raleway">
                            <li class="list-group-item text-left text-md-left" v-for="asistance of asistanceB">
                                {{ asistance.linkDesc }}
                                <a v-bind:href="asistance.idUrl" target="_blank"><i class="fa fa-file-o float-right"></i></a>
                            </li>
                        </ul><br>
                        <h3 class="text-left text-md-left text-comfortaa text-green-apple-light">
                            {{ subtitleNatural }}
                        </h3>
                        <ul class="list-group list-group-flush text-muted text-raleway">
                            <li class="list-group-item text-left text-md-left" v-for="asistance of asistanceN">
                                {{ asistance.linkDesc }}
                                <a v-bind:href="asistance.idUrl" target="_blank"><i class="fa fa-file-o float-right"></i></a>
                            </li>
                        </ul><br>
                        <h3 class="text-left text-md-left text-comfortaa text-green-apple-light">
                            {{ subtitleMascota }}
                        </h3>
                        <ul class="list-group list-group-flush text-muted text-raleway">
                            <li class="list-group-item text-left text-md-left" v-for="asistance of asistanceM">
                                {{ asistance.linkDesc }}
                                <a v-bind:href="asistance.idUrl" target="_blank"><i class="fa fa-file-o float-right"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    `,
    data(){
        return {
            title: 'Asistencias',
            subtitleBusiness: 'Asistencias Empresas',
            asistanceB:[
                {linkDesc:'Condicionado general para la prestación de servicios canal empresarial full', idUrl: 'pdf/asistenciasEmpresas2020.pdf'},
                {linkDesc:'Asistencia empresarial básica', idUrl: 'pdf/CondicionadoGeneralparalaPrestaciondeServicios-ASISTENCIAEMPRESARIALBASICA.pdf'},
                {linkDesc:'Asistencia empresarial solo médica', idUrl: 'pdf/CondicionadoGeneralparalaPrestaciondeServicios-ASISTENCIAEMPRESARIALSOLOMEDICA.pdf'},
            ],
            subtitleNatural: 'Asistencias Persona Natural',
            asistanceN:[
                {linkDesc:'Condicionado General para la prestación de servicios Asistencia Individual', idUrl: 'pdf/asistenciasIndividual2020.pdf'},
            ],
            subtitleMascota: 'Asistencias Mascota',
            asistanceM:[
                {linkDesc:'Adicional mascotas', idUrl: 'pdf/CondicionadoGeneralparalaPrestaciondeServicios-ADICIONALMASCOTAS.pdf'},
            ],
        }
    },
})