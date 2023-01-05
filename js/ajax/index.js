function ajax(url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()

        xhr.open('GET', url)
        xhr.setRequestHeader('Accept', 'application/json');
        xhr.onreadystatechange = (res) => {
            console.log(res)
            if (xhr.readyState !== 4) {
                return;
            }

            if (xhr.status === 200) {
                resolve(xhr.responseText);
            } else {
                reject(new Error(xhr.responseText));
            }
        }

        xhr.send();
    })
}

ajax('http://124.70.25.229:3000/file-stronge-manage/get-file-list?pid=0').then(res => {
    console.log(res)
})
