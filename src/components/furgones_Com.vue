<template>
 <div>
    <v-toolbar
      dark
      prominent
      image="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
    >
      

      <v-toolbar-title>FURGONES</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-export</v-icon>
      </v-btn>
    </v-toolbar>
  </div>
  <div>
      
            
              <v-sheet
                :elevation="elevation"
                class="mx-auto"
                height="100%"
                width="100%"
  
  
      border="lg opacity-12"
      max-width="1550"
    > <v-img src="../assets/furgones.jpg"></v-img>
      
              </v-sheet>
            </div>
            <div>
<v-container class="text-center">
     
  
  <v-row justify="center">
    <v-col cols="12" sm="6" md="4">

      <v-card>
    <v-tabs
      v-model="tab"
      bg-color="primary"
      max-width="1550"
    >
      <v-tab value="one">Item One</v-tab>
      <v-tab value="two">Item Two</v-tab>
      <v-tab value="three">Item Three</v-tab>
    </v-tabs>

    <v-card-text>
      <v-window v-model="tab">
        <v-window-item value="one">
          <ul>    
      
      <v-card
  :loading="loading"
  class="mx-auto my-12"
  max-width="374"
>
  <template v-slot:loader="{ isActive }">
    <v-progress-linear
      :active="isActive"
      color="deep-purple"
      height="4"
      indeterminate
    ></v-progress-linear>
  </template>

  <v-img
    cover
    height="250"
    src="../assets/NHR.png"
  ></v-img>

  <v-card-item>
    <v-card-title>Furgón para Camión</v-card-title>

    <v-card-subtitle>
      <span class="me-1">Turbo</span>

      <v-icon
        color="error"
        icon="mdi-fire-circle"
        size="small"
      ></v-icon>
    </v-card-subtitle>
  </v-card-item>

  <v-card-text>
    <v-row
      align="center"
      class="mx-0"
    >
      <v-rating
        :model-value="4.5"
        color="amber"
        density="compact"
        half-increments
        readonly
        size="small"
      ></v-rating>

      <div class="text-grey ms-4">
        4.5 (413)
      </div>
    </v-row>

    <div class="my-4 text-subtitle-1">
      Camiones
    </div>

    <div>Realización de furgón para camión tipo turbo NHR</div>
  </v-card-text>

  <v-divider class="mx-4 mb-1"></v-divider>

  <v-card-title>Cotización completa</v-card-title>

  <div class="px-4">
    <v-chip-group v-model="selection">
      <v-chip>Material 1
        <v-card>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <v-autocomplete
          v-model="values"
          :items="items"
          label="Default"
        ></v-autocomplete>
      </v-col>

      <v-col cols="12">
        <v-autocomplete
          v-model="values"
          :items="items"
          density="comfortable"
          label="Material"
        ></v-autocomplete>
      </v-col>

      <v-col cols="12">
        <v-autocomplete
          v-model="values"
          :items="items"
          density="compact"
          label="Compact"
        ></v-autocomplete>
      </v-col>
    </v-row>
  </v-container>
</v-card>
      </v-chip>

      <v-chip>Material 2
        <v-card>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <v-autocomplete
          v-model="values"
          :items="items"
          label="Default"
        ></v-autocomplete>
      </v-col>

      <v-col cols="12">
        <v-autocomplete
          v-model="values"
          :items="items"
          density="comfortable"
          label="Material"
        ></v-autocomplete>
      </v-col>

      <v-col cols="12">
        <v-autocomplete
          v-model="values"
          :items="items"
          density="compact"
          label="Compact"
        ></v-autocomplete>
      </v-col>
    </v-row>
  </v-container>
</v-card>
      </v-chip>

      <v-chip>Material 3
        <v-card>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <v-autocomplete
          v-model="values"
          :items="items"
          label="Default"
        ></v-autocomplete>
      </v-col>

      <v-col cols="12">
        <v-autocomplete
          v-model="values"
          :items="items"
          density="comfortable"
          label="Material"
        ></v-autocomplete>
      </v-col>

      <v-col cols="12">
        <v-autocomplete
          v-model="values"
          :items="items"
          density="compact"
          label="Compact"
        ></v-autocomplete>
      </v-col>
    </v-row>
  </v-container>
</v-card>
      </v-chip>

      <v-chip>Material 4
        <v-card>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <v-autocomplete
          v-model="values"
          :items="items"
          label="Default"
        ></v-autocomplete>
      </v-col>

      <v-col cols="12">
        <v-autocomplete
          v-model="values"
          :items="items"
          density="comfortable"
          label="Material"
        ></v-autocomplete>
      </v-col>

      <v-col cols="12">
        <v-autocomplete
          v-model="values"
          :items="items"
          density="compact"
          label="Compact"
        ></v-autocomplete>
      </v-col>
    </v-row>
  </v-container>
