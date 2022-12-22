Vue.component('actualizacion-rte',{
    template: /*html*/`
        <section id="height-auto" class="pt-4 pb-4 pt-md-13 pb-md-11">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-12 col-md-12 pt-5">
                        <h1 class="text-left text-md-center text-green-light text-comfortaa">
                            {{ titleRTE2019 }}
                        </h1>
                        <hr class="hr-sm hr-border-green-light">
                        <h3 class="text-left text-md-left text-comfortaa text-green-apple-light">
                            {{ subtitleRTEtitleRTE2021 }}
                        </h3>
                        <ul class="list-group list-group-flush  text-muted text-raleway">
                            <li class="list-group-item text-left text-md-left" v-for="rte of textDescRTE2021">
                                {{ rte.linkDesc }}
                                <a v-bind:href="rte.idUrl" target="_blank"><i class="fa fa-file-o float-right"></i></a>
                            </li>
                        </ul><br>
                        <hr class="hr-sm hr-border-green-light">
                        <h3 class="text-left text-md-left text-comfortaa text-green-apple-light">
                            {{ subtitleRTEtitleRTE2020 }}
                        </h3>
                        <ul class="list-group list-group-flush  text-muted text-raleway">
                            <li class="list-group-item text-left text-md-left" v-for="rte of textDescRTE2020">
                                {{ rte.linkDesc }}
                                <a v-bind:href="rte.idUrl" target="_blank"><i class="fa fa-file-o float-right"></i></a>
                            </li>
                        </ul><br>
                        <h3 class="text-left text-md-left text-comfortaa text-green-apple-light">
                            {{ subtitleRTEtitleRTE2019 }}
                        </h3>
                        <ul class="list-group list-group-flush  text-muted text-raleway">
                            <li class="list-group-item text-left text-md-left" v-for="rte of textDescRTE2019">
                                {{ rte.linkDesc }}
                                <a v-bind:href="rte.idUrl" target="_blank"><i class="fa fa-file-o float-right"></i></a>
                            </li>
                        </ul><br>
                        <h3 class="text-left text-md-left text-comfortaa text-green-apple-light">
                            {{ subtitleRTEtitleRTE2018 }}
                        </h3>
                        <ul class="list-group list-group-flush text-muted text-raleway">
                            <li class="list-group-item text-left text-md-left" v-for="rte of textDescRTE2018">
                                {{ rte.linkDesc }}
                                <a v-bind:href="rte.idUrl" target="_blank"><i class="fa fa-file-o float-right"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    `,
    data(){
        return {
            titleRTE2019: 'Actualización RTE',
            subtitleRTEtitleRTE2021: 'Actualización RTE 2021',
            textDescRTE2021:[
                {linkDesc: 'CERTIFICACIÓN CARGOS DIRECTIVOS Y GERENCIALES 2021', idUrl: 'pdf/01_CERTIFICACIÓN CARGOS DIRECTIVOS Y GERENCIALES_2021.pdf'},
                {linkDesc: 'MEMORIA ECONOMICA 2021', idUrl: 'pdf/02_MEMORIA ECONOMICA_2021.pdf'},
                {linkDesc: 'INFORME DE GESTION 2021', idUrl: 'pdf/03_INFORME DE GESTION_2021.pdf'},
                {linkDesc: 'ESTADOS FINANCIERO A 31 DE DICIEMBRE 2021', idUrl: 'pdf/04_ESTADOS FINANCIERO A 31 DE DICIEMBRE_2021.pdf'},
                {linkDesc: 'CERTIFICACIÓN CUMPLIMIENTO REQUISITOS RTE 2021', idUrl: 'pdf/05_CERTIFICACIÓN CUMPLIMIENTO REQUISITOS RTE_2021.pdf'},
                {linkDesc: 'CERTIFICACION DE ANTECEDENTES 2021', idUrl: 'pdf/06_CERTIFICACIONDE ANTECEDENTES_2020.pdf'},
                {linkDesc: 'EXTRACTO ACTA No 033 XXXI ASAMBLEA GENERAL 2021', idUrl: 'pdf/07_EXTRACTO ACTA No 033 XXXI ASAMBLEA GRAL_2021.pdf'},
                {linkDesc: 'FORMATO 5245 y 2531 de 2021', idUrl: 'pdf/08_FORMATO_5245_y_2531_2020.pdf'},
            ],
            subtitleRTEtitleRTE2020: 'Actualización RTE 2020',
            textDescRTE2020:[
                {linkDesc: 'CERTIFICACIÓN CARGOS DIRECTIVOS Y GERENCIALES', idUrl: 'pdf/01_CERTIFICACIÓN CARGOS DIRECTIVOS Y GERENCIALES_2020.pdf'},
                {linkDesc: 'MEMORIA ECONOMICA', idUrl: 'pdf/02_MEMORIA ECONOMICA_2020.pdf'},
                {linkDesc: 'INFORME DE GESTION', idUrl: 'pdf/03_INFORME DE GESTION_2020.pdf'},
                {linkDesc: 'ESTADOS FINANCIERO A 31 DE DICIEMBRE', idUrl: 'pdf/04_ESTADOS FINANCIERO A 31 DE DICIEMBRE_2020.pdf'},
                {linkDesc: 'CERTIFICACIÓN CUMPLIMIENTO REQUISITOS RTE', idUrl: 'pdf/05_CERTIFICACIÓN CUMPLIMIENTO REQUISITOS RTE_2020.pdf'},
                {linkDesc: 'CERTIFICACION DE ANTECEDENTES', idUrl: 'pdf/06_CERTIFICACIONDE ANTECEDENTES_2020.pdf'},
                {linkDesc: 'EXTRACTO ACTA No 031 XXIX ASAMBLEA GENERAL', idUrl: 'pdf/07_EXTRACTO ACTA No 031 XXIX ASAMBLEA GENERAL_2020'},
                {linkDesc: 'FORMATO 5245 y 2531', idUrl: 'pdf/08_FORMATO_5245_y_2531_2020.pdf'},
            ],
            subtitleRTEtitleRTE2019: 'Actualización RTE 2019',
            textDescRTE2019:[
                {linkDesc: 'CAMARA COMERCIO', idUrl: 'pdf/CAMARA COMERCIO.pdf'},
                {linkDesc: 'CERTIFICACIÓN ANTECEDENTES Y DECLARACIÓN DE CADUCIDAD', idUrl: 'pdf/CERTIFICACIÓN ANTECEDENTES Y DECLARACIÓN DE CADUCIDAD.pdf'},
                {linkDesc: 'CERTIFICACIÓN CUMPLIMIENTO REQUISITOS REVISOR FISCAL', idUrl: 'pdf/CERTIFICACIÓN CUMPLIMIENTO REQUISITOS REVISOR FISCAL.pdf'},
                {linkDesc: 'CERTIFICACIÓN REMUN CARGOS DIRECTIVOS Y GERENCIALES', idUrl: 'pdf/CERTIFICACIÓN REMUN CARGOS DIRECTIVOS Y GERENCIALES.pdf'},
                {linkDesc: 'ESTADOS FINANCIERON A 31 DE DICIMBRE 2019', idUrl: 'pdf/ESTADOS FINANCIERON A 31 DE DICIMBRE 2019.pdf'},
                {linkDesc: 'EXTRACTO ACTA NO 030 XXVIII ASAMBLEA GENERAL', idUrl: 'pdf/EXTRACTO ACTA NO 030 XXVIII ASAMBLEA GENERAL.pdf'},
                {linkDesc: 'FORMATO 2530_FUNDADORES', idUrl: 'pdf/FORMATO 2530_FUNDADORES.pdf'},
                {linkDesc: 'FORMATO 2531_CARGOS', idUrl: 'pdf/FORMATO 2531_CARGOS.pdf'},
                {linkDesc: 'FORMATO 52451000952188', idUrl: 'pdf/FORMATO 52451000952188.pdf'},
                {linkDesc: 'INFORME ANUAL DE RESULTADOS O DE GESTIÓN', idUrl: 'pdf/INFORME ANUAL DE RESULTADOS O DE GESTIÓN.pdf'},
                {linkDesc: 'MEMORIA ECONOMICA', idUrl: 'pdf/MEMORIA ECONOMICA.pdf'}
            ],
            subtitleRTEtitleRTE2019: 'Actualización RTE 2019',
            textDescRTE2019:[
                {linkDesc: 'CAMARA COMERCIO', idUrl: 'pdf/CAMARA COMERCIO.pdf'},
                {linkDesc: 'CERTIFICACIÓN ANTECEDENTES Y DECLARACIÓN DE CADUCIDAD', idUrl: 'pdf/CERTIFICACIÓN ANTECEDENTES Y DECLARACIÓN DE CADUCIDAD.pdf'},
                {linkDesc: 'CERTIFICACIÓN CUMPLIMIENTO REQUISITOS REVISOR FISCAL', idUrl: 'pdf/CERTIFICACIÓN CUMPLIMIENTO REQUISITOS REVISOR FISCAL.pdf'},
                {linkDesc: 'CERTIFICACIÓN REMUN CARGOS DIRECTIVOS Y GERENCIALES', idUrl: 'pdf/CERTIFICACIÓN REMUN CARGOS DIRECTIVOS Y GERENCIALES.pdf'},
                {linkDesc: 'ESTADOS FINANCIERON A 31 DE DICIMBRE 2019', idUrl: 'pdf/ESTADOS FINANCIERON A 31 DE DICIMBRE 2019.pdf'},
                {linkDesc: 'EXTRACTO ACTA NO 030 XXVIII ASAMBLEA GENERAL', idUrl: 'pdf/EXTRACTO ACTA NO 030 XXVIII ASAMBLEA GENERAL.pdf'},
                {linkDesc: 'FORMATO 2530_FUNDADORES', idUrl: 'pdf/FORMATO 2530_FUNDADORES.pdf'},
                {linkDesc: 'FORMATO 2531_CARGOS', idUrl: 'pdf/FORMATO 2531_CARGOS.pdf'},
                {linkDesc: 'FORMATO 52451000952188', idUrl: 'pdf/FORMATO 52451000952188.pdf'},
                {linkDesc: 'INFORME ANUAL DE RESULTADOS O DE GESTIÓN', idUrl: 'pdf/INFORME ANUAL DE RESULTADOS O DE GESTIÓN.pdf'},
                {linkDesc: 'MEMORIA ECONOMICA', idUrl: 'pdf/MEMORIA ECONOMICA.pdf'}
            ],
            subtitleRTEtitleRTE2018: 'Actualización RTE 2018',
            textDescRTE2018:[
                {linkDesc: 'Camara Comercio Serfunllanos Marzo', idUrl: 'pdf/Camara Comercio Serfunllanos Marzo.pdf'},
                {linkDesc: 'Certificado Antecedentes', idUrl: 'pdf/Certificado Antecedentes.pdf'},
                {linkDesc: 'Cumplimiento requisitos RTE por Rev Fiscal ', idUrl: 'pdf/Cumplimiento requisitos RTE por Rev Fiscal.pdf'},
                {linkDesc: 'EF A 31 DE DICIEMBRE 2018 - DIAN', idUrl: 'pdf/EF A 31 DE DICIEMBRE 2018 - DIAN.pdf'},
                {linkDesc: 'Extracto acta No. 029 distribución excedentes', idUrl: 'pdf/Extracto acta No. 029 distribución excedentes.pdf'},
                {linkDesc: 'INFORME DE GESTION 2018 DIAN', idUrl: 'pdf/INFORME DE GESTION 2018 DIAN.pdf'},
                {linkDesc: 'Memoria económica', idUrl: 'pdf/Memoria económica.pdf'},
                {linkDesc: 'Remuneración cargos directivos y gerenciales', idUrl: 'pdf/Remuneración cargos directivos y gerenciales.pdf'},
            ],
        }
    },
})