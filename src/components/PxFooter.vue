<template>
  <footer class="footer">
    <div class="contenedor">
      <!-- Back to top button -->
      <a href="#" id="back-to-top">
        <i class="fa fa-chevron-up"></i>
      </a>
      <div class="widget">
        <h3>Nosotros</h3>
        <p>
          Somos RuralORG. Una sociación cultural con sede en Callús y con vocación global.
          <br />Nos complace invitarte al 3º Encuentro Vida Rural que se celebrará del 10 al 17 de abril de 2021.
        </p>
      </div>
      <div class="widget navegacion">
        <h3>Navegación</h3>
        <nav>
          <router-link v-for="l in links" :key="l.title" :to="l.to" class>{{ l.title }}</router-link>
          <a id="contact-button-2" class="router-link-active">Contacto</a>
        </nav>
      </div>
      <div class="widget">
        <h3>Galería</h3>
        <div class="contenedor-galeria">
          <div class="imagen-galeria">
            <div class="foto">
              <img src="assets/img/walking.jpg" alt="patrocinador" />
            </div>
            <div class="info">
              <p>Senderismo</p>
              <hr />
              <p>Para toda la familia</p>
            </div>
          </div>
          <!-- imagen -->
          <div class="imagen-galeria">
            <div class="foto">
              <img src="assets/img/tienda.jpg" alt="patrocinador" />
            </div>
            <div class="info">
              <p>Acampada</p>
              <hr />
              <p>En los predios de la masía</p>
            </div>
          </div>
          <!-- imagen -->
          <div class="imagen-galeria">
            <div class="foto">
              <img src="assets/img/actividad1.jpg" alt="patrocinador" />
            </div>
            <div class="info">
              <p>Concierto de Zaz</p>
              <hr />
              <p>Cierre del encuentro</p>
            </div>
          </div>
          <!-- imagen -->
          <div class="imagen-galeria">
            <div class="foto">
              <img src="assets/img/espantapajaros.jpg" alt="patrocinador" />
            </div>
            <div class="info">
              <p>Confecciona tu espantapájaros</p>
              <hr />
              <p>Taller para niños</p>
            </div>
          </div>
          <!-- imagen -->
        </div>
      </div>
    </div>
    <!-- .contenedor -->

    <div class="patocinadores">
      <h3>Patrocinadores</h3>
      <div class="patrocinadores-links">
        <div>
          <div class="foto">
            <a href="https://elgranodemostaza.com/" target="_blank">
              <img src="assets/img/patrocinador1.jpg" alt="patrocinador" />
            </a>
          </div>
          <p>Librería El Grano de Mostaza</p>
        </div>
        <div>
          <div class="foto">
            <a href="http://masgras.com/" target="_blank">
              <img src="assets/img/patrocinador2.jpg" alt="patrocinador" />
            </a>
          </div>
          <p>Masía Mas Gras</p>
        </div>
        <div>
          <div class="foto">
            <a href="https://www.colibris-lemouvement.org/" target="_blank">
              <img src="assets/img/patrocinador3.png" alt="patrocinador" />
            </a>
          </div>
          <p>Mouvement Colibris</p>
        </div>
        <div>
          <div class="foto">
            <a href="https://www.youtube.com/channel/UCXV8HmDQt2akopxAQQt3oeg" target="_blank">
              <img src="assets/img/patrocinador4.jpg" alt="patrocinador" />
            </a>
          </div>
          <p>Caja de Pandora</p>
        </div>
        <div>
          <div class="foto">
            <a href="https://www.youtube.com/results?search_query=metabolismo+tv" target="_blank">
              <img src="assets/img/patrocinador5.jpg" alt="patrocinador" />
            </a>
          </div>
          <p>Metabolismo Tv</p>
        </div>
      </div>
    </div>
    <p class="copyright">
      <a href="https://gomez-fernando.github.io/portfolio/" target="_blank" rel="noopener noreferrer">Developed with
        &#x1F49A; by Fernando Gómez &copy; 2020</a>
    </p>
  </footer>
</template>

<script>
  export default {
    name: "PxHeader",

    props: {
      links: {
        type: Array,
        default: () => []
      }
    }
  };
</script>

<style>
  /* FOOTER  */
  .footer {
    background-color: var(--primario);
    margin-top: var(--padding2);
    padding-top: var(--padding2);
    color: var(--claro);
  }

  @media (min-width: 768px) {
    .footer .contenedor {
      display: grid;
      grid-template-columns: 30% 20% 2fr;
      column-gap: 2rem;
    }
  }

  .footer .widget h3 {
    margin-bottom: 2rem;
    text-align: center;
  }

  .footer .navegacion a {
    display: block;
    color: var(--claro);
    font-size: 1.4rem;
    margin-bottom: 1rem;
    text-decoration: none;
    text-align: center;
  }

  .footer .contenedor-galeria {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
  }

  .footer .contenedor-galeria p {
    text-align: center;
    line-height: 1.4rem;
  }

  .footer .contenedor-galeria hr {
    margin: 5px auto;
    background-color: var(--claro);
  }

  .footer .imagen-galeria {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }

  .footer .imagen p {
    margin: 0;
  }

  .copyright {
    display: flex;
    justify-content: center;

    margin: 3rem 0 0 0;
    text-align: center;
    padding: 1rem;
  }

  .copyright a {
    text-decoration: none;
    transition: 0.3s ease all;
  }

  .copyright a:hover {
    text-decoration: none;
    color: yellow;
    margin-left: 10px;
    margin-right: 10px;
    transform: scale(1.1);
  }

  #contact-button-2 {
    cursor: pointer;
  }

  .footer .patrocinadores-links {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }

  .footer .patrocinadores-links .foto {
    min-width: 100px;
    max-width: 150px;
    margin: 10px;
    align-items: baseline;
  }

  .footer .patrocinadores-links p {
    min-width: 100px;
    max-width: 150px;
    margin: 10px;
    text-align: center;
  }

  /* Back to top button */
  #back-to-top {
    position: fixed;
    display: none;
    background: rgba(0, 0, 0, 0.2);
    color: var(--primario);
    padding: 6px 12px 9px 12px;
    font-size: 16px;
    border-radius: 2px;
    right: 15px;
    bottom: 15px;
    transition: background 5s;
  }

  /* .visible {
  display: block !important;
}
.not-visible {
  display: none !important;
} */
</style>