import Behavior from "../../engine/base/Behavior.js"
import TextComponent from "../../engine/components/TextComponent.js"
import SceneManager from "../SceneManager.js"
import Engine from "../../engine/Engine.js"

class TimeBehavior extends Behavior{
    time = 50;
    sceneFinish = "SceneFinish";
    
    start(){
        
    }
    update(){
        this.time -= .1;
        this.gameObject.getComponent(TextComponent).text = this.time;
        
        // if (Engine.Base.Input.getKeyUp('Enter'))
        // {
        //     this.time = 3;
        // }

        if (this.time <= 0)
        {
            SceneManager.currentScene = this.sceneFinish;
        }
    }
}

export default TimeBehavior;