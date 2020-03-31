import Vue from "vue";
import Router from "vue-router";

import Home from "@/views/Home";
import Actividades from "@/views/Actividades";
import Oradores from "@/views/Oradores";

Vue.use(Router);

export default new Router({
  mode: "history",

  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/actividades",
      name: "actividades",
      component: Actividades
    },
    {
      path: "/oradores",
      name: "oradores",
      component: Oradores
    }
    // {
    //   path: "/home#contacto",
    //   name: "contacto",
    //   component: Contacto
    // }
  ]
});
