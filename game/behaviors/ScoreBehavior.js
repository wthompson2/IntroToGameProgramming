import Behavior from "../../engine/base/Behavior.js"
import Engine from "../../engine/Engine.js"
import TextComponent from "../../engine/components/TextComponent.js"
import ScorePlaceholder from "../ScorePlaceholder.js"

class ScoreBehavior extends Behavior{
    score = 0;
    
    start(){
        
    }
    update(){
        this.gameObject.getComponent(TextComponent).text = this.score;

        if (Engine.Base.Input.getKeyUp(' '))
        {
            this.score++;
            ScorePlaceholder.scoreIncrement;
        }
    }
}

export default ScoreBehavior;