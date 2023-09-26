<template>
  <v-toolbar  v-img src="../assets/furgones.jpg">
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
  
    <v-snackbar
        :timeout="2000"
      >
        <template v-slot:activator="{ props }">
          <v-btn class="ma-2" v-bind="props">FURGOSANDER S.A.S.</v-btn>
        </template>
  
        Lorem ipsum dolor sit amet consectetur.
      </v-snackbar>
  
      <v-snackbar
        :timeout="2000"
        color="blue-grey"
        rounded="pill"
      >
        <template >
          <!-- <v-btn rounded="pill" color="blue-grey" class="ma-2" v-bind="props">open</v-btn> -->
        </template>
  
        Snackbar with <strong>rounded="pill"</strong>.
      </v-snackbar>
  
      <v-card
      class="mx-auto"
      width="1600"
      top="100"

    >
      <!-- <v-system-bar
        color="indigo darken-2"
        dark
      >
        <v-spacer></v-spacer>
  
        <v-icon icon="mdi-window-minimize"></v-icon>
  
        <v-icon icon="mdi-window-maximize"></v-icon>
  
        <v-icon icon="mdi-close"></v-icon>
      </v-system-bar>
  
      <v-toolbar
        color="indigo"
        dark
      >
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
  
        <v-toolbar-title>Discover</v-toolbar-title>
  
        <v-spacer></v-spacer>
  
        <v-btn icon="mdi-magnify"></v-btn>
      </v-toolbar> -->
  
      <v-container fluid>
        <v-row dense>
          <v-col
            v-for="card in cards"
            :key="card.title"
            :cols="card.flex"
          >
            <v-card>
              <v-img
                :src="card.src"
                class="align-end"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                height="200px"
                cover
              >
                <v-card-title class="text-white" v-text="card.title"></v-card-title>
              </v-img>
  
              <v-card-actions>
                <v-spacer></v-spacer>
  
                <!-- <v-btn size="small" color="surface-variant" variant="text" icon="mdi-heart"></v-btn> -->
  
                <!-- <v-btn size="small" color="surface-variant" variant="text" icon="mdi-bookmark"></v-btn> -->
  
                <!-- <v-btn size="small" color="surface-variant" variant="text" icon="mdi-share-variant"></v-btn> -->
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  
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