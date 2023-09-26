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
      <v-btn block rounded="0" size="x-large">NHR</v-btn>
    </v-col>

    <v-col cols="12" sm="6" md="4">
      <v-btn block rounded="xs" size="x-large">NPR</v-btn>
    </v-col>

    <v-col cols="12" sm="6" md="4">
      <v-btn block rounded="sm" size="x-large">NQR</v-btn>
    </v-col>

    <v-col cols="12" sm="6" md="4">
      <v-btn block size="x-large">NRR</v-btn>
    </v-col>

    <v-col cols="12" sm="6" md="4">
      <v-btn block rounded="lg" size="x-large">NLR</v-btn>
    </v-col>

    <v-col cols="12" sm="6" md="4">
      <v-btn block rounded="lg" size="x-large">NKR</v-btn>
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