import { GameContainer } from "./gameContainer.js";
export class Game{
    constructor(domTag){
        const dom = document.querySelector(domTag)
        this.gameContainer = new GameContainer(dom)
    }
}