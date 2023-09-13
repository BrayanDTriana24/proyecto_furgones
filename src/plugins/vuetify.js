// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'


// Vuetify
import { createVuetify } from 'vuetify'
/* import colors from 'vuetify/lib/util/colors' */

export default createVuetify({
  theme: {
    themes: {
      light: {
        dark: false,
        colors: {
          primary: "#E53935",
          secondary: "#FFCDD2",
          tercero: "#03A9F4"
        }
      },
    },
  },
})
