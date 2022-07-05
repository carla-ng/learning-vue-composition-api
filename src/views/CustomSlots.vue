<template>
  <h1>Learning slots</h1>
  <button @click="openPopup">Open popup</button>

  <popup v-if="isOpen"
         title="Hello World"
         otherTitle="Other Title"
         @on:close="closePopup">
    <!--
    <h1>Title of popup</h1>
    <p>This is the description of our popup</p>
    <button>Close</button>
    -->

    <template v-slot:body>
        <p>This is the description of our popup</p>
    </template>

    <template v-slot:footer>
        <button @click="closePopup">Close</button>
    </template>

    <template v-slot:header>
        <h2>Title of popup</h2>
    </template>

    <template v-slot:exposed="{ newTitle }">
        <h2>{{ newTitle }}</h2>
    </template>
  </popup>
</template>

<script>
import { ref } from 'vue'
import Popup from '../components/Popup.vue'

export default {
    components: { Popup },
    setup() {

        const isOpen = ref(false)

        return {
            isOpen,

            // Methods
            openPopup: () => isOpen.value = true,
            closePopup: () => isOpen.value = false
        }
    }
}
</script>

<style scoped>

</style>