</v-card>
      </v-chip>

      <v-chip>Material 5
        <v-card>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <v-autocomplete
          v-model="values"
          :items="items"
          label="Default"
        ></v-autocomplete>
      </v-col>

      <v-col cols="12">
        <v-autocomplete
          v-model="values"
          :items="items"
          density="comfortable"
          label="Material"
        ></v-autocomplete>
      </v-col>

      <v-col cols="12">
        <v-autocomplete
          v-model="values"
          :items="items"
          density="compact"
          label="Compact"
        ></v-autocomplete>
      </v-col>
    </v-row>
  </v-container>
</v-card>
      </v-chip>

      <v-chip>Material 6
        <v-card>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <v-autocomplete
          v-model="values"
          :items="items"
          label="Default"
        ></v-autocomplete>
      </v-col>

      <v-col cols="12">
        <v-autocomplete
          v-model="values"
          :items="items"
          density="comfortable"
          label="Material"
        ></v-autocomplete>
      </v-col>

      <v-col cols="12">
        <v-autocomplete
          v-model="values"
          :items="items"
          density="compact"
          label="Compact"
        ></v-autocomplete>
      </v-col>
    </v-row>
  </v-container>
</v-card>
      </v-chip>

      <v-chip>Material 7
        <v-card>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <v-autocomplete
          v-model="values"
          :items="items"
          label="Default"
        ></v-autocomplete>
      </v-col>

      <v-col cols="12">
        <v-autocomplete
          v-model="values"
          :items="items"
          density="comfortable"
          label="Material"
        ></v-autocomplete>
      </v-col>

      <v-col cols="12">
        <v-autocomplete
          v-model="values"
          :items="items"
          density="compact"
          label="Compact"
        ></v-autocomplete>
      </v-col>
    </v-row>
  </v-container>
</v-card>
      </v-chip>

      <v-chip>Material 8
        <v-card>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <v-autocomplete
          v-model="values"
          :items="items"
          label="Default"
        ></v-autocomplete>
      </v-col>

      <v-col cols="12">
        <v-autocomplete
          v-model="values"
          :items="items"
          density="comfortable"
          label="Material"
        ></v-autocomplete>
      </v-col>

      <v-col cols="12">
        <v-autocomplete
          v-model="values"
          :items="items"
          density="compact"
          label="Compact"
        ></v-autocomplete>
      </v-col>
    </v-row>
  </v-container>
</v-card>
      </v-chip>
    </v-chip-group>
  </div>

  <v-card-actions>
    <v-btn
      color="deep-purple-lighten-2"
      variant="text"
      @click="reserve"
    >
      Realizar Cotización
    </v-btn>
  </v-card-actions>

