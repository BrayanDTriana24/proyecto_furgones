// store.js
import { createStore } from 'vuex'; // Importa createStore desde Vuex

export default createStore({ // Utiliza createStore para crear tu almacén
  state: {
    sesionIniciada: false,
    // ...
  },
  mutations: {
    setSesionIniciada(state, value) {
      state.sesionIniciada = value;
    },
    // ...
  },
  // ...
});
