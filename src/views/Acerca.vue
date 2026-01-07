<template>


  <main class="container">

    <section class="intro">
      <h2>Nuestros Servicios de Estudio</h2>
      
      
      <p v-if="productos.length === 0">Cargando servicios desde el catálogo...</p>

      <div v-else class="servicios-grid">
        <div v-for="item in productos" :key="item.id" class="servicio-card">
          <img :src="'http://192.168.100.5/FotoEstudio-Backend/uploads/' + item.imagen" 
     alt="Foto de servicio" 
     style="width: 100%; border-radius: 8px;">
          <h3>{{ item.nombre }}</h3>
          <p>{{ item.descripcion }}</p>
          <p class="precio">Desde: ${{ item.precio }}</p>
          <button @click="irAEditar(item.id)" class="btn-editar">
     Editar
          </button>
          <button @click="borrarServicio(item.id, item.nombre)" class="btn-borrar">
     Borrar
</button>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import { ProductoService } from '@/services/ProductoService';

export default {
  name: 'PaginaAcerca',
  data() {
    return {
      productos: [],
      nuevoProducto: { nombre: '', descripcion: '', precio: '', imagen: '' },
      editando: false,
      idEnEdicion: null
    }
  },
  methods: {
    async obtenerDatosDelBackend() {
      try {
        const res = await ProductoService.getProductos();
        if (res.status === 'success') {
          this.productos = res.data;
        }
      } catch (error) {
        console.error("Error al obtener datos:", error);
      }
    },

    seleccionarParaEditar(item) {
      this.editando = true;
      this.idEnEdicion = item.id;
      this.nuevoProducto = { ...item }; 
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },

    async enviarFormulario() {
      try {
        if (this.editando) {
          await ProductoService.actualizarProducto(this.idEnEdicion, this.nuevoProducto);
          alert("¡Servicio actualizado!");
        } else {
          await ProductoService.guardarProducto(this.nuevoProducto);
          alert("¡Servicio creado!");
        }
        this.cancelarEdicion();
        this.obtenerDatosDelBackend(); // Recargar la lista
      } catch (error) {
        console.error(error);
      }
    },

    irAEditar(id) {
    // Redirigimos a la ruta del formulario pasando el ID
    this.$router.push({ name: 'ComponentFormulario', params: { id: id } });
},

    cancelarEdicion() {
      this.editando = false;
      this.idEnEdicion = null;
      this.nuevoProducto = { nombre: '', descripcion: '', precio: '', imagen: '' };
    },
    async borrarServicio(id, nombre) {
    // 1. Pedimos confirmación al usuario
    const confirmar = confirm(`¿Estás seguro de que quieres eliminar "${nombre}"?`);
    
    if (confirmar) {
        try {
            const res = await ProductoService.eliminarProducto(id);
            if (res.status === 'success') {
                alert("Servicio eliminado con éxito");
                // 2. Volvemos a cargar la lista para que desaparezca el que borramos
                this.obtenerDatosDelBackend(); 
            } else {
                alert("Error al eliminar: " + res.message);
            }
        } catch (error) {
            console.error(error);
            alert("No se pudo conectar con el servidor");
        }
    }
}
  }, // AQUÍ SE CIERRA METHODS
  mounted() {
    this.obtenerDatosDelBackend();
  }
}
</script>

<style scoped>

.intro{
  margin-top: 1em;
}
.servicios-grid {
  display: flex;
  flex-direction: row;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 30px;
}
.servicio-card {
  display: flex;
  justify-content: center;
  padding: 1.5rem;
  background: #f9f9f9;
  border-radius: 8px;
  border-left: 5px solid #ff6600; /* Color naranja de tu estudio */
  margin-bottom: 2em;
}

.servicio-card img {
  width: 10em;
  height: 25em;
}

.servicio-card h3{
  margin-top: 5px;
}

.servicio-card p {
  margin-top: 5px;
}

.precio {
  font-weight: bold;
  color: #333;
}

.btn-editar {
  align-self: center;
    background-color: #ffc107;
    color: black;
    border: none;
    padding: 5px 10px;
    margin: 1em;
    border-radius: 4px;
    cursor: pointer;
}

.btn-editar:hover{
    background-color: #ecd17d;
}

.btn-borrar {
    background-color: #ff4d4d;
    color: white;
    border: none;
    padding: 8px 12px;
    border-radius: 4px;
    cursor: pointer;
    
    transition: background 0.3s;
}

.btn-borrar:hover {
    background-color: #cc0000;
}
</style>