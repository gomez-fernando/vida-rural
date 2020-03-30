<template>
  <div>
    <section class="nosotros contenedor">
      <div class="imagen mt-5">
        <!-- <img src="assets/img/girasol.jpg" alt="conferencia 2019" class="imagen"> -->
        <div
          id="carousel"
          class="carousel slide"
          data-ride="carousel"
          data-interval="4000"
          data-pause="false"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                class="d-block w-100"
                src="assets/img/girasol.jpg"
                alt="foto del evento"
              />
            </div>
            <div class="carousel-item">
              <img
                class="d-block w-100"
                src="assets/img/espantapajaros.jpg"
                alt="foto del evento"
              />
            </div>
            <div class="carousel-item">
              <img
                class="d-block w-100"
                src="assets/img/walking.jpg"
                alt="foto del evento"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="contenido-nosotros">
        <h1>El evento</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi,
          rerum labore. Tempore, nostrum cum! Laborum error quae, ducimus unde
          repellat reiciendis qui cumque! Sed unde voluptatem esse, labore
          mollitia quia! Tempore, nostrum cum! Laborum error quae, ducimus unde
          repellat reiciendis qui cumque! Sed unde voluptatem esse, labore
          mollitia quia!
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
</style>
