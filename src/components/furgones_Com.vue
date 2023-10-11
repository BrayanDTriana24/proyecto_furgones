<template>
  <div>
    <v-toolbar  
        dark
        prominent
        color="#2962FF"
        >
        <template v-slot:prepend>
          <h3>Furgones</h3>
        </template>
    
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
    </div>
    <div
    style="max-width:80%; margin-top: 5%; border: 3px rgba(201, 199, 199, 0.858) solid;" rounded="lg" elevation="" class="mx-auto">
        
              
                
     <v-img src="../assets/furgones.jpg"></v-img>
        
                
              </div>
              
    <div class="cont" style=" padding: 2% 8% 8% 8%;">
      <div>
    <v-card>
      <v-toolbar
        color="blue"
      >
        <v-toolbar-title>User Profile</v-toolbar-title>
      </v-toolbar>
      <div class="d-flex flex-row">
        <v-tabs
          v-model="tab"
          direction="vertical"
          color="blue"
        >
          <v-tab value="option-1">
            <v-icon start>
              mdi mdi-truck
            </v-icon>
            NHR
          </v-tab>
          <v-tab value="option-2">
            <v-icon start>
              mdi mdi-truck
            </v-icon>
            NQR
          </v-tab>
          <v-tab value="option-3">
            <v-icon start>
              mdi mdi-truck
            </v-icon>
            NPR
          </v-tab>
        </v-tabs>
        <v-window v-model="tab">
          <v-window-item value="option-1">
            
            <v-card flat>
              <div class="content-container">
              
            <div class="table-container">
  <v-data-table-virtual
    :headers="headers"
    :items="virtualDesserts"
    class="elevation-1"
    height="650"
    item-value="name"
  ></v-data-table-virtual>
  </div>
  <div class="image-container">
     <v-img src="../assets/NHR.png" style="padding: 2px 10px 2px 10px;"></v-img>
     <h4>Adicional</h4><input type="number" style="border: solid black 2px; border-radius: 5px; "><br>
     <h4>Mano de obra</h4><input type="number" style="border: solid black 2px; border-radius: 5px;"><br>
     <br><h2>Precio Total</h2>
     <input type="text" name="" id="">

  </div>
</div>
              
            </v-card>
          </v-window-item>
          <v-window-item value="option-2">
            <v-card flat>
              <v-card-text>
                <p>
                  Morbi nec metus. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Nunc sed turpis.
                </p>
  
                <p>
                  Suspendisse feugiat. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In hac habitasse platea dictumst. Fusce ac felis sit amet ligula pharetra condimentum.
                </p>
  
                <p>
                  Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Nam commodo suscipit quam. In consectetuer turpis ut velit. Sed cursus turpis vitae tortor. Aliquam eu nunc.
                </p>
  
                <p>
                  Etiam ut purus mattis mauris sodales aliquam. Ut varius tincidunt libero. Aenean viverra rhoncus pede. Duis leo. Fusce fermentum odio nec arcu.
                </p>
  
                <p class="mb-0">
                  Donec venenatis vulputate lorem. Aenean viverra rhoncus pede. In dui magna, posuere eget, vestibulum et, tempor auctor, justo. Fusce commodo aliquam arcu. Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi.
                </p>
              </v-card-text>
            </v-card>
          </v-window-item>
          <v-window-item value="option-3">
            <v-card flat>
              <v-card-text>
                <p>
                  Fusce a quam. Phasellus nec sem in justo pellentesque facilisis. Nam eget dui. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In dui magna, posuere eget, vestibulum et, tempor auctor, justo.
                </p>
  
                <p class="mb-0">
                  Cras sagittis. Phasellus nec sem in justo pellentesque facilisis. Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nam at tortor in tellus interdum sagittis.
                </p>
              </v-card-text>
            </v-card>
          </v-window-item>
        </v-window>
      </div>
    </v-card>
  </div>
  </div>
  </template>
  <script>
    export default {
      data: () => ({
        tab: 'option-1',
        headers: [
        {
          title: 'Material',
          align: 'start',
          sortable: false,
          key: 'name',
        },
        { title: 'Cantidad', align: 'center', key: 'cantidad' },
        { title: 'Precio', align: 'center', key: 'precio' },
        
      ],
      desserts: [
        {
          name: 'Madera',
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: '1',
        },
        {
          name: 'Recina',
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: '1',
        },
        {
          name: 'Eclair',
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: '7',
        },
        /* {
          name: 'Cupcake',
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          iron: '8',
        },
        {
          name: 'Gingerbread',
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          iron: '16',
        },
        {
          name: 'Jelly bean',
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          iron: '0',
        },
        {
          name: 'Lollipop',
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          iron: '2',
        },
        {
          name: 'Honeycomb',
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          iron: '45',
        },
        {
          name: 'Donut',
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          iron: '22',
        },
        {
          name: 'KitKat',
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: '6',
        }, */
      ],
    }),
    computed: {
      virtualDesserts () {
        return [...Array("").keys()].map(i => {
          const dessert = { ...this.desserts[i % 10] }
          dessert.name = `${dessert.name} #${i}`

          return dessert
        })
      },
    },
  }
  </script>
  <style scoped>
  .content-container {
    display: flex;
    flex-wrap: wrap; /* Permite que los elementos se ajusten en pantallas pequeñas */
  }

  .image-container {
    flex: 1; /* Ocupa el espacio disponible */
    /* margin-right: 20px; */ /* Ajusta el espacio entre la imagen y la tabla */
    width: 50vh;
    text-align: center;
  }
  
  .table-container {
    /* flex: 1; */ /* Ocupa el doble de espacio que la imagen */
    width: 80vh;
    border: solid rgb(23, 122, 235) 2px;
  }
  </style>