<template>

  <div>
    <div class="login">
    <h1>FURGOSANDER</h1>
    <v-img src="../assets/Furgosander.png" style="width:80%; margin-left: 10%;" ></v-img><br>
    
    <form @submit.prevent="onSubmit">
      <input type="text" v-model="username" placeholder="Usuario"><br>
      <input type="password" v-model="password" placeholder="Contraseña">
      <button type="submit">Iniciar Sesión</button>
    </form>
    <p v-if="error">Error al iniciar sesión</p>
  </div>
  </div>
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
      // Conectar con la base de datos
      // ...
      // Comprobar las credenciales
      if (this.username === 'admin' && this.password === '123456') {
        // Iniciar sesión
        // ...
        this.$router.push('/')
      } else {
        // Error al iniciar sesión
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
  color: #fff;
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
.login{
  width: 50%;
    margin: auto;
    padding: 5%;
    top: 10%;
    border-radius: 8%;
    background-color: white;
    box-shadow: 0 0 10px rgba(27, 61, 235, 0.1);
    font-family: 'Times New Roman', Times, serif;

}

</style>