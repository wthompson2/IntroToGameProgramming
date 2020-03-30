import Scenes from "./game/Scenes.js"
import SceneManager from "./game/SceneManager.js"
import Engine from "./engine/Engine.js"

let sceneStart = new Scenes.SceneStart();
// let sceneCountdown = new Scenes.SceneCountdown();
// let sceneGame = new Scenes.SceneGame();
// let sceneFinish = new Scenes.SceneFinish();

SceneManager.addScene(sceneStart);
// SceneManager.addScene(sceneCountdown);
// SceneManager.addScene(sceneGame);
// SceneManager.addScene(sceneFinish);

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

