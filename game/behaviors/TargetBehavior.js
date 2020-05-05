import Base from "../../engine/Base.js"
// import TargetComponent from "../../engine/components/TargetComponent.js"
// import SceneManager from "../SceneManager.js"
// import TimeBehavior from "./TimeBehavior.js";
// import ScoreBehavior from "./ScoreBehavior.js";
// import Point from "../../engine/base/Point.js";


export default class TargetBehavior extends Base.Behavior {
    start() {
        // this.radius = this.gameObject.getComponent("TargetComponent");
        //this.radius = TargetComponent.radius;
    }
    update() {
        // if (Base.Input.getMouseButton(0))
        // {
        //     // hitbox of the if statement below is a square, try and make circle
        //     if ((Base.Input.mousePosition.x <= location.x + this.radius && Base.Input.mousePosition.x >= location.x - this.radius)
        //         && (Base.Input.mousePosition.y <= location.y + this.radius && Base.Input.mousePosition.y >= location.y - this.radius))
        //     {
        //         // create random coordinates for new target to appear
        //         xLocation = Math.floor(Math.random() * 525) + 51;
        //         yLocation = Math.floor(Math.random() * 425) + 51;

        //         // get rid of the current Target and create another one in a random location
        //         SceneManager.destroy("Target");
        //         SceneManager.instantiate("Target", new Point(xLocation, yLocation), 0);
                
        //         // reset time to 3 and add 1 to score
        //         TimeBehavior.time = 3
        //         ScoreBehavior.score++;
        //     }
        //     else
        //     {
        //         SceneManager.currentScene = "SceneFinish";
        //     }
        // }
    }
}