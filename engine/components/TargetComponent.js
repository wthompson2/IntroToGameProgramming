import Base from "../Base.js"

// target is being treated as a circle
export default class TargetComponent extends Base.Component{
    radius;
    fill;
    stroke;
    constructor(radius, fill, stroke){
        super();
        this.radius = radius;
        this.fill = fill;
        this.stroke = stroke;
    }
    draw(ctx){
        ctx.save();
        ctx.fillStyle = this.fill;
        ctx.strokeStyle = this.stroke;
        ctx.beginPath();
        ctx.arc(0,0,this.radius,0,2*Math.PI);
        ctx.fill();
        ctx.stroke();
        ctx.restore();
    }
    update(){

    }
}