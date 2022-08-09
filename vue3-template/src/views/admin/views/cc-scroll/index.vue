<template>
  <div>
    <custom-scroll height="10vh">
      <div v-for="item in 20" :key="item">{{item}}</div>
    </custom-scroll>
  </div>
</template>