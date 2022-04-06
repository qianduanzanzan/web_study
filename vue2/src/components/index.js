const files = require.context('./',false,/.vue$/)
const components = []
files.keys().forEach(key => {
    if(files(key).default){
        components.push(files(key).default)
    }
});
const install = (vue) => {
    console.log(111)
    components.forEach(component => {
        if(component.name){
            console.log(component)
            vue.component(component.name,component)
        }
    })
}

export default install
// export default obj
// console.log(files.keys())