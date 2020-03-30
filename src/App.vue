<template>
  <main id="app">
    <px-header />
    <router-view />
    <px-footer />
  </main>
</template>

<script>
import PxHeader from "@/components/PxHeader";
import PxFooter from "@/components/PxFooter";

export default {
  name: "App",
  components: {
    PxHeader,
    PxFooter
  }
};
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
@import url("https://fonts.googleapis.com/css?family=Roboto:300,400&display=swap");

:root {
  --primario: #7abe47;
  --secundario: #ffc845;
  --negro: #000000;
  --claro: #ffffff;
  --gris: #eff2f7;
  /* --gris: #eeeeee; */
  --oscuro: #57a42b;
  --padding: 1rem;
  --padding2: 2rem;
}

html {
  box-sizing: border-box;
}

body {
  /* margin: 0; */
  background-color: var(--gris);
  font-family: Roboto, sans-serif;
}

.contenedor {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 1rem;
}

img {
  max-width: 100%;
}
h1,
h2,
h3,
h4 {
  font-weight: 300;
  text-align: center;
  margin: 1rem 0;
}
h1 {
  font-size: 2.4rem;
}
h2 {
  font-size: 2.2rem;
}
h3 {
  font-size: 2rem;
}
p {
  line-height: 2rem;
  font-size: 1.2rem;
  font-weight: 300;
  text-align: justify;
}
.boton {
  background-color: var(--primario);
  display: block;
  padding: var(--padding);
  text-align: center;
  color: var(--claro);
  text-transform: uppercase;
  text-decoration: none;
  border: 1px solid var(--primario);
  transition: all 0.5s ease-in-out;
}
.boton:hover {
  background-color: var(--claro);
  color: var(--primario);
  border: 1px solid var(--primario);
}
.divider {
  width: 30%;
  height: 3px;
  margin: 50px auto 20px auto;
  border: 1px solid var(--primario);
  background-color: var(--primario);
  border-radius: 30px;
}
</style>
