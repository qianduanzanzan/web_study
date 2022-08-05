import observe from '@/utils/observer'
import { ElLoading } from 'element-plus'
import logo from '@/assets/logo.png'
// import { set } from 'vue'

export default {
    beforeMount(el: any, binding: any, vnode: any, prevVnode: any) {
        vnode.realSrc = el.src
        el.src = logo
    },
    mounted(el: any, binding: any, vnode: any, prevVnode: any) {
        observe(el, () => {
            const loadingInstance = ElLoading.service({
                target: el,
                fullscreen: false
            })
            el.src = vnode.realSrc;
            el.onload = () => {
                setTimeout(() => {
                    loadingInstance.close()
                }, 1000);
            }
        });
    },
}