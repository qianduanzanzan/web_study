export default class EnemyBullet{
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
        this.$el.style.top = `${this.y}px`
        this.$el.style.left = `${x - this.width / 2}px`
        this.$el.style.background = 'red'
        this.$el.style.borderRadius = '50%'
        this.parent.appendChild(this.$el)
        this.fly()
    }

    fly(){
        const a = () => {
            requestAnimationFrame(() => {
                const myAircraft = document.querySelector("#myAircraft")
                const gameArea = document.querySelector("#game-area")

                const parentPosition = gameArea.getBoundingClientRect()
                const position = myAircraft.getBoundingClientRect()
                this.y += 2
                this.$el.style.top = `${this.y}px`
                if(this.y >= this.parentHeight){
                    this.parent.removeChild(this.$el)
                    this.fn()
                }else{
                    a()
                }
                if(this.y + 80 >= position.top && this.y + 80 <= position.bottom){
                    if(this.x >= position.left - parentPosition.left && this.x <= position.right - parentPosition.left){
                        // alert('你输了')
                        // location.reload()
                    }
                }
            })
        }
        a()
        // const a = setInterval(() => {
        //     const myAircraft = document.querySelector("#myAircraft")
        //     const gameArea = document.querySelector("#game-area")

        //     const parentPosition = gameArea.getBoundingClientRect()
        //     const position = myAircraft.getBoundingClientRect()
        //     this.y += 10
        //     this.$el.style.top = `${this.y}px`
        //     if(this.y >= this.parentHeight){
        //         this.parent.removeChild(this.$el)
        //         clearInterval(a)
        //         this.fn()
        //     }
        //     if(this.y + 80 >= position.top && this.y + 80 <= position.bottom){
        //         if(this.x >= position.left - parentPosition.left && this.x <= position.right - parentPosition.left){
        //             alert('你输了')
        //             // location.reload()
        //         }
        //     }
        // },100)
    }
}