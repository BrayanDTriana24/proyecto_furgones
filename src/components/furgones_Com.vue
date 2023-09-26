<template>

  <div>
      <v-toolbar
        dark
        prominent
        
      >
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
  
        <v-toolbar-title></v-toolbar-title>
  
        <v-spacer></v-spacer>
  
        <v-btn>
          <v-icon></v-icon>
        </v-btn>
      </v-toolbar>
    </div>
    
      <v-container>
        <v-row justify="space-around">
          <v-col
            v-for="elevation in elevations"
            :key="elevation"
            cols="12"
            md="4"
          >
            <v-sheet
              class="pa-12"
              color="grey-lighten-3"
            >
              <v-sheet
                :elevation="elevation"
                class="mx-auto"
                height="100"
                width="100"
  
  
      border="lg opacity-12"
      max-width="550"
    >
      
              ></v-sheet>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </template>
  
  <script>
  export default {
    data: () => ({
      elevations: [0, 4, 8, 12, 16, 20],
    }),
  }
  </script>