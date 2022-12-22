Vue.component('btn-refresh-cache',{
    template: /*HTML*/`
        <button class="container-refresh-cache btn btn-primary" target="_blank" @click="location.reload()">
            Limpiar caché
        </button>
    `
})