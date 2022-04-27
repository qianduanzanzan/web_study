<script setup lang="ts">
import { ref } from "vue";

const a = ref(0);
// import TheWelcome from "@/components/TheWelcome.vue";
</script>

<template>
  <main v-copyText.click>
    {{ a }}
    <!-- <TheWelcome /> -->
  </main>
</template>
