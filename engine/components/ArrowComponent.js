import Base from "../Base.js"

// player is represented by a small rectangle
export default class ArrowComponent extends Base.Component{
    width;
    height;
    stroke;
    constructor(width, height, fill, stroke){
        super();
        this.width = width;
        this.height = height;
        this.stroke = stroke;
    }
    draw(ctx){
        ctx.save();
        ctx.translate(-this.width/2, -this.height/2);
        ctx.strokeStyle = this.stroke;
        ctx.fillRect(0,0, this.width, this.height);
        ctx.strokeRect(0, 0, this.width, this.height);
        ctx.restore();
    }
    update(){

    }
}
