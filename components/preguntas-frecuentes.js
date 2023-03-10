Vue.component('preguntas-frecuentes',{
    template: /*html*/`
        <section id="height-auto" class="pt-4 pb-4 pt-md-13 pb-md-11">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-12 col-md-12 order-md-2 text-center">
                        <h1 class="text-left text-md-center text-green-light text-comfortaa">
                            {{ title }}
                        </h1>
                        <hr class="hr-sm hr-border-green-light">
                        <div class="accordion" id="accordionExample">
                            <div class="card" v-for="answer of questions">
                                <div class="card-header" v-bind:id="answer.idCard">
                                    <h2 class="mb-0 text-comfortaa">
                                        <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" v-bind:data-target="answer.target" aria-expanded="false" v-bind:aria-controls="answer.collapse">
                                            {{ answer.question }}
                                        </button>
                                    </h2>
                                </div>
                                <div v-bind:id="answer.idCard" class="text-left text-md-left collapse show" v-bind:aria-labelledby="answer.idCard" data-parent="#accordionExample">
                                    <div class="card-body text-raleway">
                                        <p>{{ answer.rta }}</p>
                                        <a v-bind:href="answer.linkOne">{{ answer.linkDesc }}</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `,
    data(){
        return {
            title: 'Preguntas frecuentes',
            questions:[
                {idCard:'headingOne', target:'#collapseOne', collapse:'collapseOne', question: '1. ??Que debo hacer cuando un ser querido fallece en casa?', rta: 'Validar con el m??dico tratante para que pueda emitir el certificado de defunci??n, de no ser as??, se deber?? comunicar con la polic??a para solicitar la respectiva visita de inspecci??n para posteriormente que un m??dico emita el certificado de defunci??n. En el caso que no se pueda emitir el certificado de defunci??n por concepto medio el ser querido fallecido ser?? trasladado a medicina legal, para realizar el proceso de necropsia y poder emitir el certificado de defunci??n. Una vez se tenga el certificado de defunci??n deber?? informar a la funeraria para proceder con la Prestacion del homenaje.'},
                {idCard:'headingTwo', target:'#collapseTwo', collapse:'collapseTwo', question: '2. ??Qu?? debo hacer cuando un ser querido fallece en hospital o cl??nica?', rta: 'Deber?? solicitar al m??dico de turno o tratante la emisi??n del certificado de defunci??n y contactar a la funeraria para iniciar la Prestacion del homenaje.'},
                {idCard:'headingThree', target:'#collapseThree', collapse:'collapseThree', question: '3. ??C??mo puedo realizar el pago de la cuota del plan exequial?', rta: 'El pago de las cuotas del plan exequial lo puede realizar por los siguientes canales: - EFECTY O DIMONEX a Nivel nacional (C??digo 111131 + n??mero de cedula del titular). - Consuerte en el Departamento del Meta (n??mero de cedula) - Gane en el Departamento del Casanare, Guaviare y Guain??a (n??mero de cedula). - BALOTO a Nivel nacional (C??digo 951530 + n??mero de cedula del titular). - PSE a Nivel nacional si cuenta con una cuenta bancaria o una tarjeta de cr??dito.'},
                {idCard:'headingFour', target:'#collapseFour', collapse:'collapseFour', question: '4. ??Que sucede si me atraso en mis cuotas del plan exequial?', rta: 'El plan exequial para poder utilizarse deber?? mantener al d??a, en el caso que por alg??n motivo no pague oportunamente se aplicaran unos d??as de carencia.'},
                {idCard:'headingFive', target:'#collapseFive', collapse:'collapseFive', question: '5. ??C??mo puedo actualizar mis datos y los beneficiarios de mi plan exequias?', rta: 'La actualizaci??n de datos la puede realizar en cualquier momento del a??o en nuestras oficinas o en el formulario de actualizaci??n de datos que se encuentra en la parte inferior. Con respecto a la actualizaci??n de los beneficiarios, ??nicamente se podr?? realizar durante el mes de renovaci??n o vigencia, acerc??ndose a nuestras oficinas o en el formulario continuidad del plan.', linkDesc:'Formulario Actualizaci??n de datos - Formulario Actualizac??n Beneficiarios', linkOne:'continuidad-plan.html'},
                {idCard:'headingSix', target:'#collapseSix', collapse:'collapseSix', question: '6. ??C??mo puedo saber mi cuota, el valor que debo o a quien tengo protegido?', rta: 'Esta informaci??n se podr?? obtener llamando a nuestra l??nea 018000915286 siguiendo las opciones respectivas, acerc??ndose a nuestras oficinas o descargando nuestra APP LOS OLIVOS VILLAVICENCIO, Disponible en play store (Android).'},
                {idCard:'headingSeven', target:'#collapseSeven', collapse:'collapseSeven', question: '7. ??D??nde puedo llamar a reportar un homenaje?', rta: 'El homenaje de su ser querido podr?? reportarlo en nuestra l??nea 018000915286 opci??n 1, o llamando a los siguientes n??meros de celular', linkDesc:'Numeros de homenajes', linkOne:'sedes.html'}
            ],
        }
    },
})