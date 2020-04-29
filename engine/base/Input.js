class Input{

    //---------------------------------------------------
    //Key handling members
    //---------------------------------------------------
    static keys = [];

    static down = [];
    static up = [];

    static frameDown = [];
    static frameUp = [];

    //---------------------------------------------------
    //Mouse handling members
    //---------------------------------------------------

    //When we start an update(), we shift these arrays so we don't have mutating arrays mid-update
    static frameMouseButtonsDown = [];
    static frameMouseButtonsUp = [];

    //store mouse position {x,y}
    static mousePosition = {x:0, y:0}

    static mouseScrollDelta = 0;
    static frameMouseScrollDelta = 0;

    static swapUpDownArrays() {
        this.frameDown = this.down;
        this.frameUp = this.up;
        this.down = [];
        this.up = [];

        this.frameMouseButtonsDown = this.mouseButtonsDown;
        this.frameMouseButtonsUp = this.mouseButtonsUp;
        this.frameMouseScrollDelta = this.mouseScrollDelta;
        this.mouseScrollDelta = 0;
        this.mouseButtonsDown = [];
        this.mouseButtonsUp = [];
    }

    
    //---------------------------------------------------
    //Key handling functions
    //---------------------------------------------------

    //Did the key come up this frame?
    static getKeyUp(key) {
        return this.frameUp[key];
    }

    //Did the key go down the frame? [Remember, the OS may make it look like key repeated when they did not]
    static getKeyDown(key) {
        return this.frameDown[key];
    }

    //Is the key pressed? Down (true) Up (false)
    static getKey(key) {
        return this.keys[key];
    }

    //---------------------------------------------------
    //Mouse handling functions
    //---------------------------------------------------


    //Did the mouse button come up this frame?
    static getMouseButtonUp(button) {
        return this.frameMouseButtonsUp[button];
    }

    //Did the mouse button go down this frame?
    static getMouseButtonDown(button) {
        return this.frameMouseButtonsDown[button];
    }

    //Is the mouse button pressed? Down (true) Up (false)
    static getMouseButton(button) {
        return this.mouseButtons[button];
    }

}

export default Input;