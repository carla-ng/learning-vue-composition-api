<template>
  <h1>Thanos' todo list</h1>
  <h4>Pending: {{ pending.length }} </h4>

  <hr>

    <button 
        :class="{ 'active' : currentTab === 'all' }"
        @click="currentTab = 'all'"
    >
        Todos
    </button>
    <button 
        :class="{ 'active' : currentTab === 'pending' }"
        @click="currentTab = 'pending'"
    >
        Pending
    </button>
    <button 
        :class="{ 'active' : currentTab === 'completed' }"
        @click="currentTab = 'completed'"
    >
        Completed
    </button>

    <div>
        <ul>
            <li v-for="todo in getTodosByTab" :key="todo.id"
                :class="{ 'completed': todo.completed }"
                @dblclick="toggleToDo( todo.id )"
            >
                {{ todo.text }}
            </li>
        </ul>
    </div>

    <button @click="isOpen=true">Create todo</button>

    <popup v-if="isOpen"
           @on:close="isOpen=false">
        <template v-slot:header>
            <h1>New task</h1>
        </template>

        <template v-slot:body>
            <form @submit.prevent="createToDo(newTodoText); isOpen=false">
                <input type="text"
                       placeholder="Add new task here"
                       v-model="newTodoText">

                <br>
                <br>

                <button type="submit">Create</button>
            </form>
        </template>
    </popup>

</template>

<script>
import useTodos from  '../composables/useTodos'
import Popup from '../components/Popup.vue'
import { ref } from 'vue'

export default {
    components: { Popup },
    setup() {

        const { pending, createToDo, currentTab, getTodosByTab, toggleToDo } = useTodos()

        return {
            pending,
            createToDo,
            currentTab,
            getTodosByTab,
            toggleToDo,

            isOpen: ref(false),
            newTodoText: ref('')
        }
    }
}
</script>

<style scoped>

div {
    display: flex;
    justify-content: center;
    text-align: center;
}

ul {
    width: 300px;
    text-align: left;
}

li {
    cursor: pointer;
}

.active {
    background-color: #2c3e60;
    color: white;
}

.completed {
    text-decoration: line-through;
}

</style>