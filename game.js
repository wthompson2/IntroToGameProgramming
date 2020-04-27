import Scenes from "./game/Scenes.js"
import SceneManager from "./game/SceneManager.js"
import Engine from "./engine/Engine.js"
import GameObjects from "./game/GameObjects.js"
import GameBehaviors from "./game/GameBehaviors.js";

Engine.Base.Scene.gameObjects = GameObjects;
Engine.Base.Scene.components = Engine.Components;
Engine.Base.Scene.gameBehaviors = GameBehaviors;

// let sceneStart = new Scenes.SceneStart();
// let sceneCountdown = new Scenes.SceneCountdown();
// let sceneGame = new Scenes.SceneGame();
// let sceneFinish = new Scenes.SceneFinish();

Scenes.allScenes
  .forEach(i => SceneManager.addScene(Engine.Base.Scene.parse(i)))

// add a loop concerning the "play again" feature

SceneManager.currentScene = Scenes.startScene;
// SceneManager.currentScene = Scenes.allScenes[1];

// document.body.addEventListener('space', space);

let Input = Engine.Base.Input;

function keypress(event) {
    // console.log(`Modifier keys: Space: ${event.spaceKey}`);
}

let canv, ctx;

function main() {
    canv = document.querySelector("#canv");
    ctx = canv.getContext('2d');

    setInterval(gameLoop, 33);
}

function gameLoop() {
    update();
    draw(ctx);
}

function update() {
    SceneManager.currentScene.update(Engine.Components.Collider, Engine.Components.CollisionHelper);    
}

function draw(ctx) {
    SceneManager.currentScene.draw(ctx, canv.width, canv.height);
}

main();
