<template>
    <v-app>
    <v-main>  
      <v-card max-width="2000" class="mx-auto" color="indigo-accent-4">
    <v-layout>
      <v-app-bar
        color="teal-darken-4"
        
      >
        <template v-slot:image>
          <v-img
            gradient="to top right, #3D5AFE, #3D5AFE"
          ></v-img>
        </template>

        

          <template v-slot:append>
            <v-btn
              variant="text"
              icon="mdi-chevron-left"
              @click.stop="rail = !rail"
            ></v-btn>
          </template>

        <v-app-bar-title>FURGOSANDER S.A.S</v-app-bar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>mdi-home-circle</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-truck</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-phone</v-icon>
        </v-btn>

      <v-btn icon>
          <v-icon>mdi-account</v-icon>
        </v-btn>
      </v-app-bar>
      <v-app-bar-title style="position: justify-center;">FURGOSANDER S.A.S</v-app-bar-title>
        <v-row>
    <v-col
      v-for="n in 9"
      :key="n"
      class="d-flex child-flex"
      cols="4"
    >
      <v-img
        :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
        :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
        aspect-ratio="1"
        cover
        class="bg-grey-lighten-2"
      >
        <template v-slot:placeholder>
          <v-row
            class="fill-height ma-0"
            align="center"
            justify="center"
          >
            <v-progress-circular
              indeterminate
              color="grey-lighten-5"
            ></v-progress-circular>
          </v-row>
        </template>
      </v-img>
    </v-col>
  </v-row>
     <!--  <v-navigation-drawer
        v-model="drawer"
        :rail="rail"
        permanent
        @click="rail = false"
      >
        
        <v-divider></v-divider> -->

       <!--  <v-list density="compact" nav> -->
          <!-- <v-list-item prepend-icon="mdi-shopping card" title="Compras" value="compras" router-link to="/compras"></v-list-item> -->
          <!-- <v-list-item prepend-icon="mdi-cash" title="Ventas" value="ventas" router-link to="/ventas"></v-list-item> -->

        

        <!-- </v-list> -->
      <!-- </v-navigation-drawer> -->
      <v-main style="height: 500px">
        </v-main>
      <v-img src=""></v-img>
      <v-main style="left: 5%;">
       
      
      </v-main>
    </v-layout>
  </v-card>
  <!-- <HelloWorld/> -->
    </v-main>
  </v-app>
</template>

<script>
  export default {
  name: 'App',
  data () {
  return {
    drawer: true,
    rail: true,
  }
},
}
</script>