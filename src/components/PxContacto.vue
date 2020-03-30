<template>
  <div id="contacto" class="container">
    <section class="contacto row justify-content-center">
      <div class="col-12 col-md-9 text-center">
        <h2 class="subtitulo">
          <span>Lugar</span>
        </h2>
      </div>
      <iframe
        class="col-12 col-md-9 mt-3"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11895.881055474578!2d1.781356!3d41.807401!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd2925665dc361971!2sMas%20Gras!5e0!3m2!1ses!2ses!4v1585079503288!5m2!1ses!2ses"
        width="100%"
        height="250"
        frameborder="0"
        style="border:0;"
        allowfullscreen
      ></iframe>

      <div class="w-100 mb-4"></div>
      <div class="w-100 mb-4"></div>
      <div>
        <p class="border-bottom border-top">
          <img class="contact-icon" src="assets/img/location.png" alt />Masia Vida Plena, 08262
          Callús,
          <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Barcelona
        </p>
      </div>
      <div class="w-100 mb-4"></div>
      <div>
        <p class="border-bottom border-top">
          <img class="contact-icon" src="assets/img/phone.png" alt />+34 653 891 672
        </p>
      </div>
      <div class="w-100 mb-4"></div>
      <div>
        <p class="border-bottom border-top">
          <img class="contact-icon" src="assets/img/inbox.png" alt />info@vida-rural.com
        </p>
      </div>
    </section>
    <hr class="divider" />
  </div>
</template>

<style>
/* ---  */
/* NOSOTROS */
/* ---  */
.nosotros {
  text-align: center;
  margin-top: 2rem;
}
@media (min-width: 992px) {
  .nosotros {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
  /* h1 {
    text-align: center;
  } */
}
.contenido-nosotros {
  display: grid;
  align-content: center;
}

/* ---  */
/* CARDS-BLOCK */
/* ---  */
.cards-block {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, auto);
  gap: 1rem;
}
.cards-block img {
  width: 100%;
}
.destacado {
  grid-column: 1/2;
  grid-template-columns: 1fr;
  display: grid;
  /* gap: 1rem; */
  /* padding: 0 1rem; */
}
.destacado h3 {
  margin-top: 0;
}
@media (min-width: 768px) {
  .cards-block {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, auto);
  }
  .destacado {
    grid-column: 1/3;
    grid-template-columns: repeat(2, 1fr);
    display: grid;
    /* gap: 1rem; */
    /* padding: 0 1rem; */
  }
}
.card {
  background-color: var(--claro);
  padding: var(--padding);
  border: 1px solid #c7c7c7;
}
.card p {
  font-size: 0.9rem;
  line-height: 1.8rem;
}
.article {
  display: grid;
}
.article .detalle {
  font-size: 1.4rem;
  font-weight: 400px;
}
.detalle span {
  font-weight: 300;
  color: var(--primario);
}

/* -- */
/* CONTACTO  */
/* -- */
.contacto {
  padding: 10px;
}
.contact-icon {
  margin-right: 10px;
}
</style>