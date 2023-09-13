<template>
   <LoginP></LoginP>
   <MenuP></MenuP>
  
</template>

<script>
/* import HelloWorld from './components/HelloWorld.vue' */
/* import Compras_Com from './components/Compras_Com.vue';
import Ventas_Com from './components/Ventas_Com.vue'; */
import LoginP from './components/LoginP.vue';
import MenuP from './components/MenuP.vue';

export default {
  name: 'App',

  components: {
    LoginP,
    MenuP
   /*  HelloWorld, */
   /*  Compras_Com,
    Ventas_Com */ 
  },

  data () {
  return {
    drawer: true,
    rail: true,
  }
},
}
</script>
