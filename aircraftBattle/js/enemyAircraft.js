import EnemyBullet from "./enemyBullet.js"

export default class EnemyAircraft{
    constructor(parent){
        this.parent = parent
        this.$el = document.createElement('img')
        this.$el.src = './static/enemy.png'
        this.$el.style.position = 'absolute'
        this.$el.style.transform = 'rotateX(180deg)'
        this.top = 0
        this.$el.style.top = 0
        this.left = parseInt(Math.random() * (500 - 40))
        if(this.left <= 0) this.left = 0
        if(this.left + this.width > 500) this.left = 500
        this.$el.style.left = `${this.left}px`
        this.width = 80
        this.height = 80
        this.$el.width = this.width
        this.$el.height = this.height
        this.parent.appendChild(this.$el)
        this.$el.setAttribute('class','enemyAircraft')
        this.move()
        this.shooting()
    }

    move(){
        let flag = Math.random() > 0.5
        const isMove = () => {
            if(flag){
                if(this.left + 1 > 500 - this.width){
                    flag = !flag
                    this.left -= 1
                }else{
                    this.left += 1
                }
            }else{
                if(this.left - 1 < 0){
                    flag = !flag
                    this.left += 1
                }else{
                    this.left -= 1
                }
            }
            this.$el.style.left = `${this.left}px`
            requestAnimationFrame(isMove);
        }
        requestAnimationFrame(isMove);
    }

    shooting(){
        const position = {
            x: this.left + this.width / 2,
            y: this.height + this.top
        }
        let bullet;
        bullet = new EnemyBullet(position,this.parent,800,() => {
            bullet = null
        })
        setInterval(() => {
            const position = {
                x: this.left + this.width / 2,
                y: this.height + this.top
            }
            let bullet;
            bullet = new EnemyBullet(position,this.parent,800,() => {
                bullet = null
            })
        }, 2000);
    }
}