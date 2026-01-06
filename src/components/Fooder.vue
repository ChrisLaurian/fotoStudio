<template>
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

</template>

<script>
export default {
    name: 'PieDePagina',
}
</script>

<style>

div {
  display: flex;
  flex-direction: column;
  align-items: center; /* Centra todo verticalmente */
  text-align: center; /* Centra el texto horizontalmente */
  width: 100%;
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
  margin-top: 5px;
  
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