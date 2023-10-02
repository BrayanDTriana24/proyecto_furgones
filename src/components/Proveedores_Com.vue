<template>
 <div>
    <v-toolbar
      dark
      prominent
      image="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>PROVEEDORES</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-export</v-icon>
      </v-btn>
    </v-toolbar>
  </div>

  <v-data-table
    :group-by="groupBy"
    :headers="headers"
    :items="desserts"
    :sort-by="sortBy"
        class="elevation-1"
    item-value="name"
  ></v-data-table>
</template>

<script>
  export default {
    data: () => ({
      sortBy: [{ key: 'name', order: 'asc' }],
      groupBy: [{ key: 'dairy', order: 'asc' }],
      headers: [
        {
          title: 'Nombre',
          align: 'start',
          key: 'name',
          groupable: false,
        },
        { title: 'Cantidad', key: 'category', align: 'end' },
        { title: 'Materiales', key: 'dairy', align: 'end' },
        { title: 'Teléfono', key: 'dairy', align: 'end' },
      ],
      desserts: [
        {
          name: 'Material 1',
          category: '1800kg',
          dairy: 'Homecenter',
        },
        {
          name: 'Material 2',
          category: '',
          dairy: 'Constructor',
        },
        {
          name: 'Material 3',
          category: '',
          dairy: 'La Casita',
        },
        {
          name: 'Material 4',
          category: '',
          dairy: 'Homecenter',
        },
        {
          name: 'Material 6',
          category: '',
          dairy: 'Si',
        },
        {
          name: 'Material 7',
          category: '',
          dairy: 'No',
        },
        {
          name: 'Material 8',
          category: '',
          dairy: 'No',
        },
        {
          name: 'Material 9',
          category: '',
          dairy: 'Si',
        },
        {
          name: 'Material 10',
          category: '',
          dairy: 'No',
        },
        {
          name: 'Material 11',
          category: '',
          dairy: 'Si',
        },
      ],
    }),
  }
</script>