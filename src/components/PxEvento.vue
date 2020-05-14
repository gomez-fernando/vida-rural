<template>
  <div>
    <section class="nosotros contenedor">
      <div class="imagen">
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
          Devolver a las áreas rurales el lugar que deben ocupar en la
          distribución de la población catalana es un objetivo de la RuralORG,
          en este sentido, la población rural se erige como un imperativo social
          y político. Fijar la población a sus territorios y atraer jóvenes que
          quieran establecerse y desarrollar un proyecto de vida en las áreas
          rurales es prioritario, pero también lo es dotarlos de herramientas y
          experiencias que los preparen para este importante reto.
        </p>
        <p>
          Del 10 al 17 de abril de 2021, una semana dedicada a las familias y al
          saber vivir con las ventajas que sólo la vida rural nos ofrece.
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
@media (min-width: 992px) {
  .imagen {
    margin-top: 87px;
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
