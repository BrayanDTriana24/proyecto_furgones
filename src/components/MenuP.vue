<template>
  <div>
    <v-toolbar
      dark
      prominent
      image="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title></v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn>
        <v-icon></v-icon>
      </v-btn>
    </v-toolbar>
  </div>
  <v-row>
    <template v-for="(image,imgIdx) in imageLayout" :key="imgIdx">
      <v-col :cols="image.cols">
        <v-img
          :src="`https://picsum.photos/500/300?image=${image.cols * 20}`"
          cover
          height="90%"
        ></v-img>
      </v-col>

      <v-col v-if="image.children" cols="6" class="d-flex flex-column">
        <v-row>
          <v-col v-for="(children,childIdx) in image.children" :key="childIdx" :cols="children.cols">
            <v-img
              :src="`https://picsum.photos/500/300?image=${children.cols + childIdx}`"
              cover
              height="90%"
            ></v-img>
          </v-col>
        </v-row>
      </v-col>
    </template>
  </v-row>

  <v-footer class="bg-grey-lighten-1">
    <v-row justify="center" no-gutters>
      <v-btn
        v-for="link in links"
        :key="link"
        color="black"
        variant="text"
        class="mx-2"
        rounded="xl"
      >
        {{ link }}
      </v-btn>
      <v-col class="text-center mt-4" cols="12">
        {{ new Date().getFullYear() }} — <strong>Furgosander SAS</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script setup>
  const imageLayout = [
    { cols: 4 },
    {
      cols: 8,
      children: [{ cols: 12 }, { cols: 12 }],
    },
    { cols: 6 },
    { cols: 3 },
    { cols: 9 },
    { cols: 4 },
    { cols: 8 },
  ]
</script>

<script>
export default {
    data: () => ({
      links: [
        'Inicio',
        'Furgones',
        'Proveedores',
        'Administrador',
        'Contacto',
      ],
    }),
  }</script>