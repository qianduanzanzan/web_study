export class Obstacle{
    constructor(x,y,width,height){
        this.width = width
        this.height = height
        this.x = x
        this.y = y
        this.dom = document.createElement('div')
        this.dom.style.display = 'inline-block'
        this.dom.style.gridColumnStart = this.x
        this.dom.style.gridColumnEnd = this.x + this.width
        this.dom.style.gridRowStart = 102 - (this.y + this.height)
        this.dom.style.gridRowEnd = 102 - this.y
        this.dom.style.backgroundColor = '#000000'
        this.xRange = {min:this.x,max:this.x + this.width}
        this.yRange = {min:this.y,max:this.y + this.height}
        this.dom.style.color = '#ffffff'
        this.dom.innerText = `${this.yRange.max},${this.yRange.min}`
    }
}