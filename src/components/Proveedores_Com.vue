<template> 

  <v-container>
    <v-data-table
      :headers="headers"
      :items="desserts"
      :sort-by="[{ key: 'calories', order: 'asc' }]"
      class="elevation-1"
    >
      <template v-slot:top>
        <v-toolbar
          flat
        >
          <v-toolbar-title>Lista de Proveedores</v-toolbar-title>
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
                Añadir Proveedor
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
                        v-model="editedItem.id"
                        label="Id"
                      ></v-text-field>
                    </v-col>

                    <v-col
                      cols="12"
                      sm="6"
                      md="4"
                    >
                      <v-text-field
                        v-model="editedItem.nombre"
                        label="Nombre"
                      ></v-text-field>
                    </v-col>
                    <v-col
                      cols="12"
                      sm="6"
                      md="4"
                    >
                      <v-text-field
                        v-model="editedItem.telefono"
                        label="Telefono"
                      ></v-text-field>
                    </v-col>

                    <v-col
                      cols="12"
                      sm="6"
                      md="4"
                    >
                      <v-text-field
                        v-model="editedItem.direccion"
                        label="Direccion"
                      ></v-text-field>
                    </v-col>

                    <v-col
                      cols="12"
                      sm="6"
                      md="4"
                    >
                      <v-text-field
                        v-model="editedItem.material"
                        label="Material"
                      ></v-text-field>
                    </v-col>

                      
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
  </v-container>
  
    </template>
  
  
  <script>
  
  import db from '../firebase/init.js'
  import {collection, getDocs, query, addDoc,updateDoc,doc, deleteDoc} from  'firebase/firestore'
  /* import jspdf from 'jspdf' */
  /* require (jspdf.autotable) */

    export default{
     /*  created(){ */
       /* this.createUsuario();  */
  /*     }, */
    data: () => ({
        dialog: false,
        dialogDelete: false,
        headers: [
          {
        /*     title: 'Dessert (100g serving)', */
            align: 'start',
            sortable: false,
            key: 'name',
          },
          { title: 'Id', key: 'id' },
          { title: 'Nombre', key: 'nombre' },
          { title: 'Telefono', key: 'telefono' },
          { title: 'Direccion', key: 'direccion' },
          { title: 'Material', key: 'material' },
          { title: 'Opciones', key: 'actions', sortable: false },
        ],
        desserts: [],
        editedIndex: -1,
        editedItem: {
          keyid: 0,
          id: 0,
          nombre: 0,
          telefono: 0,
          direccion: 0,
          material: 0,
          
        },
        defaultItem: {
          id: 0,
          nombre: 0,
          telefono: 0,
          direccion: 0,
          material: 0,
        },
      }),
  
      computed: {
        formTitle () {
          return this.editedIndex === -1 ? 'Nuevo Usuario' : 'Actualizar Usuario'
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
          async createUser(){
          const colRef = collection(db, 'proveedores')
          const dataObj = {
              id: this.editedItem.id,
              nombre: this.editedItem.nombre,
              telefono: this.editedItem.telefono,
              direccion: this.editedItem.direccion,
              material: this.editedItem.material
          }
          const docRef = await addDoc(colRef, dataObj);
          console.log("Creo el proveedor ", docRef.id)
      },
  
        async listarUsuarios(){
          const q = query(collection(db, "proveedores"));
          const resul = await getDocs(q);
          resul.forEach((doc)=>{
            console.log("id",doc.id);
            this.desserts.push({
              keyid:doc.id,
              id:doc.data().id,
              nombre:doc.data().nombre,
              telefono:doc.data().telefono,
              direccion:doc.data().direccion,
              material:doc.data().material
              })
          })
        },

        async ActualizarUsuarios(){
         
          console.log(this.editedItem.keyid)
          const Ref = (doc(db, "proveedores",this.editedItem.keyid));
          await updateDoc (Ref,{
            nombre: this.editedItem.nombre,
              telefono: this.editedItem.telefono,
              direccion: this.editedItem.direccion,
              material: this.editedItem.material
          }).then(console.log("Termino update Usuarios"))
          .catch(function(error){
            console.log(error)
          });
        },
        
        async EliminarUsuarios(){
          console.log(this.editedItem.keyid)
          const Ref = (doc(db, "proveedores",this.editedItem.keyid));
          await deleteDoc (Ref,{
              nombre: this.editedItem.nombre,
              telefono: this.editedItem.telefono,
              direccion: this.editedItem.direccion,
              material: this.editedItem.material
          }).then(console.log("eliminar Usuarios"))
          .catch(function(error){
            console.log(error)
          });
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
  
      },
  
  }   
  </script>