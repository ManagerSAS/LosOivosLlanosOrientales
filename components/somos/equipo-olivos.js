Vue.component('equipo-olivos',{
    template: /*html*/`
        <section class="pt-5 pb-5 pt-md-11 pb-md-11">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-12 col-md-6 order-md-2">
                        <img src="images/equipoHomenajes.webp" class="w-100">
                    </div>
                    <div class="col-12 col-md-6 order-md-1">
                        <!-- ====== ICON SVG EQUIPO HOMENAJES ====== -->
                        <h1 class="text-center text-green-light">
                            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-bookmark-heart" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"/>
                                <path fill-rule="evenodd" d="M8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z"/>
                            </svg>
                        </h1>
                        <!-- ====== TEXT HEADING ====== -->
                        <h1 class="text-center text-green-light text-md-center mb-2 text-comfortaa"> {{ homenajes }} </h1>
                        <hr class="hr-sm hr-border-green-light">
                        <p class="text-muted text-justify text-md-justify text-raleway">{{ homenadesDesc }}</p>
                    </div>
                </div>
                <div class="row align-items-center">
                    <div class="col-12 col-md-6 order-md-1">
                        <img src="images/equipoServicioCliente.webp" class="w-100">
                    </div>
                    <div class="col-12 col-md-6 order-md-2">
                        <!-- ====== ICON SVG EQUIPO SERVICIO AL CLIENTE ====== -->
                        <h1 class="text-center text-green-light">
                            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-telephone-plus" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zM12.5 1a.5.5 0 0 1 .5.5V3h1.5a.5.5 0 0 1 0 1H13v1.5a.5.5 0 0 1-1 0V4h-1.5a.5.5 0 0 1 0-1H12V1.5a.5.5 0 0 1 .5-.5z"/>
                            </svg>
                        </h1>
                        <!-- ====== TEXT HEADING ====== -->
                        <h1 class="text-center text-green-light text-md-center mb-2 text-comfortaa"> {{ servicioCliente }} </h1>
                        <hr class="hr-sm hr-border-green-light">
                        <p class="text-justify text-muted text-md-justify text-raleway">{{ servicioClienteDesc }}</p>
                    </div>
                </div>
            </div>
        </section>
    `,
    data(){
        return {
            homenajes: 'Equipo de Homenajes',
            homenadesDesc: 'Los Olivos somos un grupo de más de 1382 profesionales, dispuestos a asistir con respeto y dignidad, para que en los momentos más difíciles se sienta protegido. Nuestra experiencia de más de 36 años, ha merecido la confianza de más de un millón de familias colombianas, porque cada vida por ser vivida merece el más grande homenaje.',
            servicioCliente: 'Equipo de Servicio al cliente',
            servicioClienteDesc: 'Nuestro equipo de servicio al cliente está altamente calificado para una atención cálida, cordial, atenta y acertiva, contactáctalos para cualquier tema de tu plan exequial, seguros de vida o asistencias empresariales e individuales.',
        }
    },
})