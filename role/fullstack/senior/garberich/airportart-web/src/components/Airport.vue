<template>
    <div>
        <h3>Hola</h3>
        <div v-bind:key="airport.Id" class="airports" v-for="airport in airports">
            <h3>{{airport.Name}}</h3>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
const headers = {
    "Content-Type": "Access-Control-Allow-Origin"
};
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Airport',
    data(){
        return{
            airports: null
        }
    },
    mounted(){
        let vue = this
        axios
            .get('http://localhost:8055/items/Airport?sort=PriorityOrder', {headers})
            .then(function(response) {
                const arrOfObj3 = Object.entries(response.data).map(entry => entry[1]);
                vue.airports = arrOfObj3[0]
            })
    }
}
</script>

<style scoped>

</style>
