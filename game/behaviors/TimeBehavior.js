import Behavior from "../../engine/base/Behavior.js"
import TimeComponent from "../../engine/components/TimeComponent.js"

class TimeBehavior extends Behavior{
    time = 10;
    
    start(){
        
    }
    update(){
        this.time -= .1;
        this.gameObject.getComponent(TimeComponent).text = this.time;
        
    }
}

export default TimeBehavior;