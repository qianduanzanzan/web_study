<script lang="ts" setup>
import { defineProps, computed } from "vue";

const { height } = defineProps({
  height: {
    type: [String, Number],
    default: "100%"
  }
});

const realHeight = computed(() => {
  if (typeof height == "number") {
    return `${height}px`;
  } else {
    return height;
  }
});
</script>

<template>
  <div class="custom-scroll" :style="{height: realHeight}">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.custom-scroll {
  overflow: auto;
}

::-webkit-scrollbar-track {
  border-radius: 5px;
}
::-webkit-scrollbar {
  width: 6px;
  height: 6px;
  cursor: pointer;
}
::-webkit-scrollbar-thumb {
  background: #abb5c9;
  border-radius: 3px;
  transition: all 2s;
}
::-webkit-scrollbar-thumb:hover {
  background: #abb5c9;
}
</style>