<template>
  <section class="admin-section">
    <h3>{{ editando ? 'Editar Servicio' : 'Agregar Nuevo Trabajo/Servicio' }}</h3>
    
    <form @submit.prevent="enviarFormulario" class="formulario">
      <input v-model="nuevoProducto.nombre" type="text" placeholder="Nombre del servicio" required>
      
      <textarea v-model="nuevoProducto.descripcion" placeholder="Descripción"></textarea>
      
      <input v-model="nuevoProducto.precio" type="text" placeholder="Precio (ej: 1500)">

      <label>Imagen del servicio:</label>
<input type="file" @change="alSeleccionarArchivo">

<p v-if="nuevoProducto.imagen">Imagen actual: {{ nuevoProducto.imagen }}</p>
      
      <button type="submit">
        {{ editando ? 'Actualizar en Base de Datos' : 'Guardar en Base de Datos' }}
      </button>

      <button v-if="editando" type="button" @click="$router.push('/nosotros')" style="background: gray; margin-top: 5px;">
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
      editando: false, // Faltaba esto
      idEnEdicion: null, // Faltaba esto
      nuevoProducto: {
        nombre: '',
        descripcion: '', // Corregido de "description" a "descripcion"
        precio: '',
        imagen: 'default.jpg'
      }
    }
  },
  async mounted() {
    // Revisamos si la URL trae un ID (ej: /formulario/2)
    const id = this.$route.params.id;
    if (id) {
      this.editando = true;
      this.idEnEdicion = id;
      await this.cargarProductoParaEditar(id);
    }
  },
  methods: {
    async cargarProductoParaEditar(id) {
      try {
        // Usamos el servicio (él es quien tiene la API_URL, por eso aquí no falla)
        const res = await ProductoService.getProducto(id); 
        if (res.status === 'success') {
          this.nuevoProducto = res.data;
        }
      } catch (error) {
        console.error("Error al cargar el producto", error);
      }
    },

    // 1. Capturamos el archivo cuando el usuario lo elige
    alSeleccionarArchivo(event) {
        this.archivoSeleccionado = event.target.files[0];
    },

    async enviarFormulario() {
        try {
            // 2. Si hay una foto nueva seleccionada, la subimos PRIMERO
            if (this.archivoSeleccionado) {
                const resImagen = await ProductoService.subirImagen(this.archivoSeleccionado);
                if (resImagen.status === 'success') {
                    // Guardamos el nombre del archivo que nos dio el servidor
                    this.nuevoProducto.imagen = resImagen.filename;
                }
            }

            // 3. Luego guardamos/actualizamos el producto con el nombre de la imagen ya listo
            if (this.editando) {
                await ProductoService.actualizarProducto(this.idEnEdicion, this.nuevoProducto);
            } else {
                await ProductoService.guardarProducto(this.nuevoProducto);
            }
            
            this.$router.push('/nosotros');
        } catch (error) {
            alert("Error en el proceso");
        }
    }
    

},
}
</script>

<style scoped>
/* Tu CSS está perfecto, no hace falta cambiarlo */
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
.formulario button {
  background: #ff6600;
  color: white;
  font-weight: bold;
  cursor: pointer;
  border: none;
  padding: 10px;
}


</style>