export default class MyBullet{
    constructor({x,y},parent,parentHeight,fn){
        this.x = x
        this.y = y
        this.fn = fn
        this.width = 8
        this.height = 16
        this.parent = parent
        this.parentHeight = parentHeight
        this.$el = document.createElement('div')
        this.$el.style.display = 'inline-block'
        this.$el.style.width = `${this.width}px`
        this.$el.style.height = `${this.height}px`
        this.$el.style.position = 'absolute'
        this.$el.style.bottom = `${this.y}px`
        this.$el.style.left = `${x - this.width / 2}px`
        this.$el.style.background = '#409eff'
        this.$el.style.borderRadius = '50%'
        this.parent.appendChild(this.$el)
        this.fly()
    }

    fly(){
        const a = setInterval(() => {
            this.y += 10
            this.$el.style.bottom = `${this.y}px`
            if(this.y >= this.parentHeight){
                this.parent.removeChild(this.$el)
                clearInterval(a)
                this.fn()
            }
        },100)
        
    }
}