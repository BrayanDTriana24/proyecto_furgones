<template>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Teko:wght@300;500&display=swap" rel="stylesheet">
<v-toolbar  
      dark
      prominent
      color="#2962FF"
  v-img src="../assets/furgones.jpg">
      <template v-slot:prepend>
        
      </template>
            
  
      
    </v-toolbar>
<v-card 
class="mx-auto pa-12 pb-8"
elevation="9"
max-width="448"
rounded="lg"
style="top: 18%;"
>
  <div>
    <div class="login">
    <h1 class="logo" style="font-family: 'Teko', sans-serif;">FURGOSANDER S.A.S</h1>
    <form @submit.prevent="onSubmit">
      <p>Usuario</p>
      <v-text-field
      v-model="username"
        density="compact"
        label="Ingrese usuario"
        prepend-inner-icon="mdi-account-outline"
        variant="outlined"
      ></v-text-field>
      
      <p>Contraseña</p>
      <v-text-field
      v-model="password"
      :append-inner-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
      :rules="[rules.required, rules.min]"
            :type="show1 ? 'text' : 'password'"
            name="input-10-1"
            hint="At least 4 characters"
            counter
            @click:append-inner="show1 = !show1"
        density="compact"
        label="Ingrese contraseña"
        prepend-inner-icon="mdi-lock-outline"
        variant="outlined"
      ></v-text-field>

      <button type="submit">Iniciar Sesión</button>
    </form>
    <p v-if="error">Error al iniciar sesión</p>
  </div>
  </div>
</v-card>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      username: '',
      password: '',
      error: false,

      show1: false,
        show2: true,
        
        rules: {
          required: value => !!value || 'Require',
          min: v => v.length >= 4 || 'Minimo 4 caracteres',
          emailMatch: () => (`The email and password you entered don't match`),
        },
    };
  },
  methods: {
    onSubmit() {
      this.error = false;

      if (this.username === 'admin' && this.password === '123456') {

        this.$router.push('/')
      } else {
        this.error = true;
      }
    },
  },
};
</script>

<style scoped>


h1 {
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
}
.logo{
  font-size: 55px;
}

h3 {
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
}

input {
  width: 100%;
  padding: 10px;
  border: 1px solid #0b0b0b;
  margin-bottom: 10px;
  font-size: 15px;
}

button {
  width: 100%;
  background-color: #2962FF;
  border-radius: 10px;
  color: white;
  padding: 10px;
  border: none;
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;
  
}

.error {
  color: rgb(255, 0, 0);
  font-size: 16px;
  font-weight: bold;
  margin-top: 10px;
}

p{
  padding: 2%;
}
</style>