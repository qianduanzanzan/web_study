export class Obstacle {
    public x:number = 0;
    public y:number = 0;
    public width:number = 0;
    public height:number = 0;
    public url:string | null = null;
    public dom:HTMLElement|null = null

    constructor(x:number,y:number,width:number,height:number,url?:string){
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        if(url){
            this.url = url
        }
    }

    init(dom:HTMLElement | null){
        const obstacleDom:HTMLElement = document.createElement('div')
        obstacleDom.style.display = 'inline-block'
        obstacleDom.style.position = 'absolute'
        obstacleDom.style.left = `${this.x}px`
        obstacleDom.style.bottom = `${this.y}px`
        obstacleDom.style.width = `${this.width}px`
        obstacleDom.style.height = `${this.height}px`
        obstacleDom.style.background = 'black'
        this.dom = obstacleDom
        if(dom === null) return
        dom.appendChild(obstacleDom)
    }
}