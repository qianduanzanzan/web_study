<script setup lang="ts">
import { test, test11, test22 } from "@/api/test";
test({ a: "123", b: 678 }).then((res: any) => {
  console.log(res);
});

// test11().then((res: any) => {
//   console.log(res);
// });
test22().then((res: any) => {
  console.log(res);
});
</script>

<template>
  <div>123456</div>
</template>