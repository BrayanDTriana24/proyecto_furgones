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
            @click="cerrarSesion"
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
                        <td>{{ item.Cantidad }}</td>
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
cerrarSesion() {
      // Aquí debes implementar la lógica para cerrar la sesión y redirigir al usuario a la vista App.vue
      // Puedes hacer esto estableciendo sesionIniciada en false y luego redirigiendo al usuario a la vista deseada.
      // Por ejemplo:
      this.$store.commit('setSesionIniciada', false);
      this.$router.push('/'); // Asegúrate de que la ruta sea la correcta.
    },
    
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