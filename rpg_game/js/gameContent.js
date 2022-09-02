import { Myself } from "./myself.js"
import { Obstacle } from "./obstacle.js"
export class GameContext{
    constructor(obstacles){
        this.dom = document.querySelector('#game-content')
        this.myself = new Myself(this)
        this.obstacle = []
        obstacles.forEach(item => {
            this.obstacle.push(new Obstacle(...item))
        })
        this.obstacle.forEach(item => {
            this.dom.appendChild(item.dom)
        })
    }
}