function Example(name) {
    if (!new.target) {
        throw new TypeError('Class constructor cannot be invoked without new');
    }
    this.name = name
}

Example.prototype.init = function () {
    const fun = () => {
        console.log(this.name)
    }
    fun()
}

const e = new Example('Hellow')

e.init()
