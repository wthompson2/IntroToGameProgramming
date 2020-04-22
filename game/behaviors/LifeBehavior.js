import Behavior from "../../engine/base/Behavior.js"
import LifeComponent from "../../engine/components/LifeComponent.js"

class LifeBehavior extends Behavior{
    start(){
        // this.gameObject.rotation = 0;
    }
    update(){
        // this.gameObject.rotation += .1;
    }
}

export default LifeBehavior;