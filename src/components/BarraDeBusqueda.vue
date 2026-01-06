<template>
  <div class="search-container">
    <div class="search-box">
      
      <input 
        type="text" 
        class="search-input" 
        placeholder="Buscar..." 
      />
    </div>
  </div>
</template>

<script setup>
// No se requiere lógica por ahora, solo es estético.
</script>

<style scoped>
/* Contenedor principal para centrar la barra */
.search-container {
  display: flex;
 
 
}

/* La caja blanca de la barra */
.search-box {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 1em;
  width: 75%; 
  height: 3em;
  background: #ffffff;
  border-radius: 50px; /* Bordes redondeados (Pill shape) */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Sombra suave */
  transition: all 0.3s ease; /* Suaviza las animaciones */
  border: 1px solid transparent; /* Para que no salte al poner borde en hover */
}

/* El input invisible (sin bordes) */
.search-input {
  width: 100%;
  border: none;
  outline: none;
  background: transparent;
  font-size: 1.1rem;
  color: #333;
 
}

/* Estilo del icono SVG */
.search-icon {
  width: auto;
  height: auto;
  color: #888; /* Gris suave */
  transition: color 0.3s ease;
}

/* --- EFECTOS VISUALES --- */

/* Efecto Hover: La barra se levanta un poco y la sombra crece */
.search-box:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.15);
}

/* Efecto Focus-within: Cuando el usuario hace clic para escribir */
.search-box:focus-within {
  border-color: #ff4500; /* Borde naranja (tu color de acento) */
  box-shadow: 0 4px 12px rgba(255, 69, 0, 0.2); /* Resplandor naranja suave */
}

/* Cambiar color del icono cuando se está escribiendo */
.search-box:focus-within .search-icon {
  color: #ff4500;
}
</style>