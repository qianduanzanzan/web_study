import { People } from "./people.js";
export class Myself extends People{
    constructor(gameContent){
        super(10,10,1,50,50,'top')
        this.gameContent = gameContent
        gameContent.dom.appendChild(this.dom)
        setTimeout(() => {
            this.move()
        })
    }

    move(){
        const arr = this.gameContent.obstacle.map(item => {
            return {
                x: item.xRange,
                y: item.yRange
            }
        })
        console.log(arr)
        // arr.every(item => {
        //     this.y + this.speed + this.height < item.y.max
        // })
        window.addEventListener('keydown', (e) => {
            arr.forEach(item => {
                console.log(this.y + this.speed + this.height)
                console.log(item.y)
                if(this.y + this.speed + this.height > item.y.min){
                    console.log(11111)
                }
            })
            const a = arr.every(item => {
                return this.y + this.speed + this.height > item.y.min
            })
            console.log(a,'flag')
            requestAnimationFrame(() => {
                switch (e.code) {
                    case 'KeyW':
                    case 'ArrowUp':
                        this.direction = 'top'
                        if (this.y + this.speed > 101 - this.height) return
                        if(arr.every(item => {
                            return this.y + this.speed + this.height > item.y.min
                        })){
                            return
                        }
                        this.y += this.speed
                        break;
                    case 'KeyS':
                    case 'ArrowDown':
                        this.direction = 'down'
                        if (this.y - this.speed < 1) return
                        if(arr.every(item => {
                            return this.y - this.speed < item.y.max
                        })){
                            return
                        }
                        this.y -= this.speed
                        break;
                    case 'KeyA':
                    case 'ArrowLeft':
                        this.direction = 'left'
                        if (this.x - this.speed < 1) return
                        this.x -= this.speed
                        break;
                    case 'KeyD':
                    case 'ArrowRight':
                        this.direction = 'right'
                        if (this.x + this.speed > 101 - this.width) return
                        this.x += this.speed
                        break;
                }
                this.dom.innerText = `${this.x},${this.y}`
                this.setPosition()
            })
        })
    }
}