</v-card>
</ul>

        </v-window-item>

        <v-window-item value="two">
          Two
        </v-window-item>

        <v-window-item value="three">
          Three
        </v-window-item>
      </v-window>
    </v-card-text>
  </v-card>
        
       
      
    </v-col>

    <!-- <v-col cols="12" sm="6" md="4">
      <v-btn block rounded="xs" size="x-large">NPR
        <v-slote>
        <v-card
    :loading="loading"
    class="mx-auto my-12"
    max-width="374"
  >
    <template v-slot:loader="{ isActive }">
      <v-progress-linear
        :active="isActive"
        color="deep-purple"
        height="4"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      cover
      height="250"
      src="../assets/NPR.webp"
    ></v-img>

    <v-card-item>
      <v-card-title>Furgón para Camión</v-card-title>

      <v-card-subtitle>
        <span class="me-1">Turbo</span>

        <v-icon
          color="error"
          icon="mdi-fire-circle"
          size="small"
        ></v-icon>
      </v-card-subtitle>
    </v-card-item>

    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
        <v-rating
          :model-value="4.5"
          color="amber"
          density="compact"
          half-increments
          readonly
          size="small"
        ></v-rating>

        <div class="text-grey ms-4">
          4.5 (413)
        </div>
      </v-row>

      <div class="my-4 text-subtitle-1">
        Camiones
      </div>

      <div>Realización de furgón para camión tipo turbo NPR</div>
    </v-card-text>

    <v-divider class="mx-4 mb-1"></v-divider>

    <v-card-title>Cotización completa</v-card-title>

    <div class="px-4">
      <v-chip-group v-model="selection">
        <v-chip>Material 1
          <v-card>
    <v-container fluid>
      <v-row>
        <v-col cols="12">
          <v-autocomplete
            v-model="values"
            :items="items"
            label="Default"
          ></v-autocomplete>
        </v-col>

        <v-col cols="12">
          <v-autocomplete
            v-model="values"
            :items="items"
            density="comfortable"
            label="Material"
          ></v-autocomplete>
        </v-col>

        <v-col cols="12">
          <v-autocomplete
            v-model="values"
            :items="items"
            density="compact"
            label="Compact"
          ></v-autocomplete>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
        </v-chip>

        <v-chip>Material 2
          <v-card>
    <v-container fluid>
      <v-row>
        <v-col cols="12">
          <v-autocomplete
            v-model="values"
            :items="items"
            label="Default"
          ></v-autocomplete>
        </v-col>

        <v-col cols="12">
          <v-autocomplete
            v-model="values"
            :items="items"
            density="comfortable"
            label="Material"
          ></v-autocomplete>
        </v-col>

        <v-col cols="12">
          <v-autocomplete
            v-model="values"
            :items="items"
            density="compact"
            label="Compact"
          ></v-autocomplete>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
        </v-chip>

        <v-chip>Material 3
          <v-card>
    <v-container fluid>
      <v-row>
        <v-col cols="12">
          <v-autocomplete
            v-model="values"
            :items="items"
            label="Default"
          ></v-autocomplete>
        </v-col>

        <v-col cols="12">
          <v-autocomplete
            v-model="values"
            :items="items"
            density="comfortable"
            label="Material"
          ></v-autocomplete>
        </v-col>

        <v-col cols="12">
          <v-autocomplete
            v-model="values"
            :items="items"
            density="compact"
            label="Compact"
          ></v-autocomplete>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
        </v-chip>

        <v-chip>Material 4
          <v-card>
    <v-container fluid>
      <v-row>
        <v-col cols="12">
          <v-autocomplete
            v-model="values"
            :items="items"
            label="Default"
          ></v-autocomplete>
        </v-col>

        <v-col cols="12">
          <v-autocomplete
            v-model="values"
            :items="items"
            density="comfortable"
            label="Material"
          ></v-autocomplete>
        </v-col>

        <v-col cols="12">
          <v-autocomplete
            v-model="values"
            :items="items"
            density="compact"
            label="Compact"
          ></v-autocomplete>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
        </v-chip>

        <v-chip>Material 5
          <v-card>
    <v-container fluid>
      <v-row>
        <v-col cols="12">
          <v-autocomplete
            v-model="values"
            :items="items"
            label="Default"
          ></v-autocomplete>
        </v-col>

        <v-col cols="12">
          <v-autocomplete
            v-model="values"
            :items="items"
            density="comfortable"
            label="Material"
          ></v-autocomplete>
        </v-col>

        <v-col cols="12">
          <v-autocomplete
            v-model="values"
            :items="items"
            density="compact"
            label="Compact"
          ></v-autocomplete>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
        </v-chip>

        <v-chip>Material 6
          <v-card>
    <v-container fluid>
      <v-row>
        <v-col cols="12">
          <v-autocomplete
            v-model="values"
            :items="items"
            label="Default"
          ></v-autocomplete>
        </v-col>

        <v-col cols="12">
          <v-autocomplete
            v-model="values"
            :items="items"
            density="comfortable"
            label="Material"
          ></v-autocomplete>
        </v-col>

        <v-col cols="12">
          <v-autocomplete
            v-model="values"
            :items="items"
            density="compact"
            label="Compact"
          ></v-autocomplete>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
        </v-chip>

        <v-chip>Material 7
          <v-card>
    <v-container fluid>
      <v-row>
        <v-col cols="12">
          <v-autocomplete
            v-model="values"
            :items="items"
            label="Default"
          ></v-autocomplete>
        </v-col>

        <v-col cols="12">
          <v-autocomplete
            v-model="values"
            :items="items"
            density="comfortable"
            label="Material"
          ></v-autocomplete>
        </v-col>

        <v-col cols="12">
          <v-autocomplete
            v-model="values"
            :items="items"
            density="compact"
            label="Compact"
          ></v-autocomplete>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
        </v-chip>

        <v-chip>Material 8
          <v-card>
    <v-container fluid>
      <v-row>
        <v-col cols="12">
          <v-autocomplete
            v-model="values"
            :items="items"
            label="Default"
          ></v-autocomplete>
        </v-col>

        <v-col cols="12">
          <v-autocomplete
            v-model="values"
            :items="items"
            density="comfortable"
            label="Material"
          ></v-autocomplete>
        </v-col>

        <v-col cols="12">
          <v-autocomplete
            v-model="values"
            :items="items"
            density="compact"
            label="Compact"
          ></v-autocomplete>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
        </v-chip>
      </v-chip-group>
    </div>

    <v-card-actions>
      <v-btn
        color="deep-purple-lighten-2"
        variant="text"
        @click="reserve"
      >
        Realizar Cotización
      </v-btn>
    </v-card-actions>
  
  </v-card>
