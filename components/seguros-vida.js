Vue.component('seguros-vida',{
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
                            <li class="list-group-item text-left text-md-left" v-for="seguros of segurosVida">
                                {{ seguros.linkDesc }}
                                <a v-bind:href="seguros.idUrl" target="_blank"><i class="fa fa-file-o float-right"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    `,
    data(){
        return {
            title: 'Seguros de vida',
            subtitleSegurosVida: 'Asistencias Empresas',
            segurosVida:[
                {linkDesc:'SOLICANASTA 2020', idUrl: 'pdf/solicanasta.pdf'},
                {linkDesc:'SOLICANASTA FAMILIAR 2020', idUrl: 'pdf/solicanastaF.pdf'},
                {linkDesc:'SOLIENVIDA 2020', idUrl: 'pdf/solienvida.pdf'},
                {linkDesc:'SOLIHOGAR 2020', idUrl: 'pdf/solihogar.pdf'},
            ]
        }
    },
})