import  Components from "../../engine/Components.js"
import Base from "../../engine/Base.js"
import PlayerBehavior from "../../game/behaviors/PlayerBehavior.js";


export default class Player extends Base.GameObject {
  constructor(x, y) {
    super(x, y);
    let playerComponent = new Components.PlayerComponent(100, 100, "red", "blue");
    let playerBehavior = new PlayerBehavior();
    this.addComponent(playerComponent);
    this.addComponent(playerBehavior);
  }

}