</v-slote>
      </v-btn>
    </v-col>

    <v-col cols="12" sm="6" md="4">
      <v-btn block rounded="sm" size="x-large">NQR
        <v-slote>
        <v-card
    :loading="loading"
    class="mx-auto my-12"
    max-width="374"
  >
    <template v-slot:loader="{ isActive }">
      <v-progress-linear
        :active="isActive"
        color="deep-purple"
        height="4"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      cover
      height="250"
      src="../assets/NQR.jpg"
    ></v-img>

    <v-card-item>
      <v-card-title>Furgón para Camión</v-card-title>

      <v-card-subtitle>
        <span class="me-1">Turbo</span>

        <v-icon
          color="error"
          icon="mdi-fire-circle"
          size="small"
        ></v-icon>
      </v-card-subtitle>
    </v-card-item>

    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
        <v-rating
          :model-value="4.5"
          color="amber"
          density="compact"
          half-increments
          readonly
          size="small"
        ></v-rating>

        <div class="text-grey ms-4">
          4.5 (413)
        </div>
      </v-row>

      <div class="my-4 text-subtitle-1">
        Camiones
      </div>

      <div>Realización de furgón para camión tipo turbo NQR</div>
    </v-card-text>

    <v-divider class="mx-4 mb-1"></v-divider>

    <v-card-title>Cotización completa</v-card-title>

    <div class="px-4">
      <v-chip-group v-model="selection">
        <v-chip>Material 1
          <v-card>
    <v-container fluid>
      <v-row>
        <v-col cols="12">
          <v-autocomplete
            v-model="values"
            :items="items"
            label="Default"
          ></v-autocomplete>
        </v-col>

        <v-col cols="12">
          <v-autocomplete
            v-model="values"
            :items="items"
            density="comfortable"
            label="Material"
          ></v-autocomplete>
        </v-col>

        <v-col cols="12">
          <v-autocomplete
            v-model="values"
            :items="items"
            density="compact"
            label="Compact"
          ></v-autocomplete>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
        </v-chip>

        <v-chip>Material 2
          <v-card>
    <v-container fluid>
      <v-row>
        <v-col cols="12">
          <v-autocomplete
            v-model="values"
            :items="items"
            label="Default"
          ></v-autocomplete>
        </v-col>

        <v-col cols="12">
          <v-autocomplete
            v-model="values"
            :items="items"
            density="comfortable"
            label="Material"
          ></v-autocomplete>
        </v-col>

        <v-col cols="12">
          <v-autocomplete
            v-model="values"
            :items="items"
            density="compact"
            label="Compact"
          ></v-autocomplete>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
        </v-chip>

        <v-chip>Material 3
          <v-card>
    <v-container fluid>
      <v-row>
        <v-col cols="12">
          <v-autocomplete
            v-model="values"
            :items="items"
            label="Default"
          ></v-autocomplete>
        </v-col>

        <v-col cols="12">
          <v-autocomplete
            v-model="values"
            :items="items"
            density="comfortable"
            label="Material"
          ></v-autocomplete>
        </v-col>

        <v-col cols="12">
          <v-autocomplete
            v-model="values"
            :items="items"
            density="compact"
            label="Compact"
          ></v-autocomplete>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
        </v-chip>

        <v-chip>Material 4
          <v-card>
    <v-container fluid>
      <v-row>
        <v-col cols="12">
          <v-autocomplete
            v-model="values"
            :items="items"
            label="Default"
          ></v-autocomplete>
        </v-col>

        <v-col cols="12">
          <v-autocomplete
            v-model="values"
            :items="items"
            density="comfortable"
            label="Material"
          ></v-autocomplete>
        </v-col>

        <v-col cols="12">
          <v-autocomplete
            v-model="values"
            :items="items"
            density="compact"
            label="Compact"
          ></v-autocomplete>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
        </v-chip>

        <v-chip>Material 5
          <v-card>
    <v-container fluid>
      <v-row>
        <v-col cols="12">
          <v-autocomplete
            v-model="values"
            :items="items"
            label="Default"
          ></v-autocomplete>
        </v-col>

        <v-col cols="12">
          <v-autocomplete
            v-model="values"
            :items="items"
            density="comfortable"
            label="Material"
          ></v-autocomplete>
        </v-col>

        <v-col cols="12">
          <v-autocomplete
            v-model="values"
            :items="items"
            density="compact"
            label="Compact"
          ></v-autocomplete>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
        </v-chip>

        <v-chip>Material 6
          <v-card>
    <v-container fluid>
      <v-row>
        <v-col cols="12">
          <v-autocomplete
            v-model="values"
            :items="items"
            label="Default"
          ></v-autocomplete>
        </v-col>

        <v-col cols="12">
          <v-autocomplete
            v-model="values"
            :items="items"
            density="comfortable"
            label="Material"
          ></v-autocomplete>
        </v-col>

        <v-col cols="12">
          <v-autocomplete
            v-model="values"
            :items="items"
            density="compact"
            label="Compact"
          ></v-autocomplete>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
        </v-chip>

        <v-chip>Material 7
          <v-card>
    <v-container fluid>
      <v-row>
        <v-col cols="12">
          <v-autocomplete
            v-model="values"
            :items="items"
            label="Default"
          ></v-autocomplete>
        </v-col>

        <v-col cols="12">
          <v-autocomplete
            v-model="values"
            :items="items"
            density="comfortable"
            label="Material"
          ></v-autocomplete>
        </v-col>

        <v-col cols="12">
          <v-autocomplete
            v-model="values"
            :items="items"
            density="compact"
            label="Compact"
          ></v-autocomplete>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
        </v-chip>

        <v-chip>Material 8
          <v-card>
    <v-container fluid>
      <v-row>
        <v-col cols="12">
          <v-autocomplete
            v-model="values"
            :items="items"
            label="Default"
          ></v-autocomplete>
        </v-col>

        <v-col cols="12">
          <v-autocomplete
            v-model="values"
            :items="items"
            density="comfortable"
            label="Material"
          ></v-autocomplete>
        </v-col>

        <v-col cols="12">
          <v-autocomplete
            v-model="values"
            :items="items"
            density="compact"
            label="Compact"
          ></v-autocomplete>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
        </v-chip>
      </v-chip-group>
    </div>

    <v-card-actions>
      <v-btn
        color="deep-purple-lighten-2"
        variant="text"
        @click="reserve"
      >
        Realizar Cotización
      </v-btn>
    </v-card-actions>
  
  </v-card>
