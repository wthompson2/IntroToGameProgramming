import Engine from "../../engine/Engine.js"
import Base from "../../engine/Base.js"
import TargetCollider from "../../engine/components/TargetCollider.js";
import TargetComponent from "../../engine/components/TargetComponent.js"
import SceneManager from "../SceneManager.js"
import TimeBehavior from "./TimeBehavior.js";
import ScoreBehavior from "./ScoreBehavior.js";
import Point from "../../engine/base/Point.js";
import Target from "../prefabs/Target.js"

export default class TargetDemoBehavior extends Engine.Base.Behavior {
    target = Target;
    count = 0;

    start() {

    }
    update() {
        if (Engine.Base.Input.getKeyUp(' '))
        {
            let xLocation = Math.floor(Math.random() * 525) + 51;
            let yLocation = Math.floor(Math.random() * 375) + 51;

            // get rid of the current Target and create another one in a random location
            if (this.count > 0)
                SceneManager.destroy(this.target.gameObject);

            this.target = Target;

            SceneManager.instantiate(this.target, new Point(xLocation, yLocation), 0);

            // this.prevTarget = newTarget;

            this.count++;
        }
    }

}