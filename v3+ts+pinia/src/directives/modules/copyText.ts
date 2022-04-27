import type { DirectiveBinding } from "vue";
export default {
  mounted(el: HTMLElement, binding: DirectiveBinding) {
    el.style.cursor = "pointer";
    const modifiers: any = binding.modifiers;
    const modifierList: Array<string> = Array.from(
      new Set(Object.keys(modifiers).filter((item) => modifiers[item]))
    );
    if (modifierList.length === 0) {
      modifierList.push("click");
    }
    modifierList.forEach((item) => {
      el.addEventListener(item, () => {
        const input = document.createElement("input");
        document.body.appendChild(input);
        input.value = el.innerText;
        input.focus();
        input.select();
        document.execCommand("copy");
        document.body.removeChild(input);
      });
    });
  },
};
