import Base from "../../engine/Base.js";
import Components from "../../engine/Components.js"
import TargetBehavior from "../behaviors/TargetBehavior.js"

export default class Target extends Base.GameObject{
  constructor(x, y) {
    super(x, y)
    let targetComponent = new Components.TargetComponent(50, "green", "blue");
    let targetBehavior = new TargetBehavior();
    this.addComponent(targetComponent);
    this.addComponent(targetBehavior);

  }

}