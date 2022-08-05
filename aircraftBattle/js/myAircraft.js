import MyBullet from "./myBullet.js"

const gameArea = {
    width: 500,
    height: 800
}

const speed = 6

export default class MyAircraft{
    constructor(parent){
        this.parent = parent
        this.$el = document.createElement('img')
        this.$el.src = './static/myAircraft.png'
        this.$el.style.position = 'absolute'
        this.$el.style.bottom = 0
        this.$el.style.left = '200px'
        this.$el.setAttribute('class','myAircraft')
        this.$el.setAttribute('id','myAircraft')
        this.bottom = 0
        this.left = 200
        this.width = 80
        this.height = 80
        this.$el.width = this.width
        this.$el.height = this.height
        this.parent.appendChild(this.$el)
        this.addEventListener()
        this.shooting()
    }

    addEventListener(){
        window.addEventListener('keydown',(e) => {
            switch(e.keyCode){
                case 38:
                    if(this.bottom + speed + this.height <= gameArea.height){
                        this.bottom += speed
                    }
                    break;
                case 40:
                    if(this.bottom - speed >= 0){
                        this.bottom -= speed
                    }
                    break;
                case 37:
                    if(this.left - speed >= 0){
                        this.left -= speed
                    }
                    break;
                case 39:
                    if(this.left + speed + this.width <= gameArea.width){
                        this.left += speed
                    }
                    break;
            }
            requestAnimationFrame(() => {
                this.$el.style.bottom = `${this.bottom}px`
                this.$el.style.left = `${this.left}px`
            })
        })
    }

    shooting(){
        const position = {
            x: this.left + this.width / 2,
            y: this.bottom + this.height
        }
        let bullet;
        bullet = new MyBullet(position,this.parent,gameArea.height,() => {
            bullet = null
        })
        setInterval(() => {
            const position = {
                x: this.left + this.width / 2,
                y: this.bottom + this.height
            }
            let bullet;
            bullet = new MyBullet(position,this.parent,gameArea.height,() => {
                bullet = null
            })
        }, 2000);
    }
}