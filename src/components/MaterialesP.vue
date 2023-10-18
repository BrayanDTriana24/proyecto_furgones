<template> 
  <v-toolbar  
        dark
        prominent
        color="#2962FF"
    v-img src="../assets/furgones.jpg">
        <template v-slot:prepend>
          <h3> Materiales</h3>
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
    <v-container>
      <v-data-table
        v-model="selected"
        :headers="headers"
        :items="desserts"
        items-per-page="5"
        item-value="name"
        :sort-by="[{ key: 'calories', order: 'asc' }]"
        class="elevation-1"
        return-object
        show-select
      >
        <template v-slot:top>
          <v-toolbar
            flat
          >
            <v-toolbar-title>Lista de Materiales</v-toolbar-title>
            <v-divider
              class="mx-4"
              inset
              vertical
            ></v-divider>
            <v-spacer></v-spacer>
            <v-dialog
              v-model="dialog"
              max-width="500px"
            >
              <template v-slot:activator="{ props }">
                <v-btn
                  color="primary"
                  dark
                  class="mb-2"
                  v-bind="props"
                >
                  Añadir Material
                </v-btn>
               
                <!-- <v-btn
                  color="primary"
                  dark
                  class="mb-2"
                  v-bind="props"
                >
                Imprimir
                </v-btn> -->
              </template>
              <v-card>
                <v-card-title>
                  <span class="text-h5">{{ formTitle }}</span>
                </v-card-title>
   
                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col id="id"
                        cols="12"
                        sm="6"
                        md="4"
                      >
                        <v-text-field
                          v-model="editedItem.Id"
                          label="Id"
                        ></v-text-field>
                      </v-col>
 
                      <v-col
                        cols="12"
                        sm="6"
                        md="4"
                      >
                        <v-text-field
                          v-model="editedItem.Nombre"
                          label="Nombre"
                        ></v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="4"
                      >
                        <v-text-field
                          v-model="editedItem.Cantidad"
                          label="Cantidad"
                        ></v-text-field>
                      </v-col>
 
                      <v-col
                        cols="12"
                        sm="6"
                        md="4"
                      >
                        <v-text-field
                          v-model="editedItem.Precio"
                          label="Precio"
                        ></v-text-field>
                      </v-col>
 
                      <!-- <v-col
                        cols="12"
                        sm="6"
                        md="4"
                      >
                        <v-text-field
                          v-model="editedItem.material"
                          label="Material"
                        ></v-text-field>
                      </v-col> -->
 
                       
                    </v-row>
                  </v-container>
                </v-card-text>
   
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                    color="blue-darken-1"
                    variant="text"
                    @click="close"
                  >
                    Cancelar
                  </v-btn>
                  <v-btn
                    color="blue-darken-1"
                    variant="text"
                    @click="save"
                  >
                    Guardar
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
            <v-dialog v-model="dialogDelete" max-width="500px">
              <v-card>
                <v-card-title class="text-h5">Deseas eliminar este usuario?</v-card-title>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue-darken-1" variant="text" @click="closeDelete">Cancelar</v-btn>
                  <v-btn color="blue-darken-1" variant="text" @click="deleteItemConfirm">Confirmar</v-btn>
                  <v-spacer></v-spacer>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-toolbar>
        </template>
        <template v-slot:[`item.actions`]="{ item }">
          <v-icon
            size="small"
            class="me-2"
            @click="editItem(item.raw)"
          >
            mdi-pencil
          </v-icon>
          <v-icon
            size="small"
            @click="deleteItem(item.raw)"
          >
            mdi-delete
          </v-icon>
        </template>
        <template v-slot:no-data>
          <v-btn
            color="primary"
            @click="initialize"
          >
            Reset
          </v-btn>
        </template>
      </v-data-table>
      <v-card class="mt-2 pa-2">
        <v-table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Cantidad</th>
            </tr>
          </thead>
          <tbody v-for="(material,index) in selected" :key="index">
            <tr>
              <td>{{ material.Nombre }}</td>
              <td><input type="number" v-model="material.Cantidad"></td>
            </tr>
          </tbody>
        </v-table>
      </v-card>
      
                <v-text-field v-model="furgonSlc"></v-text-field>
                <v-btn  @click="guardarMateriales()" color="#2962FF">Agregar</v-btn>
                <v-card class="mt-2 pa-2">
                   <h3>Materiales:</h3>
                 <ul>
                  <li v-for="item in cart" :key="item.name">{{ item.name }}</li>
                  </ul>
                  </v-card>
    </v-container>
   
   
      </template>
   
   
    <script>
