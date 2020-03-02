import Behavior from "./Behavior.js"

class PlayerBehavior extends Behavior{
    start(){
        this.gameObject.rotation = 0;
    }
    update(){
        this.gameObject.rotation += .1;
    }
}

export default PlayerBehavior;