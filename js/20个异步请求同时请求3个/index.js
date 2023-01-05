const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

(function b(urls = [],maxLength = 3){
    return new Promise((resolve) => {
        const urlsLength = urls.length
        const result = []
        let current = 0
        for (let index = 0; index < maxLength; index++) {
            const url = urls.shift()
            next(url,current)
            current++
        }

        function next(url,i){
            new Promise((resolve1) => {
                setTimeout(() => {
                    resolve1(url)
                }, Math.random() * 1000 + 1000);
            }).then(res => {
                console.log(`第${i}个完成`)
                result[i] = res
                if(urls.length > 0){
                    const nextUrl = urls.shift()
                    next(nextUrl,current)
                    current++
                }else if(result.length === urlsLength){
                    resolve(result)
                }
            })
        }
    })
})(arr).then(res => {
    console.log(res)
})

