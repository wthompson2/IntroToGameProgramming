import Scenes from "./game/Scenes.js"
import SceneManager from "./game/SceneManager.js"
import Engine from "./engine/Engine.js"
import GameObjects from "./game/GameObjects.js"
import GameBehaviors from "./game/GameBehaviors.js";

Engine.Base.Scene.gameObjects = GameObjects;
Engine.Base.Scene.components = Engine.Components;
Engine.Base.Scene.gameBehaviors = GameBehaviors;

Scenes.allScenes
  .forEach(i => SceneManager.addScene(Engine.Base.Scene.parse(i)))

SceneManager.currentScene = Scenes.sceneStart;
// SceneManager.currentScene = Scenes.sceneFinish;

//Setup event handling
document.body.addEventListener('keydown', keydown);
document.body.addEventListener('keyup', keyup);
document.body.addEventListener('keypress', keypress);
document.body.addEventListener('mousedown', mousedown);
document.body.addEventListener('mouseup', mouseup);

let Input = Engine.Base.Input;

function keydown(event) {
    if (Input.keys[event.key] != true)
        Input.down[event.key] = true;
    Input.keys[event.key] = true;
  }
  
function keyup(event) {
    if (Input.keys[event.key] != false)
        Input.up[event.key] = true;
    Input.keys[event.key] = false;
}

function mousedown(event) {
    if (Input.mouseButtons 
        && Input.mouseButtons[event.button])
        Input.mouseButtonsDown[event.button] = true;
    Input.mouseButtons[event.button] = true;
}

function mouseup(event) {
    if (Input.mouseButtons 
        && Input.mouseButtons[event.button])
        Input.mouseButtonsUp[event.button] = true;
    Input.mouseButtons[event.button] = false;
}

function keypress(event) {
    //console.log(`Modifier keys: Control: ${event.ctrlKey}, Alt: ${event.altKey}, Shift: ${event.shiftKey}, Meta Key: ${event.metaKey}`);
}

let canv, ctx;

function main() {
    canv = document.querySelector("#canv");
    ctx = canv.getContext('2d');

    setInterval(gameLoop, 33);
}

function gameLoop() {
    Input.swapUpDownArrays();
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
