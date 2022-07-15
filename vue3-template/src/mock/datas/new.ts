// import Mock from 'mockjs'

// const Random = Mock.Random

// console.log(newsList)

// const getNewsList = function (Random: any) {
//     return () => {
//         for (let i = 0; i < 20; i++) {
//             let newNewsObject = {
//                 title: Random.ctitle(), //  Random.ctitle( min, max ) 随机产生一个中文标题，长度默认在3-7之间
//                 content: Random.cparagraph(), // Random.cparagraph(min, max) 随机生成一个中文段落，段落里的句子个数默认3-7个
//                 createdTime: Random.date() // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；
//             }
//             newsList.push(newNewsObject)
//         }

//         return newsList
//     }
// }

export default (Random: any) => {
    let newsList: any = []
    for (let i = 0; i < 20; i++) {
        let newNewsObject = {
            id: Random.id(),
            title: Random.ctitle(),
            content: Random.cparagraph(),
            createdTime: Random.date()
        }
        newsList.push(newNewsObject)
    }

    function getNewsList(data: any) {
        const params = JSON.parse(data.body)
        let arr = []
        arr = newsList.filter((item: any) => item.title.includes(params.title) && item.content.includes(params.content))
        return arr
    }

    function addNew(data: any) {
        const params = JSON.parse(data.body)
        newsList.push({
            title: params.title,
            content: params.content,
            id: Random.id(),
            createdTime: params.createdTime
        })
    }

    function delNew(data: any) {
        const params = JSON.parse(data.body)
        console.log(data)
        const index = newsList.findIndex((item: any) => item.id == params.id)
        newsList.splice(index, 1)
    }

    function editNew(data: any) {
        const params = JSON.parse(data.body)
        const index = newsList.findIndex((item: any) => item.id == params.id)
        newsList.splice(index, 1, {
            title: params.title,
            content: params.content,
            id: params.id,
            createdTime: params.createdTime
        })
    }

    return [
        {
            type: 'get',
            api: getNewsList,
            url: 'getNewsList'
        },
        {
            type: 'post',
            api: addNew,
            url: 'addNew'
        },
        {
            type: 'delete',
            api: delNew,
            url: 'delNew'
        },
        {
            type: 'put',
            api: editNew,
            url: 'editNew'
        }
    ]
}

// export default {
//     func: getNewsList,
//     type: 'get',
//     api: 'getNewsList'
// }
