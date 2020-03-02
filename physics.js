// this is constant, always at the point of origin
let xInit = 0;
let yInit = 0;

// g is constant, t will tick when arrow is in the air (then reset to 0)
let g = 9.8;
let t = 0;

// depends on how arrow is shot
let xVInit;
let yVInit;

// x velocity is constant
let xV = xVInit;
let yV = yVInit - (g * t);

// formulas for new locations
let x = xInit + xV * t;
let y = yInit + (yV * t) - (.5 * g * Math.pow(t,2));
