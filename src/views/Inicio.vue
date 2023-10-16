<template>
  <div>
    <div class="Fondo">
      <h1>Lorem ipsum</h1>
    </div>

    <div class="section">
      <h2>Example</h2>
      <div class="Line"></div>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident earum exercitationem adipisci enim hic totam deserunt labore qui iste doloribus ab corrupti, beatae distinctio quos, eius quis eum reiciendis quibusdam.</p>
    </div>

    <div class="Galeria"></div>

    <div class="Footer">
      <div class="FooterSection">
        <h3>Contacto</h3>
        <ul>
          <li>
            <a href="#">Telefono</a>
          </li>
          <li>
            <a href="#">Correo</a>
          </li>
        </ul>
      </div>

      <div class="FooterSection">
        <h3>Direccion</h3>
        <ul>
          <li>
            <a href="#">Contacto</a>
          </li>
        
        </ul>
      </div>

      <div class="FooterSection">
        <h3>Redes Sociales</h3>
        <ul>
          <li>
            <a href="#">Facebook</a>
          </li>
          <li>
            <a href="#">Instagram</a>
          </li>
        </ul>
      </div>

      <div class="FooterSection">
        <h3>Legal</h3>
        <ul>
          <li>
            <a href="#">Aviso de Privacidad</a>
          </li>
        </ul>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'PaginaInicio',
};
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

.Footer {
  background-color: #333;
  display: flex;
  flex-direction: row; /* Organiza las secciones horizontalmente */
  justify-content: center;
  align-items: center;
  height: 25em;
}

.FooterSection {
  display: flex;
  flex-direction: column;
  align-items: center;
}

ul {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  margin: 0;
  color: white;
}

li {
  margin: 0 10px;
  
}

a {
  font-size: medium;
  text-decoration: none;
  color: white;
  transition: color 0.3s;
}

a:hover {
  color: orangered;
}

h3{
  color: orangered;
  font-size: medium;
}
</style>
