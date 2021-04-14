//codility demo challenge:
//Write a function: function solution(A); that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A. For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.  Given A = [1, 2, 3], the function should return 4. Given A = [−1, −3], the function should return 1. Write an efficient algorithm for the following assumptions: N is an integer within the range [1..100,000]; each element of array A is an integer within the range [−1,000,000..1,000,000].


let min = 1;
function solution(arr) {
let sorted = arr.sort((a,b) => a - b) //sorts array to ascending order.
let uniq = [...new Set(sorted)]; //removes duplicate elements from sorted array.
for (let i = 0; i < uniq.length; i++) {
  if ( uniq[i] === min) {
     min++;
   } 
 }
return min;
}
//test data
const newArr = [1, 3, 6, 4, 1, 2];
const arr2 = [1, 2, 3];
const arr3 = [-1, -3];
const arr4 = [1, 1, 2, 2, 4, 7];;
console.log(solution(arr4)); //3 Success


/* //stopwatch exercise
function Stopwatch() {
  let startTime, endTime, running, duration = 0;

  this.start = function() {
    if (running)
    throw new Error('Stopwatch has already started.');
    running = true;
    startTime = new Date();
  };
  this.stop = function() {
    if (!running)
    throw new Error('stopwatch is not started.');
    running = false;
    endTime = new Date();

    const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
    duration +=seconds;
  };
  this.reset = function() {
    startTime = null;
    endTime = null;
    running = false;
    duration = 0;
  };
  
  Object.defineProperty(this, 'duration', { get: function() { return duration; }
  });
  } */
//const sw = new Stopwatch()

/* //using Object.defineProperty to define getters and/or setters
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
circle.draw(); */

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