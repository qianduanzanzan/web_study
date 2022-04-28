import type { DirectiveBinding } from "vue";
export default {
  mounted(el: any, binding: DirectiveBinding) {
    // console.log(el, binding.value, vnode)
    console.log(binding.value.data[0]);
    const tr = el.querySelector("tr");
    el.querySelector("tbody").style.height = `${
      tr.clientHeight * binding.value.data.length
    }px`;
    console.log(el.querySelector(".el-scrollbar__view"));
    // console.log(el.querySelector('tr'))
  },
};
