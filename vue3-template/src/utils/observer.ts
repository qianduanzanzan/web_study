const observe = (el: any, fn: any) => {
    //observer配置项
    var observerOptions = {
        threshold: 0.2, //目标元素与视窗重叠的阈值（0~1）
        root: null // 目标视窗即目标元素的父元素，如果没有提供，则默认body元素
    }

    //observer 回调函数
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
        entries.forEach((item: any) => {
            // 当前元素可见
            if (item.isIntersecting) {
                fn()
                observer.unobserve(item.target)
            }
        })
    }

    //实例化观察者对象
    var observer = new IntersectionObserver(observerCallback, observerOptions);
    observer.observe(el)
}

export default observe
