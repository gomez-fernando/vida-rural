<template>
  <div>
    <px-evento />
    <px-nosotros />
    <px-contacto />
    <px-newsletter />
  </div>
</template>

<script>
import PxEvento from "@/components/PxEvento";
import PxNosotros from "@/components/PxNosotros";
import PxContacto from "@/components/PxContacto";
import PxNewsletter from "@/components/PxNewsletter";

export default {
  name: "Home",
  title: "Vida Rural",

  components: {
    PxEvento,
    PxNosotros,
    PxContacto,
    PxNewsletter
  }
  // props: {
  //   links: {
  //     type: Array,
  //     default: () => []
  //   }
  // }
};
</script>
