Vue.component('welcome-plans',{
    template: /*html*/`
        <section class="pt-5 pb-5 pt-md-13 pb-md-11 d-flex vh-100 align-items-center">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-md-12 pt-5 pb-5">
                        <!-- ====== ICON SVG QUIENES SOMOS ====== -->
                        <h1 class="text-center text-orange">
                            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-building" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022zM6 8.694L1 10.36V15h5V8.694zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15z"/>
                                <path d="M2 11h1v1H2v-1zm2 0h1v1H4v-1zm-2 2h1v1H2v-1zm2 0h1v1H4v-1zm4-4h1v1H8V9zm2 0h1v1h-1V9zm-2 2h1v1H8v-1zm2 0h1v1h-1v-1zm2-2h1v1h-1V9zm0 2h1v1h-1v-1zM8 7h1v1H8V7zm2 0h1v1h-1V7zm2 0h1v1h-1V7zM8 5h1v1H8V5zm2 0h1v1h-1V5zm2 0h1v1h-1V5zm0-2h1v1h-1V3z"/>
                            </svg>
                        </h1>
                        <!-- ====== TEXT HEADING ====== -->
                        <h1 class="text-center text-orange text-md-center mb-2 text-comfortaa"> {{ title }} </h1>
                        <p class="text-center text-muted text-md-center mb-2 text-raleway"> {{ textDesc }} </p>                     
                    </div>
                </div>  
            </div>
        </section>
    `,
    data(){
        return {
            title: 'Conoce los planes exequiales y las asistencias que te ofrecen Los Olivos',
            textDesc: 'Queremos protegerte y acompañarte en cada momento, por eso y pensando en tu bienestar y en el de los que amas hemos diseñados gran variedad de productos que se ajustan a tus necesidades.',
        }
    },
})