Vue.component('red-olivos',{
    template: /*html*/`
        <section>
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-12 col-md-7 order-md-2">
                        <!-- ====== MAPA RED OLIVOS ====== -->
                        <img class="w-100" src="images/redOlivos.png">
                    </div>
                    <div class="col-12 col-md-5 order-md-1">
                        <!-- ====== TEXT HEADING ====== -->
                        <h1 class="text-center text-green-light text-comfortaa">{{title}}</h1>
                        <hr class="hr-sm hr-border-green-light">
                        <p class="text-justify text-md-justify text-muted text-raleway">{{textDesc}}</p>
                    </div>
                </div>
                <div class="row pt-5 pb-5 pt-md-11 pb-md-11 align-items-center">
                    <div class="col-12 col-md-12">
                        <h1 class="text-center text-md-center text-comfortaa text-green-light">{{ titleHistory }} </h1>
                        <hr class="hr-sm hr-border-green-light">
                        <p class="text-justify text-md-justify text-muted text-raleway">{{textHistory}}</p>
                    </div>
                </div>
            </div>
        </section>
    `,
    data(){
        return {
            title: 'Red Olivos',
            textDesc: 'Los Olivos es la RED de Servicios Funerarios más importante de Colombia: Con la mayor cobertura geográfica nacional, más de 6 millones de personas protegidas, 16 sedes regionales, más de 283 salas de homenajes propias, 253 convenios, 13 hornos crematorios, 10 parques cementerios, 179 carrozas y más de 1.810 empleados directos. Garantizamos los espacios necesarios para que puedan brindar a sus seres queridos un digno homenaje a su legado de vida.',
            titleHistory: 'Historia',
            textHistory:'Hace unos años en el Valle del Cauca un grupo de cooperativistas se reveló contra lo que era un abuso intolerable en sus vidas: la forma en que muchas funerarias se aprovechaban de la vulnerabilidad de las familias cuando estas perdían a uno de sus miembros. En esos momentos, con el dolor encima y la necesidad de despedir dignamente al familiar, con frecuencia las funerarias llegaban a sacar el máximo provecho de las personas que no estaban en posición de negociar adecuadamente, se requería proteger a los asociados. Idearon entonces un mecanismo para que sus asociados y su núcleo familiar tuvieran una protección exequial mediante el pago de una módica suma mensual que cubriera los gastos funerarios cuando se presentara una defunción. Fue una gran innovación que denominó Plan Familiar en Grupo. Por otro lado, ante la falta de regulación de los servicios exequiales, decidieron montar sus propias funerarias cuya función sería dignificar la prestación del servicio y asistir con sentido humano a los familiares del difunto. Con innovación y compasión ante el dolor humano, se creó una marca que es hoy líder en la prestación de servicios funerarios y previsión exequial en Colombia, presente en todo el territorio nacional con más de 261 salas de velación propias y aproximadamente 650 en convenio. Esa marca se llama Los Olivos. Demuestra que la solidaridad vale la pena, porque las personas aprecian cuando se les trata con humanidad.'
        }
    },
})