import type { App } from "vue";
const files = import.meta.globEager("./*.vue");
const modules: any = [];
Object.keys(files).forEach((item) => {
    modules.push({
        name: item.replace(/(\.\/(\w+\/)?|\.vue)/g, ""),
        default: files[item].default,
    });
});
console.log(modules);
function install(app: App) {
    modules.forEach((item: any) => {
        if (item.default) {
            app.component(item.name, item.default);
        }
    });
}

export default install;
