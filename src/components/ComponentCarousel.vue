<template>
  <div class="carousel-container" @mouseenter="pauseTimer" @mouseleave="resumeTimer">
    
    <transition-group name="fade" tag="div" class="carousel-track">
      <div 
        v-for="(img, index) in images" 
        :key="img" 
        v-show="index === currentIndex" 
        class="slide"
      >
        <img :src="img" alt="Foto de estudio" />
      </div>
    </transition-group>

    <div class="indicators">
      <span 
        v-for="(img, index) in images" 
        :key="'dot-' + index"
        :class="['dot', { active: index === currentIndex }]"
        @click="goToSlide(index)"
      ></span>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, defineProps } from 'vue';

// Recibimos las imágenes y el tiempo desde el padre
const props = defineProps({
  images: {
    type: Array,
    required: true
  },
  interval: {
    type: Number,
    default: 2000 // 4 segundos por defecto
  }
});

const currentIndex = ref(0);
let timer = null;

// Funciones de control
const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % props.images.length;
};

const goToSlide = (index) => {
  currentIndex.value = index;
};

// Lógica del temporizador (Autoplay)
const startTimer = () => {
  timer = setInterval(nextSlide, props.interval);
};

const pauseTimer = () => {
  clearInterval(timer);
};

const resumeTimer = () => {
  startTimer();
};

// Ciclo de vida: Iniciar al montar, limpiar al destruir
onMounted(() => {
  startTimer();
});

onUnmounted(() => {
  pauseTimer(); // Limpieza para evitar fugas de memoria
});
</script>

<style scoped>
.carousel-container {
  position: relative;
  width: 100%;
  height: 60vh; /* Altura del carrusel (60% de la pantalla) */
  overflow: hidden;
  background-color: #000; /* Fondo negro por si la imagen no carga */
}

/* Contenedor de las imágenes */
.carousel-track {
  width: 100%;
  height: 100%;
  position: relative;
}

.slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.slide img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Recorta la imagen para llenar el espacio sin deformar */
  display: block;
}

/* --- Transición Fade (Desvanecimiento suave) --- */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}

/* --- Indicadores (Puntitos) --- */
.indicators {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 10px;
  z-index: 10;
}

.dot {
  width: 12px;
  height: 12px;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.3s;
}

.dot.active {
  background-color: #ff4500; /* Tu color naranja de marca */
  transform: scale(1.2);
}
</style>