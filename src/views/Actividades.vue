<template>
  <div>
    <px-actividades />
    <px-contacto />
    <px-newsletter />
  </div>
</template>

<script>
import PxActividades from "@/components/PxActividades";
import PxContacto from "@/components/PxContacto";
import PxNewsletter from "@/components/PxNewsletter";

export default {
  name: "Actividades",
  title: "Actividades",

  components: {
    PxActividades,
    PxContacto,
    PxNewsletter
  }
};
</script>
