<template>
<div  class = "d-flex align-center justify-center" style = "height: 100vh" > 
<v-sheet width = " 400 " class =" mx - auto " > 
<v-form  fast-fail  submit.prevent = "iniciar sesión" > 
        <v-text-field  v-model = "nombre_de_usuario"  label = "Nombre de usuario" > </v-text-field >
        <v-text-field  v-model = "contraseña" label = "contraseña" > </v-text-field >     
        <v-btn  type = "enviar"  color = "primary"  block  class = "mt-2" prepend-icon="mdi-cash" title="Menu" value="Menu" router-link to="/" click="console">Iniciar sesión</v-btn >

    </v-form > 
    <div  class = "mt-2" > 
         
</div> 
</v-sheet > </div > 

</template>


<script> 
export default {
data (){
 return{
     nombre_de_usuario: '' ,
     contraseña: '' ,
 };
},
métodos : {
 iniciar_sesión () {
    const usuario="admin"
    const clave = 1234
    const usuario1= "admin"
    const clave1="1234"
 
   if(usuario==usuario1 & clave==clave1){
    console.log("Usuario y contraseña correcta")
}
else{console.log("Contraseña incorrecta")
}

if(usuario===usuario1 & clave===clave1){
    console.log("Usuario y contraseña correcta")
}
else{console.log("Contraseña incorrecta")
}
},
},
}
</script>
 