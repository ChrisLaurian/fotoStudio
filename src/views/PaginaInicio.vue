<template>
  <div>
    <div class="Fondo">
      
      <BarraDeBusqueda />
    </div>

    <div class="section">
      <h2>Momentos</h2>
      <div class="Line"></div>
      
      <p class="Parrafo">"Creemos que la fotografía es el único botón de pausa que tiene la vida. 
        No se trata solo de capturar una imagen, sino de atrapar la emoción de un instante irrepetible: 
        una mirada cómplice, una risa espontánea o la luz perfecta de un atardecer. 
        Nuestro objetivo es transformar esos segundos efímeros en recuerdos que perduren para siempre, 
        contando tu historia sin necesidad de palabras."</p>
    </div>

    <Carousel :images="misFotos" :interval="5000"/>

    <div class="Galeria"></div>

  </div>
</template>

<script setup>
import BarraDeBusqueda from '../components/BarraDeBusqueda.vue';
import Carousel from '../components/ComponentCarousel.vue'

const misFotos = [
  'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1000&q=80',
  'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1000&q=80',
  'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=1000&q=80'
]; 
</script>


<style scoped>
/* Your component-specific styles here */
div {
  display: flex;
  flex-direction: column;
  align-items: center; /* Centra todo verticalmente */
  text-align: center; /* Centra el texto horizontalmente */
  width: 100%;
}

.Fondo {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-image: url(../assets/img1.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-color: rgba(7, 7, 7, 0.8);
  height: 45em;
}

h1 {
  color: white;
}

.section {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 15em;
}

.Line {
  width: 90%;
  height: 5px;
  background-color: orangered;
  margin: 0 auto;
}

.Parrafo{
  width: 70%;
  height: auto;
}
</style>
