<template>
  <div class="d-flex justify-space-around" style="display: flex;margin-top: -940px;"
  >
    <div style="right: 3000px;" >
      <v-menu
      transition="scale-transition"
    >

      <template v-slot:activator="{ props }">
        <v-btn
          color="blue-accent-3"
          v-bind="props"
          span class="mdi mdi-home-circle"
        >
          Inicio
        </v-btn>
      </template>

    </v-menu>
    </div>

    <div>
      <v-menu
      transition="slide-x-transition"
    >
      <template v-slot:activator="{ props }">
        <v-btn
          color="blue-accent-3"
          v-bind="props"
          span class="mdi mdi-truck-cargo-container"
        >
          Furgones
        </v-btn>
      </template>

      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    </div>

    <div>
      <v-menu
      transition="slide-y-transition"
    >
      <template v-slot:activator="{ props }">
        <v-btn
          color="blue-accent-3"
          v-bind="props"
          span class="mdi mdi-cellphone-basic"
        >
          Contacto
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
        >
          <v-list-item-title>{{ item.title2 }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    </div>

    <div>
      <v-menu
      transition="scale-transition"
    >
      <template v-slot:activator="{ props }">
        <v-btn
          color="blue-accent-3"
          v-bind="props"
          span class="mdi mdi-account-tie"
        >
          Administrador
        </v-btn>
      </template>

      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
        >
          <v-list-item-title>{{ item.title3 }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    </div>

  </div>
</template>

<script>
  export default {
    data: () => ({
      items: [
        { title: 'Furgón 1' },
        { title: 'Furgón 2' },
        { title: 'Furgón 3' },
        { title: 'Furgón 4' },
      ],
    }),
  }
</script>