Vue.component('login-olivos',{
    template: /*html*/`
        <section>
            <div class="container-fluid">
                <div class="row vh-100 align-items-center">
                    <div class="col-12 col-md-3">
                        <form id="form-users" class="p-3 text-center">
                            <div class="text-center p-3">
                                <img src="images/logo/iconLogin.png" width="60px">
                            </div>
                            <div class="form-group">
                                <input name="user" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Usuario">
                            </div>
                            <div class="form-group">
                                <input name="pass" type="password" class="form-control" id="exampleInputPassword1" placeholder="Contraseña">
                            </div>
                            <button type="submit" class="btn btn-outline-green">Ingresar</button>
                            <span id="mensaje"></span>
                        </form>
                    </div>
                    <div class="col-12 col-md-9 bg-cementerio-login"></div>
                </div>
            </div>
        </section>
    `
});