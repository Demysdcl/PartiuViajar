Vue.component('v-input', {
    props: ['label', 'value'],
    template: `
        <div class="input-group mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text">{{label}}</span>
            </div>
            <input class="form-control" type="text" :value="value" 
                @input="$emit('input', $event.target.value
                )">
            </input>
        </div> 
    `
})

new Vue({
    el: '#app',
    data: {
        title: 'Partiu Viajar',
        travel: {
            name: '',
            date: '',
            destination: '',
            car: '',
            hotel: ''
        },
        status: ''
    },
    computed: {
        keys() {
            return Object.keys(this.travel) 
        }
    },
    methods: {
        toLabel(key) {
            switch(key) {
                case 'name': return 'Nome'
                case 'date': return 'Data'
                case 'destination': return 'Destino'
                case 'car': return 'Carro'
                case 'hotel': return 'Hotel'                    
            }
        },
        booking() {
            console.log(this.travel)
            this.status = 'processando...'

            setTimeout(() => {
                this.status = 'agendamento realizado'
            }, 5000)

            // const config = {
            //     method: 'POST',
            //     body: this.travel
            // }
            // fetch(url, config)
            //     .then(resp => resp.json())
            //     .then()

        }
    },
})