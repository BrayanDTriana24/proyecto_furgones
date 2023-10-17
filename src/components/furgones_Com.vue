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
      <v-card>
        <v-toolbar
        color="blue"
        title="Furgones"
      ></v-toolbar>
      <v-tabs 
      v-model="tab">
        <div v-for="(items,index) in desserts" :key="index">
          <v-tab
          :value="items.Furgon"
          color="blue">
            {{ items.Furgon }}
          </v-tab>
        </div>
      </v-tabs>
      <v-window v-for="(items,index) in desserts" :key="index" v-model="tab">
          <v-window-item :value="items.Furgon">
            
            <v-card flat>
              <div class="content-container">
              
  <div class="table-container">
                <v-table >
                  <thead>
                    <tr>
                      <td>Nombre</td>
                      <td>Cantidad</td>
                      <td>Precio</td>
                      <td>Subtotal</td>
                    </tr>
                  </thead>
                    <tbody v-for="(item,indeX) in items.item" :key="indeX">
                      <tr>
                        <td>{{ item.Nombre }}</td>
                        <td><input type="number"
                          v-model="item.Cantidad"
                          @input="subtotalVenta(item)">
                        </td>
                        <td>{{ item.Precio }}</td>
                        <td>{{ parseInt(item.Cantidad)*parseInt(item.Precio)}}</td>
                      </tr>
                    </tbody>
                </v-table>
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
        </v-window>
      </v-card>
<!--       <div>
    <v-card>
      <v-toolbar
        color="blue"
      >
        <v-toolbar-title>User Profile</v-toolbar-title>
      </v-toolbar>
      <div>
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
        </v-tabs>
        <v-window v-model="tab">
          <v-window-item value="option-1">
            
            <v-card flat>
              <div class="content-container">
              
  <div class="table-container">
                <v-table v-for="(items,index) in desserts" :key="index">
                  <thead>
                    <tr>
                      <td>Nombre</td>
                      <td>Cantidad</td>
                      <td>Precio</td>
                      <td>Subtotal</td>
                    </tr>
                  </thead>
                    <tbody v-for="(item,indeX) in items.item" :key="indeX">
                      <tr>
                        <td>{{ item.Nombre }}</td>
                        <td><input type="number"
                          v-model="item.Cantidad"
                          @input="subtotalVenta(item)">
                        </td>
                        <td>{{ item.Precio }}</td>
                        <td>{{ parseInt(item.Cantidad)*parseInt(item.Precio)}}</td>
                      </tr>
                    </tbody>
                </v-table>
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
        </v-window>
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

      </div>
    </v-card>
  </div> -->
  </div>
  </template>
  <script>
import { collection,  getDocs } from 'firebase/firestore';
import db from '../firebase/init.js'; // Importa tu configuración de Firebase

    export default {
      data: () => ({
        tab: 'option-1',
        headers: [
        {
          /*     title: 'Dessert (100g serving)', */
              align: 'start',
              sortable: false,
              key: 'name',
            },
            { title: 'Id', key: 'Id' },
            { title: 'Nombre', key: 'Nombre' },
            { title: 'Cantidad', key: 'Cantidad' },
            { title: 'Precio', key: 'Precio' },
      ],
      desserts: [],
    }),
    computed: {
      virtualDesserts () {
       return this.desserts
      },
    },
    created() {
  this.loadDataFromFirebase(); // Llama a la función que carga los datos de Firebase
},
methods: {
  async loadDataFromFirebase() {
    const q = collection(db, 'Furgones'); // Reemplaza 'tu_colección' con el nombre de tu colección en Firebase
    const snapshot = await getDocs(q);
    snapshot.forEach((doc)=>{
      this.desserts.push({
        item:doc.data().item,
        Furgon:doc.data().Furgon,
      })
    })
  },
  subtotalVenta(item){
      item.Subtotal = parseInt(item.Cantidad) * parseInt(item.Precio)
      console.log(item.Subtotal)
  },
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