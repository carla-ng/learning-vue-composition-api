import { createStore } from 'vuex'

export default createStore({
  state: {
    todos: [
      { id: '1', text: 'Collect all the Infinity Stones', completed: false },
      { id: '2', text: 'Soul stone', completed: true },
      { id: '3', text: 'Power stone', completed: true },
      { id: '4', text: 'Reality stone', completed: false },
      { id: '5', text: 'Find new allies', completed: false }
    ]
  },
  mutations: {
  },
  actions: {
  },
  getters: {
    pendingTodos( state, getters, rootState ) {
      return state.todos.filter( todo => !todo.completed )
    },
    allTodos( state, getters, rootState ) {
      return state.todos
    },
    completedTodos( state, getters, rootState ) {
      return state.todos.filter( todo => todo.completed )
    }
  },
  modules: {
  }
})
