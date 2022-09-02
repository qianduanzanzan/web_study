export class People {
    constructor(width,height,speed,x,y,direction){
        this.width = width;
        this.height = height;
        this.speed = speed;
        this.x = x;
        this.y = y;
        this.dom = document.createElement('div');
        this.dom.style.backgroundColor = 'red'
        this.direction = direction;
        this.setPosition()
    }

    setPosition(){
        this.dom.style.gridColumnStart = this.x
        this.dom.style.gridColumnEnd = this.x + this.width
        this.dom.style.gridRowStart = 102 - (this.y + this.height)
        this.dom.style.gridRowEnd = 102 - this.y
    }
}