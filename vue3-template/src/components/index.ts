import type { App } from "vue";
const files = import.meta.globEager("./*/index.vue");
const modules: any = [];
Object.keys(files).forEach((item) => {
    modules.push({
        name: item.replace(/\.\/|\/index.vue/g, ""),
        default: files[item].default,
    });
});
function install(app: App) {
    modules.forEach((item: any) => {
        if (item.default) {
            app.component(item.name, item.default);
        }
    });
}

export default install;
