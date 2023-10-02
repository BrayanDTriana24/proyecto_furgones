<template>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Teko:wght@300;500&display=swap" rel="stylesheet">
<v-card 
class="mx-auto pa-12 pb-8"
elevation="9"
max-width="448"
rounded="lg"
>
  <div>
    <div class="login">
    <h1 class="logo" style="font-family: 'Teko', sans-serif;">FURGOSANDER S.A.S</h1>
    <form @submit.prevent="onSubmit">
      Usuario
      <v-text-field
      v-model="username"
        density="compact"
        placeholder="Ingrese usuario"
        prepend-inner-icon="mdi-account-outline"
        variant="outlined"
      ></v-text-field>
      
      Contraseña
      <v-text-field
      v-model="password"
      type="password"
        density="compact"
        placeholder="Ingrese contraseña"
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
  background-color: #0858d8;
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

</style>