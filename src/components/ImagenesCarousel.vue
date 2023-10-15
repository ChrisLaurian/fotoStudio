<template>
    <div>
      <carousel>
        <slide v-for="imagen in imagenes" :key="imagen.id">
          <a :href="imagen.pageURL" target="_blank">
            <img :src="imagen.webformatURL" alt="Imagen Pixabay" />
          </a>
        </slide>
      </carousel>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    created() {
      axios.get('https://pixabay.com/api/', {
        params: {
          key: '10774321-d8a84977f88265b2e7511b1bb',
          q: 'nature',
          image_type: 'photo',
          per_page: 5,
          order: 'popular',
        }
      })
      .then(response => {
        this.imagenes = response.data.hits;
      });
    },
    data() {
      return {
        imagenes: [],
      };
    },
  };
  </script>
  
  <style scoped>
  /* Estilos CSS para el carrusel de imágenes */
  .carousel {
    display: flex;
    overflow: hidden;
  }
  
  .slide {
    flex: 0 0 100%; /* Tamaño del slide */
    padding: 10px;
    box-sizing: border-box;
  }
  
  img {
    max-width: 100%; /* Ajusta el tamaño de la imagen */
  }
  
  a {
    text-decoration: none;
  }
  
  a:hover {
    border: 1px solid #007BFF; /* Estilo de borde al pasar el mouse sobre el enlace */
  }
  </style>
  