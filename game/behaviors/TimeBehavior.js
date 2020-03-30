import Behavior from "./Behavior.js"
import TimeComponent from "./TimeComponent.js"

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