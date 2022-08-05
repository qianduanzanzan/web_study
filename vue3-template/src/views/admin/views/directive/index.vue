<template>
  <!-- <div style="display: flex"> -->
  <!-- <div>
    <div>
      <img
        ref="img1"
        src="https://img2.baidu.com/it/u=2859542338,3761174075&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1659459600&t=38261dff56302b20379200761062b5d7"
      />
    </div>
    <div style="height: 500px"></div>
    <div>
      <img
        ref="img2"
        src="https://img1.baidu.com/it/u=592570905,1313515675&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1659459600&t=9aac300747c3847ac4b236bd0b398cd9"
      />
    </div>
    <div style="height: 500px"></div>
    <div>
      <img
        ref="img3"
        src="https://img1.baidu.com/it/u=2838100141,2488760005&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1659459600&t=3379174c913d9ac5cf6a0188b4017952"
      />
    </div>
    <div style="height: 500px"></div>
    <div>
      <img
        ref="img4"
        src="https://img2.baidu.com/it/u=1994380678,3283034272&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1659459600&t=4587e2eb107fd7cda584e511956f8c0c"
      />
    </div>
    <div style="height: 500px"></div>
    <div>
      <img
        ref="img5"
        src="https://img1.baidu.com/it/u=1960292808,1761809160&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1659459600&t=99d71a77844af1328c8ea3b8d75df74e"
      />
    </div>
    <div style="height: 500px"></div>
    <div>
      <img
        ref="img6"
        src="https://img2.baidu.com/it/u=2362373712,561693695&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"
      />
    </div>
    <div style="height: 500px"></div>
    <div>
      <img
        ref="img7"
        src="https://img1.baidu.com/it/u=1016138010,1907110459&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"
      />
    </div>
  </div>-->

  <!-- <div style="height: 600px;overflow: auto"> -->
  <div>
    <img
      v-lazyLoad
      src="https://img2.baidu.com/it/u=2859542338,3761174075&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1659459600&t=38261dff56302b20379200761062b5d7"
    />
  </div>
  <div style="height: 500px"></div>
  <div>
    <img
      v-lazyLoad
      src="https://img1.baidu.com/it/u=592570905,1313515675&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1659459600&t=9aac300747c3847ac4b236bd0b398cd9"
    />
  </div>
  <div style="height: 500px"></div>
  <div>
    <img
      v-lazyLoad
      src="https://img1.baidu.com/it/u=2838100141,2488760005&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1659459600&t=3379174c913d9ac5cf6a0188b4017952"
    />
  </div>
  <div style="height: 500px"></div>
  <div>
    <img
      v-lazyLoad
      src="https://img2.baidu.com/it/u=1994380678,3283034272&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1659459600&t=4587e2eb107fd7cda584e511956f8c0c"
    />
  </div>
  <div style="height: 500px"></div>
  <div>
    <img
      v-lazyLoad
      src="https://img1.baidu.com/it/u=1960292808,1761809160&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1659459600&t=99d71a77844af1328c8ea3b8d75df74e"
    />
  </div>
  <div style="height: 500px"></div>
  <div>
    <img
      v-lazyLoad
      src="https://img2.baidu.com/it/u=2362373712,561693695&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"
    />
  </div>
  <div style="height: 500px"></div>
  <div>
    <img
      v-lazyLoad
      src="https://img1.baidu.com/it/u=1016138010,1907110459&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"
    />
  </div>
  <!-- </div> -->
  <!-- </div> -->
</template>

<script lang="ts" setup>
// import { ref, onMounted } from "vue";
// import observe from "@/utils/observer";
// const img1: any = ref(null);
// const img2: any = ref(null);
// const img3: any = ref(null);
// const img4: any = ref(null);
// const img5: any = ref(null);
// const img6: any = ref(null);
// const img7: any = ref(null);
// onMounted(() => {
//   observe(img1.value);
//   observe(img2.value);
//   observe(img3.value);
//   observe(img4.value);
//   observe(img5.value);
//   observe(img6.value);
//   observe(img7.value);
// });
</script>