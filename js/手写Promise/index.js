const PENDING = 'pending';
const RESOLVED = 'resolved';
const REJECTED = 'rejected';

function MyPromise(fn){
    const that = this
    that.status = PENDING
    that.value = null
    that.reason = null;

    that.resolveArr = []
    that.rejectArr = []

    function resolve(val){
        if(that.status === PENDING){
            that.status = RESOLVED
            that.value = val
            that.resolveArr.forEach(cb => {
                cb(that.value)
            });
        }
    }

    function reject(reason){
        if(that.status === PENDING){
            that.status = REJECTED
            that.reason = reason
            that.rejectArr.forEach(cb => {
                cb(that.reason)
            });
        }
    }

    try {
        fn(resolve, reject);
    } catch(e) {
        reject(e);
    }
}

MyPromise.prototype.then = function(fn){
    const that = this

    if(that.status === PENDING){
        that.resolveArr.push(fn)
    }

    if(that.status === RESOLVED){
        fn(this.value)
    }

    return that
}

MyPromise.prototype.catch = function(fn){
    const that = this

    if(that.status === PENDING){
        that.rejectArr.push(fn)
    }

    if(that.status === REJECTED){
        fn(this.reason)
    }

    return that
}

const a = new MyPromise((resolve,reject) => {
    // resolve(345)
    // reject(665)
    setTimeout(() => {
        resolve(345)
    }, 1000);
})

a.then((res) => {
    console.log(res)
}).catch(e => {
    console.log(e)
}).catch(e => {
    console.log(e)
})
