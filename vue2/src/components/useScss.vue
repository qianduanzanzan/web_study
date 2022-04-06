<template>
  <div class="box">
    <div>123</div>
    <div class="content"></div>
  </div>
</template>

<script>
export default {
  name: "useScss",
};
</script>

<style lang="scss" scoped>
@import "@/style/global.scss";
.box {
  height: 100vh;
  width: 100%;
}
.content {
  background-color: blue;
  width: 100px;
  height: 100px;
  @include mt(20);
}
</style>
