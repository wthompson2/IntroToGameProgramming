import Engine from "../../engine/Engine.js"
import SceneManager from "../SceneManager.js"

export default class SceneTransitionBehavior extends Engine.Base.Behavior {
    

    start() {

    }
    update() {
        setTimeout(SceneManager.countdownToGame, 3000);
    }

}