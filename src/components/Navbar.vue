<template>
    <nav>
    <div class="logo">
      <img src="@/assets/LogoCamera.png" alt="Logo de la empresa" />
    </div>
    <ul>
      <li><router-link to="/">Inicio</router-link></li>
      <li><router-link to="/acerca">Acerca de</router-link></li>
      <li><router-link to="/contacto">Contacto</router-link></li>
    </ul>
  </nav>
  </template>
  
  <script>
  export default {
    name: 'BarraNavegacion'
  }
  </script>
  
  <style scoped>
/* Estilos CSS para tu barra de navegación */
nav {
  background-color: #333;
  color: white;
  display: flex;
  justify-content: space-between; /* Alineación entre el logotipo y los enlaces */
  align-items: center; /* Alinear verticalmente el contenido */
  height: 7em;
  width: 100%;
}

.logo{
  display: flex;
  order: 1;
  height: auto;
  width: auto;
}

ul {
  order: 5;
  list-style: none;
  display: flex;
  padding: 0;
  flex-direction: row;
  
}


a {
  font-size: large;
  text-decoration: none;
  color: white;
  transition: color 0.3s;
}

a:hover {
  color: orangered;
}

.logo img {
  max-width: 300px;
  transition: all 0.3s; /* Transición de 0.3 segundos para todos los cambios */
}

.logo img:hover {
  transform: scale(1.1); /* Cambia el tamaño al 110% del tamaño original al pasar el mouse */
  opacity: 0.8; /* Reduce la opacidad al 80% al pasar el mouse */
}
</style>
