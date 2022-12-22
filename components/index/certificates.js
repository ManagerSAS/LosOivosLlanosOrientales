Vue.component('certificates',{
    template: /*html*/`
        <section id="height-auto" class="pt-4 pb-4 bg-grey">
            <div class="container">
                <div class="row align-items-center">
                    <!-- ====== text heading ====== -->
                    <div class="col-12 col-md-5 text-center">
                        <h1 class="text-muted text-comfortaa">{{ title }}</h1>
                    </div>
                    <!-- ====== certificate 1 ====== -->
                    <div class="col-12 col-md-6 text-center text-md-center my-3">
                        <img src="images/Icontec.png">
                    </div>
                </div>
            </div>
        </section>
    `,
    data(){
        return {
            title: 'Certificaciones',
        }
    }
})