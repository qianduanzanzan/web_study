<script setup lang="ts">
import { ref, onMounted } from "vue";
// import { RouterLink, RouterView } from "vue-router";
// import helloWorld from "@/components/HelloWorld.vue";
const a = ref(0);
const b = ref(1);
// const aaa = ref<InstanceType<typeof helloWorld> | null>(null);
const c = ref({ count: 11 });
// onMounted(() => {
//   console.log(aaa.value?.$el);
//   console.log(c.value?.count);
// })
</script>

<template>
  <header>
    <div class="wrapper">
      <jsDebug></jsDebug>
    </div>
  </header>

  <!-- <RouterView /> -->
</template>

<style>
@import "@/assets/base.css";
</style>
