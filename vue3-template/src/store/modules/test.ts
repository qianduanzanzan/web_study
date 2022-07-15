// let i = 0
export default {
    state: () => ({
        name: 'xxx',
        count: 1
    }),
    getters: {
        xxx(state: any) {
            return `${state.name}-${state.count}`
        }
    },
    actions: {
        change() {
            // i = -(++i)
            // console.log(i)
            this.name = this.name == 'xxx' ? '疫情快过去吧' : 'xxx'
            this.count += 2
        },
        show() { }
    }
}