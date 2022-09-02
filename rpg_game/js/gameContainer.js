import { GameContext } from "./gameContent.js"
export class GameContainer{
    constructor(dom){
        dom.innerHTML = `
            <div id='game-container'>
                <div id='game-header'></div>
                <div id='game-content'></div>
                <div id='game-bottom'></div>
            </div>
        `
        this.dom = dom
        this.gameContext = new GameContext([[1,21,20,20]])
    }
}