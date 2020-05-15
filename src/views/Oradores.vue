<template>
  <div>
    <px-oradores />
    <px-contacto />
    <px-newsletter />
  </div>
</template>

<script>
import PxOradores from "@/components/PxOradores";
import PxContacto from "@/components/PxContacto";
import PxNewsletter from "@/components/PxNewsletter";

export default {
  name: "Oradores",
  title: "Oradores",

  components: {
    PxOradores,
    PxContacto,
    PxNewsletter
  }
};
</script>
