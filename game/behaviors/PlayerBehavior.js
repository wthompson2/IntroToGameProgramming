import Behavior from "../../engine/base/Behavior.js"
import PlayerComponent from "../../engine/components/PlayerComponent.js"

class PlayerBehavior extends Behavior{
    start(){
        // this.gameObject.rotation = 0;
    }
    update(){
        // this.gameObject.rotation += .1;
    }
}

export default PlayerBehavior;