import type { App } from "vue";
const files = import.meta.globEager("./v*.ts");
const modules: any = [];
Object.keys(files).forEach((item) => {
    modules.push({
        name: item.replace(/\.\/v|\.ts/g, ""),
        default: files[item].default,
    });
});

function install(app: App) {
    modules.forEach((item: any) => {
        if (item.default) {
            app.directive(item.name, item.default);
        }
    });
}

export default install;