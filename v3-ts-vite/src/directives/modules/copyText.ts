import { DirectiveBinding } from "vue"
export default {
    mounted(el: any, binding: DirectiveBinding) {
        el.style.cursor = "pointer";
        const modifiers: any = binding.modifiers
        const modifierList: Array<String> = Array.from(new Set(Object.keys(modifiers).filter(item => modifiers[item])))
        if (modifierList.length === 0) {
            modifierList.push('click')
        }
        modifierList.forEach(item => {
            console.log(item)
            el.addEventListener(item, () => {
                console.log(111)
                const input = document.createElement('input')
                document.body.appendChild(input)
                input.value = el.innerText
                input.focus()
                input.select()
                document.execCommand('copy')
                document.body.removeChild(input)
            })
        })
    },
}