import db from '../firebase/init.js'
    import {collection, getDocs, query, addDoc, updateDoc, doc, deleteDoc} from  'firebase/firestore'
    /* import jspdf from 'jspdf' */
    /* require (jspdf.autotable) */
 
      export default{
       /*  created(){ */
         /* this.createUsuario();  */
    /*     }, */
       
        data: () => ({
          furgonSlc:'',
         return: [],
         selected: [],
          cart: [],
        
          dialog: false,
          dialogDelete: false,
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
            { title: 'Opciones', key: 'actions', sortable: false },
          ],
          desserts: [],
          selectedBD:[],
          editedIndex: -1,
          editedItem: {
            keyid: 0,
            Id: 0,
            Nombre: 0,
            Cantidad: 0,
            Precio: 0,
           
          },
          defaultItem: {
            Id: 0,
            Nombre: 0,
            Cantidad: 0,
            Precio: 0,
          },
        }),
       
   
        computed: {
          formTitle () {
            return this.editedIndex === -1 ? 'Nuevo Material' : 'Actualizar Material'
          },
        },
   
        watch: {
          dialog (val) {
            val || this.close()
          },
          dialogDelete (val) {
            val || this.closeDelete()
          },
        },
   
        created () {
       /*    this.initialize() */
          this.listarUsuarios()
        },
       
   
        methods: {
          cerrarSesion() {
            // Aquí debes implementar la lógica para cerrar la sesión y redirigir al usuario a la vista App.vue
            // Puedes hacer esto estableciendo sesionIniciada en false y luego redirigiendo al usuario a la vista deseada.
            // Por ejemplo:
            this.$store.commit('setSesionIniciada', false);
            this.$router.push('/'); // Asegúrate de que la ruta sea la correcta.
          },
            async createUser(){
            const colRef = collection(db, 'Materiales')
            const dataObj = {
                Id: this.editedItem.Id,
                Nombre: this.editedItem.Nombre,
                Cantidad: this.editedItem.Cantidad,
                Precio: this.editedItem.Precio,
            }
            const docRef = await addDoc(colRef, dataObj);
            console.log("Creo el material ", docRef.id)
        },
   
          async listarUsuarios(){
            const q = query(collection(db, "Materiales"));
            const resul = await getDocs(q);
            resul.forEach((doc)=>{
              console.log("id",doc.id);
              this.desserts.push({
                keyid:doc.Id,
                Id:doc.data().Id,
                Nombre:doc.data().Nombre,
                Cantidad:doc.data().Cantidad,
                Precio:doc.data().Precio,
                })
            })
          },
 
          async ActualizarUsuarios(){
           
            console.log(this.editedItem.keyid)
            const Ref = (doc(db, "Materiales",this.editedItem.keyid));
            await updateDoc (Ref,{
              Nombre: this.editedItem.Nombre,
                Cantidad: this.editedItem.Cantidad,
                Precio: this.editedItem.Precio,
            }).then(console.log("Termino update Material"))
            .catch(function(error){
              console.log(error)
            });
          },
         
          async EliminarUsuarios(){
            console.log(this.editedItem.keyid)
            const Ref = (doc(db, "Materiales",this.editedItem.keyid));
            await deleteDoc (Ref,{
                Nombre: this.editedItem.Nombre,
                Cantidad: this.editedItem.Cantidad,
                Precio: this.editedItem.Precio,
            }).then(console.log("eliminar Material"))
            .catch(function(error){
              console.log(error)
            });
          },

          /* async saveToDatabase(cartItems) {
  const furgonesColRef = collection(db, 'Furgones'); // Reemplaza 'Furgones' por el nombre real de tu colección
  const combinedData = {};

  // Combinar todos los elementos seleccionados en un solo objeto
  cartItems.forEach((item, index) => {
    combinedData[`item${index}`] = {
      Id: item.Id,
      Nombre: item.Nombre,
      Cantidad: item.Cantidad,
      Precio: item.Precio,
    };
  });

  try {
    const docRef = await addDoc(furgonesColRef, combinedData);
    console.log('Elementos combinados agregados a la base de datos de "Furgones" con ID:', docRef.id);
  } catch (error) {
    console.error('Error al agregar elementos combinados a la base de datos de "Furgones":', error);
  }
}, */

async guardarMateriales(){
  const furgonesColRef = collection(db, 'Furgones');
  this.selected.map((doc)=>{
    const data = {
      Precio:doc.Precio,
      Nombre:doc.Nombre,
      Cantidad:doc.Cantidad,
    }
    this.selectedBD.push(data)
  })
  console.log(this.selectedBD)
  const dataObj = {
    item:this.selectedBD,
    Furgon:this.furgonSlc,
  }
  try {
    await addDoc(furgonesColRef,dataObj)
    this.limpiar()
  } catch (error){
    console.error(error)
  }
},

 
          /* async imprimir(){
            let columns = [
              {title: "Usuarios", datakey: "usuario"},
              {title: "Clave", datakey: "clave"}
            ]
            let registros = this.desserts
            console.log("imprimir", registros)
            let doc = new jspdf ("p", "pt")
            doc.autotable(columns, registros,{
              margin:{top:70}, addPageContent:function(){(doc.text("Usuarios", 50, 40))
              }
          })
          doc.save("Usuarios.pdf");
          }, */
   
          async addToCart() {
            const itemsToSave = this.selected.slice(); // Clonar los elementos seleccionados

if (itemsToSave.length > 0) {
  this.saveToDatabase(itemsToSave); // Guardar los elementos seleccionados en la base de datos
  this.cart = this.cart.concat(itemsToSave); // Agregar los elementos al carrito
}

// Limpiar la selección
this.selected = [];
console.log('Cart:', this.cart);
          },

          initialize () {
            this.desserts = [
            ]
          },
   
          editItem (item) {
            this.editedIndex = this.desserts.indexOf(item)
            this.editedItem = Object.assign({}, item)
            this.dialog = true
          },
   
          deleteItem (item) {
            this.editedIndex = this.desserts.indexOf(item)
            this.editedItem = Object.assign({}, item)
            this.dialogDelete = true
          },
   
          deleteItemConfirm () {
            this.desserts.splice(this.editedIndex, 1)
            this.closeDelete()
            this.EliminarUsuarios()
          },
   
          close () {
            this.dialog = false
            this.$nextTick(() => {
              this.editedItem = Object.assign({}, this.defaultItem)
              this.editedIndex = -1
            })
          },
   
          closeDelete () {
            this.dialogDelete = false
            this.$nextTick(() => {
              this.editedItem = Object.assign({}, this.defaultItem)
              this.editedIndex = -1
            })
          },
   
          save () {
            if (this.editedIndex > -1) {
              Object.assign(this.desserts[this.editedIndex], this.editedItem)
              this.ActualizarUsuarios()
             
            } else {
              this.desserts.push(this.editedItem)
              this.createUser()
             
            }
            this.close()
          },
          limpiar(){
            this.selected = []
            this.furgonSlc = ''
          }
   
        },
   
    }  
    </script>