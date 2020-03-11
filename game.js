import Scenes from "./game/Scenes.js"
import SceneManager from "./game/SceneManager.js"
import Engine from "./engine/Engine.js"

let sceneStart = new Scenes.SceneStart();

SceneManager.addScene(sceneStart);

// let rotatingSquare = new GameObject(200,200);
// sceneOne.gameObjects.push(rotatingSquare);
// let playerComponent  = new PlayerComponent(100,100,"red","blue");
// let playerBehavior = new PlayerBehavior();
// rotatingSquare.addComponent(playerComponent);
// rotatingSquare.addComponent(playerBehavior);

let textTimer = new GameObject(300,300);
sceneOne.gameObjects.push(textTimer);
let textComponent  = new TextComponent("10","30pt Times","red","blue");
let textBehavior = new TextBehavior();
textTimer.addComponent(textComponent);
textTimer.addComponent(textBehavior);

// let currentScene = sceneOne;

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
    SceneManager.currentScene.update();    
}

function draw(ctx) {
    SceneManager.currentScene.draw(ctx, canv.width, canv.height);
}

main();

