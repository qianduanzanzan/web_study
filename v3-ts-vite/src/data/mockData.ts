export const largeArr: any = []
for (let index = 0; index < 10000; index++) {
    largeArr.push({
        name: index,
        value: 10000 - index
    })
}