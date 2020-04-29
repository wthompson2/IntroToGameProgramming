import Base from "../../engine/Base.js"
import SceneTransition from "../behaviors/CountdownSceneTimerBehavior.js"

export default{
  name:"CountdownSceneTimer",
  components:[
    {
      type:"CountdownSceneTimerBehavior",
    }
  ]
}