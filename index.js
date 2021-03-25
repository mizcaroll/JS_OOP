
//2. Constructor Function
function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log('draw');
  }
}
const another = new Circle(1);

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