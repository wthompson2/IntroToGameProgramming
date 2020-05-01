import Engine from "../../engine/Engine.js"
import SceneManager from "../SceneManager.js"
import ScoreBehavior from "./ScoreBehavior.js";

export default class SceneTransitionBehavior extends Engine.Base.Behavior {
    

    start() {

    }
    update() {
        if (Engine.Base.Input.getKeyUp('Enter'))
        {
            SceneManager.currentScene = "SceneCountdown";
        }
    }

}