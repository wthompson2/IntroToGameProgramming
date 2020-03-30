import Base from "../../engine/Base.js"
import Components from "../../engine/Components.js"
import TextBehavior from "../behaviors/TextBehavior.js"

export default class Text extends Base.GameObject {
  constructor(x, y) {
    super(x, y);
    let textComponent = new Components.TextComponent("10", "30pt Times", "black");
    let textBehavior = new TextBehavior();
    this.addComponent(textComponent);
    this.addComponent(textBehavior);

  }
}