import  Components from "../../engine/Components.js"
import Base from "../../engine/Base.js"
import ArrowBehavior from "../../game/behaviors/ArrowBehavior.js";


export default class Arrow extends Base.GameObject {
  constructor(x, y) {
    super(x, y);
    let arrowComponent = new Components.ArrowComponent(100, 100, "red", "blue");
    let arrowBehavior = new ArrowBehavior();
    this.addComponent(arrowComponent);
    this.addComponent(arrowBehavior);
  }

}