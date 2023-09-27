<template>
  <v-app>
    <v-navigation-drawer color="#2962FF" v-model="drawer" :rail="rail" permanent @click="rail = false" position="top">
      <v-list dense nav >
        <v-list-item @click.stop="rail = !rail"
          prepend-icon="mdi mdi-microsoft-xbox-controller-menu"
          title="FURGOSANDER S. A. S"
          value="Menu"
          style="margin-top: 8px; margin-bottom: 8px; font-size: 20px"
        ></v-list-item>
       
        <v-divider></v-divider>
        <!--MENU-->

        <v-list-item
          prepend-icon="mdi mdi-home-account"
          title="Inicio"
          value="Home"
          router-link to="../"
          style="margin-top: 20px;"
        ></v-list-item>

       
        <!--SUB MENU-->
        <v-list-item-group>
          <v-list-item  
          @click="toggleSubMenu('subMenu1')"
          prepend-icon="mmdi mdi-truck"
          value="Furgones"
          router-link to="/furgones"
          style="margin-bottom: 1px;">
            <v-list-item-content>
              <v-list-item-title >Furgones</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

        
        </v-list-item-group>
        <!-- FINALIZA SUB MENU-->

        <v-list-item
          prepend-icon="mdi-cash"
          title="Proveedores"
          value="Prov"
          router-link to="/prov"
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


export default {
  name: 'App',
  components: {
    
  },

  data() {
    return {
      drawer: true,
      rail: true,
      openSubMenus: [], // Almacena los submenús abiertos
    };
  },
  methods: {
    toggleSubMenu(subMenu) {
      if (this.openSubMenus.includes(subMenu)) {
        // Si el submenú ya está abierto, ciérralo
        const index = this.openSubMenus.indexOf(subMenu);
        this.openSubMenus.splice(index, 1);
      } else {
        // Si el submenú está cerrado, ábrelo
        this.openSubMenus.push(subMenu);
      }
    },
  },
};
</script>