import Base from "../../engine/Base.js"
import Components from "../../engine/Components.js"
import TextBehavior from "../behaviors/TextBehavior.js"

export default class TextTimer extends Base.GameObject {
  constructor(x, y) {
    super(x, y);
    let timeComponent = new Components.TimeComponent("10", "30pt Times", "red", "blue");
    let timeBehavior = new TimeBehavior();
    this.addComponent(timeComponent);
    this.addComponent(timeBehavior);

  }
}