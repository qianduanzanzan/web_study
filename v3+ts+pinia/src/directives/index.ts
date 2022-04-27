import type { App } from "vue";
const files = import.meta.globEager("./modules/*.ts");
const modules: any = [];
Object.keys(files).forEach((item) => {
  modules.push({
    name: item.replace(/(\.\/(\w+)\/|\.ts)/g, ""),
    default: files[item].default,
  });
});

function install(app: App) {
  modules.forEach((item: any) => {
    app.directive(item.name, item.default);
  });
}

export default install;
