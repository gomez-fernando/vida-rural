<template>
  <header class="header">
    <div class="barra contenedor">
      <div class="nombre-sitio">
        <img id="logo" src="assets/img/logo.png" alt="logo de la conferencia" />
      </div>
      <nav class="menu">
        <a href="index.html">El evento</a>
        <a href="actividades.html">Actividades</a>
        <a href="oradores.html">Oradores</a>
        <a href="#contacto">Contacto</a>
      </nav>
    </div>
  </header>
</template>


<style>
.header {
  /* margin-top: 2rem; */
  padding: var(--padding);
  background-color: var(--primario);
}

.header .barra {
  display: grid;
  grid-template-rows: repeat(2, auto);
  row-gap: 2rem;
  justify-content: center;
}

.header .menu {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
}

.header .menu a {
  text-align: center;
  color: var(--claro);
  text-decoration: none;
  font-size: 1.4rem;
  transition: 0.3s ease all;
}
.header .menu a:hover {
  color: yellow;
  margin-left: 10px;
  margin-right: 10px;
  transform: scale(1.1);
}
.nombre-sitio {
  display: flex;
  justify-content: center;
}
@media (min-width: 576px) and (max-width: 991px) {
  #logo {
    max-width: 60%;
  }
}

@media (min-width: 992px) {
  .header .barra {
    grid-template-rows: unset;
    grid-template-columns: 20% 1fr 50%;
    justify-content: space-around;
  }

  .header .menu {
    grid-column: 3/4;
    display: grid;
    align-content: center;
  }
}
</style>