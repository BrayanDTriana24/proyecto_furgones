<template>
  <v-app>
    <v-navigation-drawer color="#2962FF" v-model="drawer" :rail="rail" permanent @click="rail = false" position="top" v-if="sesionIniciada">
      <v-list dense nav >
        <v-list-item @click.stop="rail = !rail"
          prepend-icon="mdi mdi-microsoft-xbox-controller-menu"
          title="FURGOSANDER S. A. S"
          value="Menu"
          style="margin-top: 8px; margin-bottom: 8px; font-size: 20px"
          ></v-list-item>
       
        <v-divider></v-divider>
        <!--MENU-->

        <v-list-item @click.stop="rail = !rail"
          prepend-icon="mdi mdi-home-account"
          title="Inicio"
          value="Home"
          router-link to="../"
          style="margin-top: 20px;"
          
          ></v-list-item>

       
        <!--SUB MENU-->
        <v-list-item-group>
          <v-list-item   @click.stop="rail = !rail"
          
          prepend-icon="mmdi mdi-truck"
          value="Furgones"
          router-link to="/furgones"
          style="margin-bottom: 1px;"
          >
            <v-list-item-content>
              <v-list-item-title >Furgones</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

        
        </v-list-item-group>
        <!-- FINALIZA SUB MENU-->

        <v-list-item @click.stop="rail = !rail"
          prepend-icon="mdi mdi-handshake"
          title="Proveedores"
          value="Prov"
          router-link to="/prov"
          style="margin-bottom: 1px"
          ></v-list-item>

        <v-list-item @click.stop="rail = !rail"
          prepend-icon="mdi mdi-null"
          title="Materiales"
          value="Material"
          router-link to="/material"
          style="margin-bottom: 1px"
          ></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'App',

  data() {
    return {
      drawer: true,
      rail: true,
      openSubMenus: [], // Almacena los submenús abiertos
    };
  },
  computed: {
    ...mapState(['sesionIniciada']), // Mapear la variable sesionIniciada desde el store
  },
  methods: {
    // ...
  },
};
</script>