</v-slote>
      </v-btn>
    </v-col>

    <v-col cols="12" sm="6" md="4">
      <v-btn block size="x-large">NRR
        <v-slote>
        <v-card
    :loading="loading"
    class="mx-auto my-12"
    max-width="374"
  >
    <template v-slot:loader="{ isActive }">
      <v-progress-linear
        :active="isActive"
        color="deep-purple"
        height="4"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      cover
      height="250"
      src="../assets/NRR.jpg"
    ></v-img>

    <v-card-item>
      <v-card-title>Furgón para Camión</v-card-title>

      <v-card-subtitle>
        <span class="me-1">Turbo</span>

        <v-icon
          color="error"
          icon="mdi-fire-circle"
          size="small"
        ></v-icon>
      </v-card-subtitle>
    </v-card-item>

    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
        <v-rating
          :model-value="4.5"
          color="amber"
          density="compact"
          half-increments
          readonly
          size="small"
        ></v-rating>

        <div class="text-grey ms-4">
          4.5 (413)
        </div>
      </v-row>

      <div class="my-4 text-subtitle-1">
        Camiones
      </div>

      <div>Realización de furgón para camión tipo turbo NRR</div>
    </v-card-text>

    <v-divider class="mx-4 mb-1"></v-divider>

    <v-card-title>Cotización completa</v-card-title>

    <div class="px-4">
      <v-chip-group v-model="selection">
        <v-chip>Material 1
          <v-card>
    <v-container fluid>
      <v-row>
        <v-col cols="12">
          <v-autocomplete
            v-model="values"
            :items="items"
            label="Default"
          ></v-autocomplete>
        </v-col>

        <v-col cols="12">
          <v-autocomplete
            v-model="values"
            :items="items"
            density="comfortable"
            label="Material"
          ></v-autocomplete>
        </v-col>

        <v-col cols="12">
          <v-autocomplete
            v-model="values"
            :items="items"
            density="compact"
            label="Compact"
          ></v-autocomplete>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
        </v-chip>

        <v-chip>Material 2
          <v-card>
    <v-container fluid>
      <v-row>
        <v-col cols="12">
          <v-autocomplete
            v-model="values"
            :items="items"
            label="Default"
          ></v-autocomplete>
        </v-col>

        <v-col cols="12">
          <v-autocomplete
            v-model="values"
            :items="items"
            density="comfortable"
            label="Material"
          ></v-autocomplete>
        </v-col>

        <v-col cols="12">
          <v-autocomplete
            v-model="values"
            :items="items"
            density="compact"
            label="Compact"
          ></v-autocomplete>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
        </v-chip>

        <v-chip>Material 3
          <v-card>
    <v-container fluid>
      <v-row>
        <v-col cols="12">
          <v-autocomplete
            v-model="values"
            :items="items"
            label="Default"
          ></v-autocomplete>
        </v-col>

        <v-col cols="12">
          <v-autocomplete
            v-model="values"
            :items="items"
            density="comfortable"
            label="Material"
          ></v-autocomplete>
        </v-col>

        <v-col cols="12">
          <v-autocomplete
            v-model="values"
            :items="items"
            density="compact"
            label="Compact"
          ></v-autocomplete>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
        </v-chip>

        <v-chip>Material 4
          <v-card>
    <v-container fluid>
      <v-row>
        <v-col cols="12">
          <v-autocomplete
            v-model="values"
            :items="items"
            label="Default"
          ></v-autocomplete>
        </v-col>

        <v-col cols="12">
          <v-autocomplete
            v-model="values"
            :items="items"
            density="comfortable"
            label="Material"
          ></v-autocomplete>
        </v-col>

        <v-col cols="12">
          <v-autocomplete
            v-model="values"
            :items="items"
            density="compact"
            label="Compact"
          ></v-autocomplete>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
        </v-chip>

        <v-chip>Material 5
          <v-card>
    <v-container fluid>
      <v-row>
        <v-col cols="12">
          <v-autocomplete
            v-model="values"
            :items="items"
            label="Default"
          ></v-autocomplete>
        </v-col>

        <v-col cols="12">
          <v-autocomplete
            v-model="values"
            :items="items"
            density="comfortable"
            label="Material"
          ></v-autocomplete>
        </v-col>

        <v-col cols="12">
          <v-autocomplete
            v-model="values"
            :items="items"
            density="compact"
            label="Compact"
          ></v-autocomplete>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
        </v-chip>

        <v-chip>Material 6
          <v-card>
    <v-container fluid>
      <v-row>
        <v-col cols="12">
          <v-autocomplete
            v-model="values"
            :items="items"
            label="Default"
          ></v-autocomplete>
        </v-col>

        <v-col cols="12">
          <v-autocomplete
            v-model="values"
            :items="items"
            density="comfortable"
            label="Material"
          ></v-autocomplete>
        </v-col>

        <v-col cols="12">
          <v-autocomplete
            v-model="values"
            :items="items"
            density="compact"
            label="Compact"
          ></v-autocomplete>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
        </v-chip>

        <v-chip>Material 7
          <v-card>
    <v-container fluid>
      <v-row>
        <v-col cols="12">
          <v-autocomplete
            v-model="values"
            :items="items"
            label="Default"
          ></v-autocomplete>
        </v-col>

        <v-col cols="12">
          <v-autocomplete
            v-model="values"
            :items="items"
            density="comfortable"
            label="Material"
          ></v-autocomplete>
        </v-col>

        <v-col cols="12">
          <v-autocomplete
            v-model="values"
            :items="items"
            density="compact"
            label="Compact"
          ></v-autocomplete>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
        </v-chip>

        <v-chip>Material 8
          <v-card>
    <v-container fluid>
      <v-row>
        <v-col cols="12">
          <v-autocomplete
            v-model="values"
            :items="items"
            label="Default"
          ></v-autocomplete>
        </v-col>

        <v-col cols="12">
          <v-autocomplete
            v-model="values"
            :items="items"
            density="comfortable"
            label="Material"
          ></v-autocomplete>
        </v-col>

        <v-col cols="12">
          <v-autocomplete
            v-model="values"
            :items="items"
            density="compact"
            label="Compact"
          ></v-autocomplete>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
        </v-chip>
      </v-chip-group>
    </div>

    <v-card-actions>
      <v-btn
        color="deep-purple-lighten-2"
        variant="text"
        @click="reserve"
      >
        Realizar Cotización
      </v-btn>
    </v-card-actions>
  
  </v-card>
