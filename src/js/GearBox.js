
import {canvas} from "./canvas";


class CellObj{
    constructor({w,h,x,y,speed,canvas}){
        this.width = w;
        this.height = h;
        this.speed = speed;
        this.x = x;
        this.dx = this.speed+2;
        this.y = y;
        this.dy = this.speed+1;
        this.canvas = canvas;
    }

    move(){
        if (this.x+this.width > canvas.width){
            this.dx=-this.speed
        } else if(this.x<0){
            this.dx=this.speed;
        }
        
        if (this.y+this.height > canvas.height){
            this.dy = -this.speed;
        } else if (this.y<0){
            this.dy = this.speed;
        }

        this.x+=this.dx
        this.y+=this.dy
    }
    
    draw(){
        this.move()
        this.canvas.ctx.fillStyle = "red";
        this.canvas.ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    
}



export const cell = new CellObj({
    w : 3,
    h : 3,
    x : 0,
    y : 0,
    speed : 1,
    canvas:canvas
});



export const GearBox = () => {
    cell.draw()
}
