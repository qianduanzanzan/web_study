import EnemyAircraft from "./enemyAircraft.js"
import MyAircraft from "./myAircraft.js"
const gameArea = document.querySelector('#game-area')

new MyAircraft(gameArea)

new EnemyAircraft(gameArea)
// setInterval(() => {
//     new EnemyAircraft(gameArea)
// },2000)
// aircraft.addEventListener()
// gameArea.appendChild(aircraft.$el)

// console.log(aircraft)