</v-slote>
      </v-btn>
    </v-col>

    <v-col cols="12" sm="6" md="4">
      <v-btn block rounded="lg" size="x-large">NLR
        <v-slote>
        <v-card
    :loading="loading"
    class="mx-auto my-12"
    max-width="374"
  >
    <template v-slot:loader="{ isActive }">
      <v-progress-linear
        :active="isActive"
        color="deep-purple"
        height="4"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      cover
      height="250"
      src="../assets/NLR.jpg"
    ></v-img>

    <v-card-item>
      <v-card-title>Furgón para Camión</v-card-title>

      <v-card-subtitle>
        <span class="me-1">Turbo</span>

        <v-icon
          color="error"
          icon="mdi-fire-circle"
          size="small"
        ></v-icon>
      </v-card-subtitle>
    </v-card-item>

    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
        <v-rating
          :model-value="4.5"
          color="amber"
          density="compact"
          half-increments
          readonly
          size="small"
        ></v-rating>

        <div class="text-grey ms-4">
          4.5 (413)
        </div>
      </v-row>

      <div class="my-4 text-subtitle-1">
        Camiones
      </div>

      <div>Realización de furgón para camión tipo turbo NLR</div>
    </v-card-text>

    <v-divider class="mx-4 mb-1"></v-divider>

    <v-card-title>Cotización completa</v-card-title>

    <div class="px-4">
      <v-chip-group v-model="selection">
        <v-chip>Material 1
          <v-card>
    <v-container fluid>
      <v-row>
        <v-col cols="12">
          <v-autocomplete
            v-model="values"
            :items="items"
            label="Default"
          ></v-autocomplete>
        </v-col>

        <v-col cols="12">
          <v-autocomplete
            v-model="values"
            :items="items"
            density="comfortable"
            label="Material"
          ></v-autocomplete>
        </v-col>

        <v-col cols="12">
          <v-autocomplete
            v-model="values"
            :items="items"
            density="compact"
            label="Compact"
          ></v-autocomplete>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
        </v-chip>

        <v-chip>Material 2
          <v-card>
    <v-container fluid>
      <v-row>
        <v-col cols="12">
          <v-autocomplete
            v-model="values"
            :items="items"
            label="Default"
          ></v-autocomplete>
        </v-col>

        <v-col cols="12">
          <v-autocomplete
            v-model="values"
            :items="items"
            density="comfortable"
            label="Material"
          ></v-autocomplete>
        </v-col>

        <v-col cols="12">
          <v-autocomplete
            v-model="values"
            :items="items"
            density="compact"
            label="Compact"
          ></v-autocomplete>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
        </v-chip>

        <v-chip>Material 3
          <v-card>
    <v-container fluid>
      <v-row>
        <v-col cols="12">
          <v-autocomplete
            v-model="values"
            :items="items"
            label="Default"
          ></v-autocomplete>
        </v-col>

        <v-col cols="12">
          <v-autocomplete
            v-model="values"
            :items="items"
            density="comfortable"
            label="Material"
          ></v-autocomplete>
        </v-col>

        <v-col cols="12">
          <v-autocomplete
            v-model="values"
            :items="items"
            density="compact"
            label="Compact"
          ></v-autocomplete>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
        </v-chip>

        <v-chip>Material 4
          <v-card>
    <v-container fluid>
      <v-row>
        <v-col cols="12">
          <v-autocomplete
            v-model="values"
            :items="items"
            label="Default"
          ></v-autocomplete>
        </v-col>

        <v-col cols="12">
          <v-autocomplete
            v-model="values"
            :items="items"
            density="comfortable"
            label="Material"
          ></v-autocomplete>
        </v-col>

        <v-col cols="12">
          <v-autocomplete
            v-model="values"
            :items="items"
            density="compact"
            label="Compact"
          ></v-autocomplete>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
        </v-chip>

        <v-chip>Material 5
          <v-card>
    <v-container fluid>
      <v-row>
        <v-col cols="12">
          <v-autocomplete
            v-model="values"
            :items="items"
            label="Default"
          ></v-autocomplete>
        </v-col>

        <v-col cols="12">
          <v-autocomplete
            v-model="values"
            :items="items"
            density="comfortable"
            label="Material"
          ></v-autocomplete>
        </v-col>

        <v-col cols="12">
          <v-autocomplete
            v-model="values"
            :items="items"
            density="compact"
            label="Compact"
          ></v-autocomplete>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
        </v-chip>

        <v-chip>Material 6
          <v-card>
    <v-container fluid>
      <v-row>
        <v-col cols="12">
          <v-autocomplete
            v-model="values"
            :items="items"
            label="Default"
          ></v-autocomplete>
        </v-col>

        <v-col cols="12">
          <v-autocomplete
            v-model="values"
            :items="items"
            density="comfortable"
            label="Material"
          ></v-autocomplete>
        </v-col>

        <v-col cols="12">
          <v-autocomplete
            v-model="values"
            :items="items"
            density="compact"
            label="Compact"
          ></v-autocomplete>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
        </v-chip>

        <v-chip>Material 7
          <v-card>
    <v-container fluid>
      <v-row>
        <v-col cols="12">
          <v-autocomplete
            v-model="values"
            :items="items"
            label="Default"
          ></v-autocomplete>
        </v-col>

        <v-col cols="12">
          <v-autocomplete
            v-model="values"
            :items="items"
            density="comfortable"
            label="Material"
          ></v-autocomplete>
        </v-col>

        <v-col cols="12">
          <v-autocomplete
            v-model="values"
            :items="items"
            density="compact"
            label="Compact"
          ></v-autocomplete>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
        </v-chip>

        <v-chip>Material 8
          <v-card>
    <v-container fluid>
      <v-row>
        <v-col cols="12">
          <v-autocomplete
            v-model="values"
            :items="items"
            label="Default"
          ></v-autocomplete>
        </v-col>

        <v-col cols="12">
          <v-autocomplete
            v-model="values"
            :items="items"
            density="comfortable"
            label="Material"
          ></v-autocomplete>
        </v-col>

        <v-col cols="12">
          <v-autocomplete
            v-model="values"
            :items="items"
            density="compact"
            label="Compact"
          ></v-autocomplete>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
        </v-chip>
      </v-chip-group>
    </div>

    <v-card-actions>
      <v-btn
        color="deep-purple-lighten-2"
        variant="text"
        @click="reserve"
      >
        Realizar Cotización
      </v-btn>
    </v-card-actions>
  
  </v-card>
