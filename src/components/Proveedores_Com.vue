<template>
    <v-container class="text-center">
      <v-card elevation="5">
        <v-card-title class="headline">Menú de Comidas Rápidas</v-card-title>
      </v-card>
      <v-card elevation="0" class="mt-4">
        <!-- Categorías -->
        <v-row justify="center">
          <v-col
            cols="12"
            sm="6"
            md="4"
            lg="3"
            v-for="(category, index) in menuItems"
            :key="index"
          >
            <v-card class="ma-2">
              <v-card-title class="headline">{{ category.name }}</v-card-title>
              <v-row>
                <v-col
                  cols="12"
                  v-for="(menuItem, itemIndex) in category.items"
                  :key="itemIndex"
                >
                  <v-card>
                    <v-img
                      :src="menuItem.image"
                      :alt="menuItem.name"
                      max-width="300"
                      max-height="300"
                    ></v-img>
                    <v-card-title class="headline">{{ menuItem.name }}</v-card-title>
                    <v-card-subtitle>{{ menuItem.description }}</v-card-subtitle>
                    <v-card-actions>
                      <v-btn icon @click="addItemToCart(menuItem)">
                        <v-icon>mdi-plus</v-icon>
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-card>
      <v-card elevation="5" class="mt-4">
        <v-card-title class="headline">Carrito de Compras</v-card-title>
        <v-list>
          <v-list-item v-for="(cartItem, index) in cart" :key="index">
            {{ cartItem.name }} - {{ cartItem.quantity }} x ${{ cartItem.price }}
            <v-btn icon @click="removeItemFromCart(cartItem)">
              <v-icon>mdi-delete</v-icon>
            </v-btn>
          </v-list-item>
        </v-list>
        <v-card-actions>
          Total: ${{ calculateTotal() }}
        </v-card-actions>
      </v-card>
    </v-container>
  </template>
  
  <script>
  export default {
    name: 'MenuComidasRapidas',
    data() {
      return {
        menuItems: [
          {
            name: 'HAMBURGUESAS',
            items: [
              {
                name: 'Baby Grilled',
                description: 'Pan parmessano,carne 130gr,mix de quesos,papita crunch,doble tocineta,vegetales frescos,acompañado de papas a la francesa.',
                image: require('@/assets/burger1.jpg'),
                price: 15000,
              },
              {
                name: 'Classic',
                description: 'Pan parmessano,carne 130gr,mix de quesos,papita crunch, filete de pechuga 100gr,vegetales frescos,acompañado de papas a la francesa.',
                image: require('@/assets/burger1.jpg'),
                price: 17000,
              },              {
                name: 'Fusion',
                description: 'Pan parmessano,carne 130gr,mix de quesos,papita crunch,filete de pechuga 100gr,tocineta,chorizo ahumado,vegetales frescos,acompañado de papas a la francesa.',
                image: require('@/assets/burger1.jpg'),
                price: 20000,
              },
              {
                name: 'Monster',
                description: 'Pan parmessano, doble carne 260gr,mix de quesos,papita crunch,doble tocineta,vegetales frescos,acompañado de papas a la francesa.',
                image: require('@/assets/burger1.jpg'),
                price: 24000,
              },
              // Agrega más platos de hamburguesas aquí
            ],
          },
          {
            name: 'PERROS CALIENTES',
            items: [
              {
                name: 'Dog Grilled',
                description: 'Pan parmessano,papita crunch,cebolla grilled,salchicha premium,doble queso mozzarella y tocineta, acompañado de papas a la francesa.',
                image: require('@/assets/perro1.jpg'),
                price: 13000,
              },
              {
                name: 'Dog Crazy',
                description: 'Pan parmessano,papita crunch,cebolla grilled,salchicha premium,mix de quesos,cortes de chorizo,maicitos acompañado de papas a la francesa.',
                image: require('@/assets/perro1.jpg'),
                price: 15000,
              },{
                name: 'Dog Rancher',
                description: 'Pan parmessano,papita crunch,cebolla grilled,salchicha premium,doble queso mozzarella,cortes de lomo fino, cortes de pechuga, acompañado de papas a la francesa.',
                image: require('@/assets/perro1.jpg'),
                price: 17000,
              },
              {
                name: 'Dog American',
                description: 'Pan parmessano,papita crunch,cebolla grilled,salchicha premium,doble queso mozzarella,pollo desmechado en salsa tartara, tocineta caramelizada, acompañado de papas a la francesa.',
                image: require('@/assets/perro1.jpg'),
                price: 19000,
              },
              // Agrega más platos de perros calientes aquí
            ],
          },
          {
            name: 'PINCHOS',
            items: [
              {
                name: 'Mixto',
                description: 'Cortes de lomo fino y pechuga 300gr asados al carbon, acompadaño con papa al vapor o papa criolla junto a nuestras salsas de la casa.',
                image: require('@/assets/pincho1.jpg'),
                price: 15000,
              },
              {
                name: 'Solo Carne',
                description: 'Cortes de lomo fino 300gr asados al carbon, acompadaño con papa al vapor o papa criolla junto a nuestras salsas de la casa.',
                image: require('@/assets/pincho1.jpg'),
                price: 14000,
              },              {
                name: 'Solo Pechuga',
                description: 'Cortes de pechuga 300gr asados al carbon, acompadaño con papa al vapor o papa criolla junto a nuestras salsas de la casa.',
                image: require('@/assets/pincho1.jpg'),
                price: 16000,
              },
              {
                name: 'Chori Pincho',
                description: 'Chorizos premium asados al carbon, acompadaño con papa al vapor o papa criolla junto a nuestras salsas de la casa.',
                image: require('@/assets/pincho1.jpg'),
                price: 13000,
              },
              // Agrega más platos de papas fritas aquí
            ],
          },
          // Agrega más categorías y platos según sea necesario
        ],
        cart: [], // Arreglo para mantener los elementos del carrito
      };
    },
    methods: {
      addItemToCart(menuItem) {
        // Buscar si el plato ya está en el carrito
        const cartItem = this.cart.find(item => item.name === menuItem.name);
        if (cartItem) {
          cartItem.quantity++;
        } else {
          // Si no existe, agregarlo al carrito
          this.cart.push({
            name: menuItem.name,
            quantity: 1,
            price: menuItem.price,
          });
        }
      },
      removeItemFromCart(cartItem) {
        // Encontrar el índice del elemento en el carrito
        const index = this.cart.indexOf(cartItem);
        if (index !== -1) {
          // Si se encuentra, eliminarlo del carrito
          this.cart.splice(index, 1);
        }
      },
      calculateTotal() {
        // Calcular el total sumando los precios de los elementos en el carrito
        return this.cart.reduce((total, cartItem) => total + cartItem.price * cartItem.quantity, 0);
      },
    },
  };
  </script>
  
  <style scoped>
  .menu-card {
    background-color: #f5f5f5;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  }
  
  .category-card {
    background-color: #fff;
    border: 1px solid #e0e0e0;
    border-radius: 5px;
    padding: 10px;
  }
  
  .menu-item-card {
    background-color: #fff;
    border: 1px solid #e0e0e0;
    border-radius: 5px;
    margin-top: 10px;
    transition: transform 0.2s;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  }
  
  .menu-item-card:hover {
    transform: translateY(-5px);
  }
  
  .menu-item-title {
    font-size: 1.2rem;
    color: #333;
  }
  
  .menu-item-description {
    font-size: 0.9rem;
    color: #666;
  }
  
  .cart-card {
    background-color: #f5f5f5;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  }
  </style>
  
  