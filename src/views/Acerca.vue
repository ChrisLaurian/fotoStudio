<template>
  <section class="hero-short">
    <h1>Nosotros</h1>
  </section>

  <main class="container">
    <section class="intro">
      <h2>Nuestros Servicios de Estudio</h2>
      <hr class="divider">
      
      <p v-if="productos.length === 0">Cargando servicios desde el catálogo...</p>

      <div v-else class="servicios-grid">
        <div v-for="item in productos" :key="item.id" class="servicio-card">
          <h3>{{ item.nombre }}</h3>
          <p>{{ item.descripcion }}</p>
          <p class="precio">Desde: ${{ item.precio }}</p>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
// Importamos el servicio que creamos en src/services/ProductoService.js
import { ProductoService } from '@/services/ProductoService';

export default {
  name: 'PaginaAcerca',
  data() {
    return {
      // Aquí guardaremos lo que responda el backend
      productos: []
    }
  },
  methods: {
    async obtenerDatosDelBackend() {
      try {
        // Llamamos a la ruta /productos de tu Slim PHP
        const res = await ProductoService.getProductos();
        
        if (res.status === 'success') {
          this.productos = res.data; // Guardamos el array de productos
        }
      } catch (error) {
        console.error("No se pudo conectar con el backend en el puerto 3307", error);
      }
    }
  },
  mounted() {
    // Al cargar el componente, ejecutamos la petición
    this.obtenerDatosDelBackend();
  }
}
</script>

<style scoped>
.servicios-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 30px;
}
.servicio-card {
  padding: 1.5rem;
  background: #f9f9f9;
  border-radius: 8px;
  border-left: 5px solid #ff6600; /* Color naranja de tu estudio */
}
.precio {
  font-weight: bold;
  color: #333;
}
</style>