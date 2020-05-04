import NameableParent from "./NameableParent.js"
import Point from "./Point.js"
import GameObject from "./GameObject.js";
import PointCollider from "../components/PointCollider.js";
import Input from "./Input.js";

/**
 * A scene represents a level in a game.
 */
class Scene extends NameableParent {

  /**
   * A static reference to all gameObjects available in this game.
   * This prevents a circular module dependency. By "linking" these to the
   * scene as static list after the program starts, we can remove any circular
   * dependencies.
   */
  static gameObjects = [];

  /**
   * A static reference to all Components available in the game engine.
   * This prevents a circular module dependency. By "linking" these to the
   * scene as static list after the program starts, we can remove any circular
   * dependencies.
   */
  static components = [];

  /**
   * A static reference to all Game Behaviors available in this game.
   * This prevents a circular module dependency. By "linking" these to the
   * scene as static list after the program starts, we can remove any circular
   * dependencies.
   */
  static gameBehaviors = [];

  /**
   * Scene constructor. Assigns the scene a name and starts it.
   * 
   * @param {String} name Name of this scene
   */
  constructor(name) {
    super(name);
    this.start();

  }

  /**
   * Assign the scene its scene tree using our declarative syntax.
   * 
   * @param {String} obj The string specifying the contents of the scene in
   * our declarative syntax.
   */
  static parse(obj) {
    let toReturn = new Scene(obj.name);
    toReturn.objects = obj.objects;
    return toReturn;

  }
  start2() {

    this.children = [];

    //Load a scene from a declarative syntax

    if (this.objects) {
      this.children = [];
      for (let i = 0; i < this.objects.length; i++) {
        let obj = this.objects[i];
        this.buildChild2(obj, this.children)

      }
    }
  }
  start() {
    this.children = [];

    //Load a scene from a declarative syntax

    if (this.objects) {
      this.children = [];
      for (let i = 0; i < this.objects.length; i++) {
        let obj = this.objects[i];
        this.buildChild(obj, this.children)

      }
    }
  }

  /**
   * 
   * @param {String} obj The string giving the declarative syntax
   * @param {NameableParent} parent The parent of the object in the scene tree
   */
  buildChild2(obj, parent) {

    let gameObjectType = null;
    let keys = Object.keys(Scene.gameObjects)
    for (let i = 0; i < keys.length; i++) {
      let key = keys[i]
      if (key == obj.type) {
        gameObjectType = Scene.gameObjects[key];
        break;
      }
    }
    if (gameObjectType == null) throw "Could now find game object of type " + obj.type;

    let gameObject = this.instantiate(gameObjectType, new Point(obj.location.x, obj.location.y), 0, parent);
    /*let gameObject = new GameObject(obj.location.x, obj.location.y, 1, 1, 0);
    parent.push(gameObject);
    let prefab = gameObjects[gameObjectType.name];
    this.buildIt(prefab, gameObject, gameBehaviors, gameObjects, components);*/

    gameObject.name = obj.name;
    this.buildIt(obj, gameObject);


  }
  buildIt(obj, gameObject) {
    if (obj.children) {
      for (let i = 0; i < obj.children.length; i++) {
        let child = obj.children[i];
        this.buildChild2(child, gameObject.children);
      }

    }

    //Set the key-pair values on components already on prefabs
    if (obj.componentValues) {
      for (let j = 0; j < obj.componentValues.length; j++) {
        let componentValue = obj.componentValues[j]
        let type = componentValue.type;
        let component = gameObject.getComponent(type);
        let values = componentValue.values;
        for (let k = 0; k < values.length; k++) {
          let value = values[k];
          component[value.key] = value.value;
        }
      }
    }

    //Add new components
    if (obj.components) {
      for (let i = 0; i < obj.components.length; i++) {
        let componentInfo = obj.components[i];

        let componentString = componentInfo.type;
        let componentType = null;
        let componentKeys = Object.keys(Scene.components);
        let behaviorKeys = Object.keys(Scene.gameBehaviors);
        for (let i = 0; i < componentKeys.length; i++) {
          let key = componentKeys[i];
          if (key == componentString) {
            componentType = Scene.components[key];
            break
          }
        }
        if (componentType == null) {
          for (let i = 0; i < behaviorKeys.length; i++) {
            let key = behaviorKeys[i]
            if (key == componentString) {
              componentType = Scene.gameBehaviors[key]
              break;
            }
          }
        }
        if (componentType == null) throw "Could not find component " + componentString;
        let component = new componentType();
        gameObject.addComponent(component);
        if (componentInfo.values) {

          //Now set the key-value pairs on the new component we just made
          let componentValues = componentInfo.values;
          for (let v = 0; v < componentValues.length; v++) {
            let value = componentValues[v];
            let key = value.key;
            let val = value.value;
            component[key] = val;
          }
        }
        if (component.start)
          component.start();

      }
    }
  }







