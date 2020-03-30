import Behavior from "./../../engine/base/Behavior.js"
import TextComponent from "./../../engine/components/TextComponent.js"

class TextBehavior extends Behavior{
    // time = 10;
    
    start(){
        
    }
    update(){
        // this.time -= .1;
        this.gameObject.getComponent(TextComponent).text = this.time;
        
    }
}

export default TextBehavior;