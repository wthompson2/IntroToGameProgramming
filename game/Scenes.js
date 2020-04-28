import SceneStart from "./scenes/SceneStart.js"
import SceneCountdown from "./scenes/SceneCountdown.js"
import SceneGame from "./scenes/SceneGame.js"
import SceneFinish from "./scenes/SceneFinish.js"

export default{
  sceneStart: "SceneStart",
  sceneCountdown: "SceneCountdown",
  sceneGame: "SceneGame",
  sceneFinish: "SceneFinish",
  allScenes: [
    SceneStart,
    SceneCountdown,
    SceneGame,
    SceneFinish
  ]
}
