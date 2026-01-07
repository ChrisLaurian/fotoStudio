<template>
  <section class="admin-section">
    <h3>{{ editando ? 'Editar Servicio' : 'Agregar Nuevo Trabajo/Servicio' }}</h3>
    
    <form @submit.prevent="enviarFormulario" class="formulario">
      <input v-model="nuevoProducto.nombre" type="text" placeholder="Nombre del servicio" required>
      
      <textarea v-model="nuevoProducto.descripcion" placeholder="Descripción"></textarea>
      
      <input v-model="nuevoProducto.precio" type="text" placeholder="Precio (ej: 1500)">

      
        <input id="Subirimg" type="file" @change="alSeleccionarArchivo" accept="image/*">

        <p v-if="nuevoProducto.imagen">Imagen actual: {{ limitarCaracteres(nuevoProducto.imagen, 25) }}
        <img class="Prev" :src="'http://192.168.100.5/FotoEstudio-Backend/uploads/' + nuevoProducto.imagen" width="50"></p>

      <button type="submit">
        {{ editando ? 'Actualizar en Base de Datos' : 'Guardar en Base de Datos' }}
      </button>

      <button v-if="editando" type="button" @click="$router.push('/acerca')"  style="background: gray; margin-top: 5px;">
        Cancelar
      </button>
    </form>
  </section>
</template>

<script>
import { ProductoService } from '@/services/ProductoService';

export default {
  name: 'ComponentFormulario',
  data() {
    return {
      editando: false,
      idEnEdicion: null,
      archivoSeleccionado: null,
      imagenPreview: null,
      nuevoProducto: {
        nombre: '',
        descripcion: '',
        precio: '',
        imagen: 'default.jpg'
      }
    }
  },
  async mounted() {
    const id = this.$route.params.id;
    if (id) {
      this.editando = true;
      this.idEnEdicion = id;
      await this.cargarProductoParaEditar(id);
    }
  },
  methods: { // <--- Inician los métodos
    async cargarProductoParaEditar(id) {
      try {
        const res = await ProductoService.getProducto(id); 
        if (res.status === 'success') {
          this.nuevoProducto = res.data;
        }
      } catch (error) {
        console.error("Error al cargar el producto", error);
      }
    },

    limitarCaracteres(texto, limite) {
      if (!texto) return '';
      if (texto.length > limite) {
        return texto.substring(0, limite) + "...";
      }
      return texto;
    },

    alSeleccionarArchivo(event) {
      const file = event.target.files[0];
      if (file) {
        this.archivoSeleccionado = file;
        console.log("Archivo capturado:", file.name);
        this.imagenPreview = URL.createObjectURL(file);
      }
    },

    async enviarFormulario() {
      try {
        if (this.archivoSeleccionado) {
          console.log("Subiendo imagen...");
          const resImagen = await ProductoService.subirImagen(this.archivoSeleccionado);
          if (resImagen.status === 'success') {
            this.nuevoProducto.imagen = resImagen.filename;
          }
        }

        if (this.editando) {
          await ProductoService.actualizarProducto(this.idEnEdicion, this.nuevoProducto);
        } else {
          await ProductoService.guardarProducto(this.nuevoProducto);
        }

        this.$router.push('/acerca');
      } catch (error) {
        console.error("Error completo:", error);
        alert("Algo falló al guardar");
      }
    }
  } // <--- AQUÍ deben cerrar los métodos
}
</script>

<style scoped>
.admin-section p{
    color: white;
}
.formulario {
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 400px;
  margin: 20px 0;
  padding: 20px;
  background: #333;
  border-radius: 10px;
}
.formulario input, .formulario textarea {
  padding: 10px;
  border-radius: 5px;
  border: none;
  
}

#Subirimg {
 color: white;
}

.formulario button {
  background: #ff6600;
  color: white;
  font-weight: bold;
  cursor: pointer;
  border: none;
  padding: 10px;
}

.Prev{
    border-radius: 10px;
    
}

</style>