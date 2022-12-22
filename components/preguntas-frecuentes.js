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
                {idCard:'headingOne', target:'#collapseOne', collapse:'collapseOne', question: '1. ¿Que debo hacer cuando un ser querido fallece en casa?', rta: 'Validar con el médico tratante para que pueda emitir el certificado de defunción, de no ser así, se deberá comunicar con la policía para solicitar la respectiva visita de inspección para posteriormente que un médico emita el certificado de defunción. En el caso que no se pueda emitir el certificado de defunción por concepto medio el ser querido fallecido será trasladado a medicina legal, para realizar el proceso de necropsia y poder emitir el certificado de defunción. Una vez se tenga el certificado de defunción deberá informar a la funeraria para proceder con la Prestacion del homenaje.'},
                {idCard:'headingTwo', target:'#collapseTwo', collapse:'collapseTwo', question: '2. ¿Qué debo hacer cuando un ser querido fallece en hospital o clínica?', rta: 'Deberá solicitar al médico de turno o tratante la emisión del certificado de defunción y contactar a la funeraria para iniciar la Prestacion del homenaje.'},
                {idCard:'headingThree', target:'#collapseThree', collapse:'collapseThree', question: '3. ¿Cómo puedo realizar el pago de la cuota del plan exequial?', rta: 'El pago de las cuotas del plan exequial lo puede realizar por los siguientes canales: - EFECTY O DIMONEX a Nivel nacional (Código 111131 + número de cedula del titular). - Consuerte en el Departamento del Meta (número de cedula) - Gane en el Departamento del Casanare, Guaviare y Guainía (número de cedula). - BALOTO a Nivel nacional (Código 951530 + número de cedula del titular). - PSE a Nivel nacional si cuenta con una cuenta bancaria o una tarjeta de crédito.'},
                {idCard:'headingFour', target:'#collapseFour', collapse:'collapseFour', question: '4. ¿Que sucede si me atraso en mis cuotas del plan exequial?', rta: 'El plan exequial para poder utilizarse deberá mantener al día, en el caso que por algún motivo no pague oportunamente se aplicaran unos días de carencia.'},
                {idCard:'headingFive', target:'#collapseFive', collapse:'collapseFive', question: '5. ¿Cómo puedo actualizar mis datos y los beneficiarios de mi plan exequias?', rta: 'La actualización de datos la puede realizar en cualquier momento del año en nuestras oficinas o en el formulario de actualización de datos que se encuentra en la parte inferior. Con respecto a la actualización de los beneficiarios, únicamente se podrá realizar durante el mes de renovación o vigencia, acercándose a nuestras oficinas o en el formulario continuidad del plan.', linkDesc:'Formulario Actualización de datos - Formulario Actualizacón Beneficiarios', linkOne:'continuidad-plan.html'},
                {idCard:'headingSix', target:'#collapseSix', collapse:'collapseSix', question: '6. ¿Cómo puedo saber mi cuota, el valor que debo o a quien tengo protegido?', rta: 'Esta información se podrá obtener llamando a nuestra línea 018000915286 siguiendo las opciones respectivas, acercándose a nuestras oficinas o descargando nuestra APP LOS OLIVOS VILLAVICENCIO, Disponible en play store (Android).'},
                {idCard:'headingSeven', target:'#collapseSeven', collapse:'collapseSeven', question: '7. ¿Dónde puedo llamar a reportar un homenaje?', rta: 'El homenaje de su ser querido podrá reportarlo en nuestra línea 018000915286 opción 1, o llamando a los siguientes números de celular', linkDesc:'Numeros de homenajes', linkOne:'sedes.html'}
            ],
        }
    },
})