  buildChild(obj, parent) {
    let gameObject = this.instantiate(obj.type, obj.location, 0, parent);
    gameObject.name = obj.name;

    if (obj.children) {
      for (let i = 0; i < obj.children.length; i++) {
        let child = obj.children[i];
        this.buildChild(child, gameObject.children);
      }

    }

    if (obj.componentValues) {
      for (let j = 0; j < obj.componentValues.length; j++) {
        let componentValue = obj.componentValues[j]
        let type = componentValue.type;
        let component = gameObject.getComponent(type);
        let values = componentValue.values;
        for (let k = 0; k < values.length; k++) {
          let value = values[k];
          component[value.key] = value.value;
        }
      }
    }
    if (obj.components) {
      for (let i = 0; i < obj.components.length; i++) {
        let componentInfo = obj.components[i];
        let component = new componentInfo.type();
        gameObject.addComponent(component);
        if (component.start)
          component.start();

      }
    }
  }
  draw(ctx, width, height) {
    ctx.save();
    let tx, ty, sx, sy, r, hx, hy;
    let cameras = this.children.filter(i => i.hasComponent("CameraComponent"))
    if (cameras.length == 0) {
      //You really should add a camera
      //console.log("You should add a camera to the scene. C'mon.")
      ctx.fillStyle = "gainsboro";
      ctx.fillRect(0, 0, width, height)
      tx = 0;
      ty = 0;
      sx = 1
      sy = 1
      r = 0;
      hx = 0;
      hy = 0;
    }
    else {
      if (cameras.length > 1)
        console.log("More than 1 camera detected in the scene. You should only have exactly one root game object with a camera component attached.")
      let camera = cameras[0];
      let cameraComponent = camera.getComponent("CameraComponent")
      ctx.fillStyle = cameraComponent.backgroundColor;
      ctx.fillRect(0, 0, width, height)
      tx = camera.x;
      ty = camera.y;
      sx = camera.scaleX;
      sy = camera.scaleY;
      r = camera.rotation;
      hx = width / 2;
      hy = height / 2;
    }

    ctx.translate(hx, hy)
    ctx.rotate(r)
    ctx.scale(sx, sy)
    ctx.translate(-tx, -ty)

    this.children.filter(i => i.draw && !i.hasComponent("CanvasComponent")).forEach(i => i.draw(ctx));

    ctx.restore();

    /** Now handle the canvas */
    ctx.save();
    //Get any references to canvas in root objects
    let canvases = this.children.filter(i => i.draw && i.hasComponent("CanvasComponent"));

    //Respond to the case of no canvas
    if (canvases.length == 0) {
      console.log("Can't draw to the canvas because you don't have one.")
    }

    //Respond to the case of more than one canvas
    else {
      if (canvases.length > 2) {
        console.log("You have too many canvas components, you should only have one.")
      }
      let canvas = canvases[0];
      canvas.draw(ctx);

    }

    //Call draw on the object with the canvas

    ctx.restore();

  }
  update(collidableType, collisionHelper, ctx) {
    this.children.filter(i => i.update).forEach(i => i.update());

    //Add collision behavior
    let collidableChildren = [];
    this.getCollidable(this, collidableChildren, collidableType);

    for (let i = 0; i < collidableChildren.length; i++) {
      for (let j = i + 1; j < collidableChildren.length; j++) {
        if (collisionHelper.inCollision(collidableChildren[i], collidableChildren[j])) {
          let gameObjectOne = collidableChildren[i].gameObject;
          let gameObjectTwo = collidableChildren[j].gameObject;

          //Now loop over all the behaviors too see if any are listening for collision events
          for (let i = 0; i < gameObjectOne.components.length; i++) {
            let component = gameObjectOne.components[i];
            if (component.onCollisionStay)
              component.onCollisionStay(collidableChildren[j]);
          }
          for (let j = 0; j < gameObjectTwo.components.length; j++) {
            let component = gameObjectTwo.components[j];
            if (component.onCollisionStay)
              component.onCollisionStay(collidableChildren[i]);
          }

        }
      }
    }

    //Look for picking events
    //
    //We need to create a collision object for the mouse location
    //Loop over collidable objects
    //Find collisions

    let cameras = this.children.filter(i => i.hasComponent("CameraComponent"));
    let point = {x:0,y:0};
    point.x = Input.mousePosition.x;
    point.y = Input.mousePosition.y;
    if(cameras.length == 0){
      //Don't change anything
    }
    else{
      let canvas = ctx.canvas;
      let width = canvas.width;
      let height = canvas.height;

      let camera = cameras[0]
      //let cameraComponent = camera.getComponent("CameraComponent");
      let tx = camera.x;
      let ty = camera.y;
      let sx = camera.scaleX;
      let sy = camera.scaleY;
      let r = camera.rotation;
      let hx = width / 2;
      let hy = height / 2;

      point.x -= hx;
      point.y -= hy;
      point.x /=sx;
      point.y /= sy;
      point.x += tx;
      point.y += ty;
    }

    let colliderObject = {};
    colliderObject.gameObject = new GameObject();
    colliderObject.gameObject.x = point.x;
    colliderObject.gameObject.y = point.y;
    colliderObject.collider = new PointCollider();

    for(let i = 0; i < collidableChildren.length; i++){
      if(collisionHelper.inCollision(collidableChildren[i], colliderObject))
      {
        let gameObject = collidableChildren[i].gameObject;
        for(let j = 0; j < gameObject.components.length; j++){
          let component = gameObject.components[j];
          if(component.onMouseOver){
            component.onMouseOver();
          }
          if(component.onMouseDown){
            if(Input.getMouseButtonDown(0)){
              component.onMouseDown();
            }
          }
        }
      }
    }


  }
  getCollidable(gameObject, collidableChildren, type) {

    if (gameObject.getComponent) {
      try {
        let collidableComponent = gameObject.getComponent(type);
        if (collidableComponent) {
          collidableChildren.push({ collider: collidableComponent, gameObject });
        }
      } catch (e) {
        //no-op
      }
    }

    for (let i = 0; i < gameObject.children.length; i++) {
      let child = gameObject.children[i];

      this.getCollidable(child, collidableChildren, type);
    }
  }



  instantiate(gameObjectType, location, rotation, parent) {
    /*let gameObject = new gameObjectType(location.x, location.y);
gameObject.rotation = rotation;
 
parent.push(gameObject);
gameObject.recursiveCall("start");
return gameObject*/

    let gameObject = new GameObject(location.x, location.y, 1, 1, rotation);
    parent.push(gameObject);
    let prefab = Scene.gameObjects[gameObjectType.name];
    this.buildIt(prefab, gameObject)
    gameObject.name = prefab.name;
    gameObject.recursiveCall("start");
    return gameObject

  }
}

export default Scene;