<template>

  <div>
      <v-toolbar
        dark
        prominent
        
      >
        
  
        <v-toolbar-title>FURGONES</v-toolbar-title>
  
        <v-spacer></v-spacer>
  
    
      </v-toolbar>
            
              <v-sheet
                :elevation="elevation"
                class="mx-auto"
                height="100%"
                width="100%"
  
  
      border="lg opacity-12"
      max-width="550"
    > <v-img src="../assets/furgones.jpg"></v-img>
      
              </v-sheet>
            </div>
            <div>
<v-container class="text-center">
     
  
  <v-row justify="center">
    <v-col cols="12" sm="6" md="4">
      <v-btn block rounded="0" size="x-large" to="">NHR</v-btn>
    </v-col>

    <v-col cols="12" sm="6" md="4">
      <v-btn block rounded="xs" size="x-large" to="/src/components/Furgones/furgon_2.vue">NPR</v-btn>
    </v-col>

    <v-col cols="12" sm="6" md="4">
      <v-btn block rounded="sm" size="x-large" to="/src/components/Furgones/furgon_3.vue">NQR</v-btn>
    </v-col>

    <v-col cols="12" sm="6" md="4">
      <v-btn block size="x-large" to="/src/components/Furgones/furgon_4.vue">NRR</v-btn>
    </v-col>

    <v-col cols="12" sm="6" md="4">
      <v-btn block rounded="lg" size="x-large" to="/src/components/Furgones/furgon_5.vue">NLR</v-btn>
    </v-col>

    <v-col cols="12" sm="6" md="4">
      <v-btn block rounded="lg" size="x-large" to="/src/components/Furgones/furgon_6.vue">NKR</v-btn>
    </v-col>
  </v-row>
</v-container>
</div>
</template>
  
  <script>
  export default {
    data: () => ({
      elevations: [0, 4, 8, 12, 16, 20],
    }),
  }
  </script>