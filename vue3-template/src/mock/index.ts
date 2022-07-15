import Mock from 'mockjs'

const datas: any = import.meta.globEager("./datas/*.ts");
for (let key in datas) {
    const apiList = datas[key].default(Mock.Random)
    apiList.forEach((item: any) => {
        Mock.mock(`/mock/${item.url}`, item.type, item.api)
    })
    // Mock.mock(`/mock/${datas[key].default.api}`, datas[key].default.func(Mock.Random))
}