</v-slote>
      </v-btn>
    </v-col>

    <v-col cols="12" sm="6" md="4">
      <v-btn block rounded="lg" size="x-large">NKR
        <v-slote>
        <v-card
    :loading="loading"
    class="mx-auto my-12"
    max-width="374"
  >
    <template v-slot:loader="{ isActive }">
      <v-progress-linear
        :active="isActive"
        color="deep-purple"
        height="4"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      cover
      height="250"
      src="../assets/NKR.webp"
    ></v-img>

    <v-card-item>
      <v-card-title>Furgón para Camión</v-card-title>

      <v-card-subtitle>
        <span class="me-1">Turbo</span>

        <v-icon
          color="error"
          icon="mdi-fire-circle"
          size="small"
        ></v-icon>
      </v-card-subtitle>
    </v-card-item>

    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
        <v-rating
          :model-value="4.5"
          color="amber"
          density="compact"
          half-increments
          readonly
          size="small"
        ></v-rating>

        <div class="text-grey ms-4">
          4.5 (413)
        </div>
      </v-row>

      <div class="my-4 text-subtitle-1">
        Camiones
      </div>

      <div>Realización de furgón para camión tipo turbo NKR</div>
    </v-card-text>

    <v-divider class="mx-4 mb-1"></v-divider>

    <v-card-title>Cotización completa</v-card-title>

    <div class="px-4">
      <v-chip-group v-model="selection">
        <v-chip>Material 1
          <v-card>
    <v-container fluid>
      <v-row>
        <v-col cols="12">
          <v-autocomplete
            v-model="values"
            :items="items"
            label="Default"
          ></v-autocomplete>
        </v-col>

        <v-col cols="12">
          <v-autocomplete
            v-model="values"
            :items="items"
            density="comfortable"
            label="Material"
          ></v-autocomplete>
        </v-col>

        <v-col cols="12">
          <v-autocomplete
            v-model="values"
            :items="items"
            density="compact"
            label="Compact"
          ></v-autocomplete>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
        </v-chip>

        <v-chip>Material 2
          <v-card>
    <v-container fluid>
      <v-row>
        <v-col cols="12">
          <v-autocomplete
            v-model="values"
            :items="items"
            label="Default"
          ></v-autocomplete>
        </v-col>

        <v-col cols="12">
          <v-autocomplete
            v-model="values"
            :items="items"
            density="comfortable"
            label="Material"
          ></v-autocomplete>
        </v-col>

        <v-col cols="12">
          <v-autocomplete
            v-model="values"
            :items="items"
            density="compact"
            label="Compact"
          ></v-autocomplete>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
        </v-chip>

        <v-chip>Material 3
          <v-card>
    <v-container fluid>
      <v-row>
        <v-col cols="12">
          <v-autocomplete
            v-model="values"
            :items="items"
            label="Default"
          ></v-autocomplete>
        </v-col>

        <v-col cols="12">
          <v-autocomplete
            v-model="values"
            :items="items"
            density="comfortable"
            label="Material"
          ></v-autocomplete>
        </v-col>

        <v-col cols="12">
          <v-autocomplete
            v-model="values"
            :items="items"
            density="compact"
            label="Compact"
          ></v-autocomplete>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
        </v-chip>

        <v-chip>Material 4
          <v-card>
    <v-container fluid>
      <v-row>
        <v-col cols="12">
          <v-autocomplete
            v-model="values"
            :items="items"
            label="Default"
          ></v-autocomplete>
        </v-col>

        <v-col cols="12">
          <v-autocomplete
            v-model="values"
            :items="items"
            density="comfortable"
            label="Material"
          ></v-autocomplete>
        </v-col>

        <v-col cols="12">
          <v-autocomplete
            v-model="values"
            :items="items"
            density="compact"
            label="Compact"
          ></v-autocomplete>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
        </v-chip>

        <v-chip>Material 5
          <v-card>
    <v-container fluid>
      <v-row>
        <v-col cols="12">
          <v-autocomplete
            v-model="values"
            :items="items"
            label="Default"
          ></v-autocomplete>
        </v-col>

        <v-col cols="12">
          <v-autocomplete
            v-model="values"
            :items="items"
            density="comfortable"
            label="Material"
          ></v-autocomplete>
        </v-col>

        <v-col cols="12">
          <v-autocomplete
            v-model="values"
            :items="items"
            density="compact"
            label="Compact"
          ></v-autocomplete>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
        </v-chip>

        <v-chip>Material 6
          <v-card>
    <v-container fluid>
      <v-row>
        <v-col cols="12">
          <v-autocomplete
            v-model="values"
            :items="items"
            label="Default"
          ></v-autocomplete>
        </v-col>

        <v-col cols="12">
          <v-autocomplete
            v-model="values"
            :items="items"
            density="comfortable"
            label="Material"
          ></v-autocomplete>
        </v-col>

        <v-col cols="12">
          <v-autocomplete
            v-model="values"
            :items="items"
            density="compact"
            label="Compact"
          ></v-autocomplete>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
        </v-chip>

        <v-chip>Material 7
          <v-card>
    <v-container fluid>
      <v-row>
        <v-col cols="12">
          <v-autocomplete
            v-model="values"
            :items="items"
            label="Default"
          ></v-autocomplete>
        </v-col>

        <v-col cols="12">
          <v-autocomplete
            v-model="values"
            :items="items"
            density="comfortable"
            label="Material"
          ></v-autocomplete>
        </v-col>

        <v-col cols="12">
          <v-autocomplete
            v-model="values"
            :items="items"
            density="compact"
            label="Compact"
          ></v-autocomplete>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
        </v-chip>

        <v-chip>Material 8
          <v-card>
    <v-container fluid>
      <v-row>
        <v-col cols="12">
          <v-autocomplete
            v-model="values"
            :items="items"
            label="Default"
          ></v-autocomplete>
        </v-col>

        <v-col cols="12">
          <v-autocomplete
            v-model="values"
            :items="items"
            density="comfortable"
            label="Material"
          ></v-autocomplete>
        </v-col>

        <v-col cols="12">
          <v-autocomplete
            v-model="values"
            :items="items"
            density="compact"
            label="Compact"
          ></v-autocomplete>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
        </v-chip>
      </v-chip-group>
    </div>

    <v-card-actions>
      <v-btn
        color="deep-purple-lighten-2"
        variant="text"
        @click="reserve"
      >
        Realizar Cotización
      </v-btn>
    </v-card-actions>
  
  </v-card>
</v-slote>
      </v-btn>
    </v-col>-->
  </v-row>
</v-container>
</div>
</template> 
  

<script>
export default {
  data: () => ({
    tab: null,
    elevations: [0, 4, 8, 12, 16, 20],
    loading: false,
    selection: 1,
  }),

  methods: {
    reserve () {
      this.loading = true

      setTimeout(() => (this.loading = false), 2000)
    },
  },
} 
</script>