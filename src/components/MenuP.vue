<template>
  <v-toolbar  
      dark
      prominent
      image="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
  v-img src="../assets/furgones.jpg">
      <template v-slot:prepend>
        <v-btn icon="mdi mdi-shield-home"></v-btn>
      </template>
  
      <v-list-item
          prepend-icon="mdi mdi-login"
          title="Iniciar Sesión"
          value="Login"
          router-link to="/LoginP"
          style="margin-top: 5px;"
        ></v-list-item>

        <v-list-item
          prepend-icon="mdi mdi-logout"
          title="Cerrar Sesión"
          value="Cerrar_sesion"
          router-link to="/"
          style="margin-top: 5px;"
        ></v-list-item>
  
      <template v-if="$vuetify.display.smAndUp">
        <v-divider
          class="mx-3 align-self-center"
          length="24"
          thickness="2"
          color="blue-accent-4"
          vertical
        ></v-divider>
  
      </template>
    </v-toolbar>
  
    <v-carousel show-arrows="hover">
      <v-carousel-item
    src="../assets/Furgones1.jpg"
    cover
  ></v-carousel-item>

  <v-carousel-item
    src="../assets/Furgones2.jpg"
    cover
  ></v-carousel-item>

      <v-carousel-item
    src="../assets/Furgones3.jpg"
    cover
  ></v-carousel-item>

  <v-carousel-item
    src="../assets/Furgones4.jpg"
    cover
  ></v-carousel-item>

  <v-carousel-item
    src="../assets/Furgones5.jpg"
    cover
  ></v-carousel-item>
</v-carousel>
  
    <v-footer class="bg-grey-lighten-1">
    <v-row justify="center" no-gutters >
      <v-btn
        v-for="link in links"
        :key="link"
        color="white"
        variant="text"
        class="mx-2"
        rounded="xl"
        height="1"
      >
        {{ link }}
      </v-btn>
      <v-col class="text-center mt-4" cols="12">
        {{ new Date().getFullYear() }} — <strong>FURGOSANDER S. A. S</strong>
      </v-col>
    </v-row>
  </v-footer>

  </template>
  
  <script>
    export default {
      data: () => ({
        cards: [
          { title: 'Nuestros furgones', src: 'https://transfrioh5.com/wp-content/uploads/2022/09/SLIDER1.jpg', flex: 12 },
          
        ],
      }),
    }
  </script>