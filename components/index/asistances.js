Vue.component('asistances',{
    template: /*html*/`
        <section id="height-auto" class="pt-4 pb-4 pt-md-11 pb-md-11 bg-linear-gradiente-red">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-12 col-md-12 text-center text-md-center">
                        <h1 class="text-white text-comfortaa">{{ title }}</h1>
                        <h4 class="text-white text-raleway">{{ textDesc }}</h4>
                    </div>
                </div>
                <div class="row align-items-center justify-content-center pt-5 pb-3">
                    <div class="col-12 col-md-2 text-center text-md-center">
                        <h1 class="text-white">
                            <i class="fa fa-user-md"></i>
                        </h1>
                        <hr class="hr-sm hr-border-white">
                        <h5 class="text-white text-raleway">{{asistance.asistance_1}}</h5>
                    </div>
                    <div class="col-12 col-md-2 text-center text-md-center">
                        <h1 class="text-white">
                            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-people-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/>
                            </svg>
                        </h1>
                        <hr class="hr-sm hr-border-white">
                        <h5 class="text-white text-raleway">{{asistance.asistance_2}}</h5>
                    </div>
                    <div class="col-12 col-md-2 text-center text-md-center">
                        <h1 class="text-white">
                            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-heart-half" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M8 1.314C3.562-3.248-7.534 4.735 8 15V1.314z"/>
                                <path fill-rule="evenodd" d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                            </svg>
                        </h1>
                        <hr class="hr-sm hr-border-white">
                        <h5 class="text-white text-raleway">{{asistance.asistance_3}}</h5>
                    </div>
                    <div class="col-12 col-md-2 text-center text-md-center">
                        <h1 class="text-white">
                            <i class="fa fa-paw"></i>
                        </h1>
                        <hr class="hr-sm hr-border-white">
                        <h5 class="text-white text-raleway">{{asistance.asistance_4}}</h5>
                    </div>
                    <div class="col-12 col-md-2 text-center text-md-center">
                        <h1 class="text-white">
                            <i class="fa fa-phone"></i>
                        </h1>
                        <hr class="hr-sm hr-border-white">
                        <h5 class="text-white text-raleway">{{asistance.asistance_5}}</h5>
                    </div>
                </div>
                <div class="row align-items-center justify-content-center pt-4">
                    <div class="col-12 col-md-12 text-center text-md-center">
                        <a href="planes" class="btn btn-outline-light lift">{{btnAsistance}}</a>
                    </div>
                </div>
            </div>
        </section>
    `,
    data(){
        return{
            title: 'Exclusivas Asistencias para ti y toda tu familia',
            textDesc: 'Hay momentos únicos para vivirlos una y otra vez.',
            asistance:{
                asistance_1: 'Médica',
                asistance_2: 'Desempleo',
                asistance_3: 'Tercera Edad',
                asistance_4: 'Para Mascota',
                asistance_5: 'Telefónica'
            },
            btnAsistance: 'Deseo saber mas'
        }
    }
})