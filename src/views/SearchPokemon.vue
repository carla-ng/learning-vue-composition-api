<template>
    <h1>Search Pokémon: {{ pokemonId }}</h1>
    <form @submit.prevent="onSubmit">
        <input type="number"
               placeholder="Pokémon number"
               autofocus
               v-model="pokemonId"
               ref="textSearchId"
        >
    </form>

    <br>

    <span>Press Enter to search</span>
</template>

<script>
import { ref, onActivated } from 'vue'
import { useRouter } from 'vue-router'

export default {
    setup() {

        const router = useRouter()
        const pokemonId = ref(1)
        const textSearchId = ref() 

        onActivated(() => {
            textSearchId.value.select()
        })
        
        return {
            pokemonId,
            textSearchId,

            onSubmit: () => {
                //console.log(pokemonId.value)
                router.push({ name: 'pokemon-id', params: { id: pokemonId.value } })
            }
        }
    }
}
</script>

<style>

</style>