//using Object.defineProperty to define getters and/or setters
function Circle(radius) {
  this.radius = radius;
  let defaultLocation = {x: 0, y: 0};
  this.getDefaultLocation = function() {
    return defaultLocation; //within closure
  }

  this.draw = function() {
    console.log('draw');
  };
  //using defineProperty method
  Object.defineProperty(this, 'defaultLocation', { get: function() {
    return defaultLocation;
  }, set: function(value) {
    if (!value.x || !value.y)
    throw new Error('Invalid location');
    defaultLocation = value;
  }
});
}
const circle = new Circle(10);
circle.defaultLocation = 1;
circle.draw();

/* //surface illustration of the concept of scope and closure for abstraction of the js public interface
//a closure determines what variable will be accesible to an inner function 

function Circle(radius) {
  this.radius = radius;
  let defaultLocation = {x: 0, y: 0};

  let computeOptimumLocation = function(factor) {
    //..
  }
  this.draw = function() {
    computeOptimumLocation(0.1); //closure able to call
    console.log('draw');
  };
}
const circle = new Circle(10);
circle.draw();
//variables defaultLocation & computeOptimumLocation are within the SCOPE of the Circle funtion(parent funtion) and within the CLOSURE of the draw funtion(inner function) */

/* //to know if an object has a given property
function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log('draw');
  }
}
const circle = new Circle(10);
if ('radius' in circle)
console.log('Circle has a radius'); */

/* //Displaying the properties of an object in an array
function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log('draw');
  }
}
const circle = new Circle(10);
const keys = Object.keys(circle);
console.log(keys);
// displays (2) ["radius", "draw"] on the console 
 */
/* //enumerating properties
function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log('draw');
  }
}
const circle = new Circle(10);

for (let key in circle) {
  //if (typeof circle[key] !=='function')
  console.log(key, circle[key]);
}

//console.log(key); logs the radius and draw properties without their values
//console.log(key, circle[key]); logs the radius and draw properties on console with their values */

/* //primitives vs. objects/reference types
//primitives are copied by their values, objects are copied by their reference.
//exapmle of refence type

let obj = {value: 10};
function increase(obj) {
  obj.value++;
}
increase(obj);
console.log(obj);
// will log 11 on the console
//obj++ would log 10 */

/* //2. Constructor Function
function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log('draw');
  }
}
const another = new Circle(1); */

/* //Ways to create an object

  //1. Factory function
function createCircle(radius) {
  return {
    radius,
    draw: function() {
     console.log('draw');
   }
  };
}
const circle = createCircle(1)
circle.draw(); */

/* //object literal syntax
 const circle = {
   radius: 1,
   location: {
     x: 1,
     y: 1
   },
   draw: function() {
     console.log('draw');
   }
 };
 circle.draw(); */