<template>
  <ClientOnly>
  <div class="inset-0 object-cover w-full h-full">
    

  <MDBCarousel
    v-model="carousel1"
    :items="items1"
    fade
  />
</div>
</ClientOnly>
</template>

<script setup lang="ts">

  import { ref } from "vue";
  import { MDBCarousel } from "mdb-vue-ui-kit";

  const items1 = [
    {
      src: "https://mdbootstrap.com/img/Photos/Slides/img%20(15).webp",
      alt: "...",
      label: "First slide label",
      caption: "Nulla vitae elit libero, a pharetra augue mollis interdum."
    },
    {
      src: "https://mdbootstrap.com/img/Photos/Slides/img%20(22).webp",
      alt: "...",
      label: "Second slide label",
      caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      src: "https://mdbootstrap.com/img/Photos/Slides/img%20(23).webp",
      alt: "...",
      label: "Third slide label",
      caption:
        "Praesent commodo cursus magna, vel scelerisque nisl consectetur."
    }
  ];

  const carousel1 = ref(0);
</script>


<style lang="scss" scoped>

</style>