import Scene from "./Scene.js";
import GameObject from "./GameObject.js"
import PlayerComponent from "./PlayerComponent.js/index.js"
import TextComponent from "./TextComponent.js"
import PlayerBehavior from "./PlayerBehavior.js/index.js";
import TextBehavior from "./TextBehavior.js";

let sceneArr = [];

// let rotatingSquare = new GameObject(200,200);
// sceneOne.gameObjects.push(rotatingSquare);
// let playerComponent  = new PlayerComponent(100,100,"red","blue");
// let playerBehavior = new PlayerBehavior();
// rotatingSquare.addComponent(playerComponent);
// rotatingSquare.addComponent(playerBehavior);

// let textTimer = new GameObject(300,300);
// sceneOne.gameObjects.push(textTimer);
// let textComponent  = new TextComponent("10","30pt Times","red","blue");
// let textBehavior = new TextBehavior();
// textTimer.addComponent(textComponent);
// textTimer.addComponent(textBehavior);

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
    currentScene.update();    
}

function draw(ctx) {
    currentScene.draw(ctx, canv.width, canv.height);
}

main();

