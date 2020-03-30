<template>
  <footer class="footer">
    <div class="contenedor">
      <div class="widget">
        <h3>Nosotros</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis quia odio voluptatem dolorum sequi ut
          numquam inventore exercitationem praesentium tempore dolor ipsam.
        </p>
      </div>
      <div class="widget navegacion">
        <h3>Navegación</h3>
        <nav>
          <a href="index.html">La conferencia</a>
          <a href="actividades.html">Actividades</a>
          <a href="oradores.html">Contacto</a>
        </nav>
      </div>
      <div class="widget">
        <h3>Galería</h3>
        <div class="contenedor-galeria">
          <div class="imagen">
            <div class="foto">
              <img src="assets/img/walking.jpg" alt="foto del evento" />
            </div>
            <div class="info">
              <p>Senderismo</p>
              <hr />
              <p>Para toda la familia</p>
            </div>
          </div>
          <!-- imagen -->
          <div class="imagen">
            <div class="foto">
              <img src="assets/img/tribu.jpg" alt="foto del evento" />
            </div>
            <div class="info">
              <p>Acampada</p>
              <hr />
              <p>En los predios de la masía</p>
            </div>
          </div>
          <!-- imagen -->
          <div class="imagen">
            <div class="foto">
              <img src="assets/img/juegos.jpg" alt="foto del evento" />
            </div>
            <div class="info">
              <p>Juegos de competición</p>
              <hr />
              <p>Al aire libre</p>
            </div>
          </div>
          <!-- imagen -->
          <div class="imagen">
            <div class="foto">
              <img src="assets/img/espantapajaros.jpg" alt="foto del evento" />
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
    <p class="copyright">Developed with &#x1F49A; by Fernando Gómez</p>
  </footer>
</template>

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
.footer .imagen {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}
.footer .imagen p {
  margin: 0;
}
.copyright {
  background-color: var(--oscuro);
  margin: 3rem 0 0 0;
  text-align: center;
  padding: var(--padding);
}
</style>