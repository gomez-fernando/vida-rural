<template>
  <section class="contenedor">
    <h2>Ven a conocernos</h2>
    <div class="cards-block mt-4">
      <div class="article destacado">
        <img src="assets/img/gato.jpg" alt="foto conferencia" />
        <div class="card">
          <h3 class="titulo">RuralORG</h3>
          <p>
            Desde el inicio RuralORG ha venido dispensando una atención y
            cuidado especiales a los procesos y proyectos culturales que se
            desarrollan en pequeños municipios y en el medio rural.
          </p>
          <p>
            Tradicionalmente, la cultura en el medio rural se ha abordado a
            partir de la mirada etnográfica o, en su dimensión patrimonial y
            turística, como recurso de naturaleza económica. Se abren paso, en
            cambio, nuevas aproximaciones y prácticas que vamos a compartir
            durante este encuentro.
          </p>
          <p>
            Nos visitarán ponentes con una amplia experiencia en todo lo
            relacionado con el desarrollo del potencial que tiene vivir en un
            medio rural actualmente.
          </p>

          <nav class="menu">
            <router-link class="boton" :to="{ name: 'oradores' }"
              >Más información</router-link
            >
          </nav>
        </div>
        <!-- card-->
      </div>
      <!-- article-->
      <div class="article">
        <img src="assets/img/carrera.jpg" alt="foto conferencia" />
        <div class="card">
          <h3 class="titulo">Deportes</h3>
          <p>
            Conscientes de la importancia de desarrollar una cultura de deporte
            al aire libre, repetiremos la media maratón de Vida Rural que tanto
            éxito tuvo en su primera edición.
          </p>
          <p>
            Puede participar toda la familia, desde los 12 años de edad hasta
            ...
          </p>

          <nav class="menu">
            <router-link class="boton" :to="{ name: 'actividades' }"
              >Más información</router-link
            >
          </nav>
        </div>
        <!-- card-->
      </div>
      <!-- article-->
      <div class="article">
        <img src="assets/img/arbol.jpg" alt="foto conferencia" />
        <div class="card">
          <h3 class="titulo">Una familia, un árbol</h3>
          <p>
            En las montañas cercanas a la masía queremos repoblar los bosques
            que han venido mermando en los últimos años.
          </p>
          <p>
            Por eso una de nuestras iniciativas para el encuentro de este año es
            que las familias que deseen se unan al reto: Una familia, un árbol.
            <br />¿Os apuntaís?
          </p>

          <nav class="menu">
            <router-link class="boton" :to="{ name: 'actividades' }"
              >Más información</router-link
            >
          </nav>
        </div>
        <!-- card-->
      </div>
      <!-- article-->
      <div class="article">
        <img src="assets/img/boy.jpg" alt="foto conferencia" />
        <div class="card">
          <h3 class="titulo">Descubre la uva</h3>
          <p>
            Para los más pequeños de la casa hemos preparado varias sorpresas,
            una de ellas es la visita a nuestro viñedo que con tanto esmero
            cuidamos aquí en Vida Plena.
          </p>
          <p>
            A los niños les encantará conocer cómo se cuida y se cría un viñedo.
            También se llevarán unos bellos racimos seleccionados por ellos
            mismos.
          </p>

          <nav class="menu">
            <router-link class="boton" :to="{ name: 'actividades' }"
              >Más información</router-link
            >
          </nav>
        </div>
        <!-- card-->
      </div>
      <!-- article-->
      <div class="article">
        <img src="assets/img/casas.jpg" alt="foto conferencia" />
        <div class="card">
          <h3 class="titulo">Callús</h3>
          <p>
            Nuestro sitio de referencia es Callús. Un hermoso pueblo en las
            montañas de Montserrat.
          </p>
          <p>
            Disfruta de un recorrido mágico que nos llevará más adentro de la
            vida cotidiana de esta región.
            <br />Nos espera un recorrido inolvidable entre sus calles, sus
            bares y la atención esmerada de sus vecinos.
          </p>
          <nav class="menu">
            <router-link class="boton" :to="{ name: 'actividades' }"
              >Más información</router-link
            >
          </nav>
        </div>
        <!-- card-->
      </div>
      <!-- article-->
    </div>
    <hr class="divider" />
  </section>
</template>

<script>
export default {
  name: "PxNosotros"

  // props: {
  //   links: {
  //     type: Array,
  //     default: () => []
  //   }
  // }
};
</script>

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
