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
import { collection, getDocs } from 'firebase/firestore';
import db from '../firebase/init.js'; // Importa tu configuración de Firebase

    export default {
      data: () => ({
        tab: 'option-1',
        headers: [
        {
          title: 'Material',
          align: 'start',
          sortable: false,
          key: 'Nombre',
        },
        { title: 'Cantidad', align: 'center', key: 'Cantidad' },
        { title: 'Precio', align: 'center', key: 'Precio' },
        
      ],
      desserts: [
        {
          Nombre: 0,
          Cantidad:0,
          Precio:0
        },
        {
          Nombre: 0,
          Cantidad:0,
          Precio:0
        },
        {
          name: 'Eclair',
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: '7',
        },
       
      ],
    }),
    computed: {
      virtualDesserts () {
        return [...Array("5").keys()].map(i => {
          const dessert = { ...this.desserts[i % 10] }
          dessert.name = `${dessert.name} #${i}`

          return dessert
        })
      },
    },
    created() {
  this.loadDataFromFirebase(); // Llama a la función que carga los datos de Firebase
},
methods: {
  async loadDataFromFirebase() {
    const q = collection(db, 'Furgones'); // Reemplaza 'tu_colección' con el nombre de tu colección en Firebase
    const snapshot = await getDocs(q);

    this.desserts = snapshot.docs.map((doc) => ({
      keyNombre: doc.Id,
      Nombre: doc.data().Nombre,
      Cantidad: doc.data().Cantidad,
      Precio: doc.data().Precio,
    }));
  }
  }}
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