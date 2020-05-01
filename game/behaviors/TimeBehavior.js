import Behavior from "../../engine/base/Behavior.js"
import TextComponent from "../../engine/components/TextComponent.js"
import SceneManager from "../SceneManager.js"

class TimeBehavior extends Behavior{
    time = 3;
    sceneFinish = "SceneFinish";
    
    start(){
        
    }
    update(){
        this.time -= .1;
        this.gameObject.getComponent(TextComponent).text = this.time;
        
        if (this.time <= 0){
            SceneManager.currentScene = this.sceneFinish;
        }
    }
}

export default TimeBehavior;