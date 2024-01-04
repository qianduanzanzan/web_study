window.onload = function () {
    // console.log(1)
    const btn = document.getElementById('btn')
    btn.onclick = jsonp
}
let id = 1

function jsonp() {
    // console.log(222)
    const jsonpDom = document.createElement('script')
    jsonpDom.src = `http://localhost:3001/jsonp/list?cb=jsonpCallBack&id=${id++}`
    document.body.appendChild(jsonpDom)
    jsonpDom.onload = function () {
        jsonpDom.remove()
    }
}
