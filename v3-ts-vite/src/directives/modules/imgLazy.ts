export default {
    mounted(el: any) {
        el.data_src = el.src;
        el.src = "";
        observer.observe(el);
    },
    updated(el: any) {
        el.isLoaded = false;
        el.data_src = el.src;
        el.src = ""
    },
}

let observer = new IntersectionObserver((entries) => {
    entries.forEach((entry: any) => {
        if (entry.isIntersecting || entry.intersectionRatio > 0) {
            !entry.target.isLoaded && showImage(entry.target, entry.target.data_src)
        }
    })
})

function showImage(el: any, imgSrc: any) {
    const img = new Image();
    img.src = imgSrc;
    img.onload = () => {
        el.src = imgSrc;
        el.isLoaded = true;
    }
}

