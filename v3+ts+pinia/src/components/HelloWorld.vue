<script setup lang="ts">
import { defineProps, defineExpose, ref } from "vue";
const props = defineProps<{
  msg: string;
  idx: number;
  id?: number;
}>();
const a = () => {
  console.log(props.msg);
};
const b = ref(0);
const $el = ref(null);
defineExpose({
  a,
  $el,
});
</script>

<template>
  <div ref="$el" class="greetings">
    <h1 class="green" @click="a">{{ msg }}</h1>
    {{ idx }}
    <button @click="b++">{{ b }}</button>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
