import Base from "../../engine/Base.js"
import Text from './../prefabs/Text.js'

export default class SceneStart extends Base.Scene {
    constructor() {
        super();

        let text = new Text(300, 300);
    }
}