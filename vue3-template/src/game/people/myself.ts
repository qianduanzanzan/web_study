import { People } from "./people";
export class Myself extends People {
    private position_x = 0;
    private position_y = 0;

    init(dom: HTMLElement | null) {
        if (dom == null) {
            return
        } else {
            dom.style.position = 'absolute'
            dom.style.width = `${this.width}px`
            dom.style.height = `${this.height}px`
            dom.style.background = 'red'
            this.dom = dom
            this.setPosition()
            this.setEventListen()
        }
    };

    setPosition() {
        this.dom.style.bottom = `${this.position_y}px`
        this.dom.style.left = `${this.position_x}px`
    };

    setEventListen() {
        window.addEventListener('keydown', (e) => {
            requestAnimationFrame(() => {
                switch (e.code) {
                    case 'ArrowUp':
                        this.direction = 'top'
                        if (this.position_y + this.speed > 750) return
                        this.position_y += this.speed
                        break;
                    case 'ArrowDown':
                        this.direction = 'down'
                        if (this.position_y - this.speed < 0) return
                        this.position_y -= this.speed
                        break;
                    case 'ArrowLeft':
                        this.direction = 'left'
                        if (this.position_x - this.speed < 0) return
                        this.position_x -= this.speed
                        break;
                    case 'ArrowRight':
                        this.direction = 'right'
                        if (this.position_x + this.speed > 750) return
                        this.position_x += this.speed
                        break;
                }
                this.setPosition()
            })
        })
    }
}