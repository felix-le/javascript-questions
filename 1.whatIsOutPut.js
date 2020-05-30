// function sayHi() {
//   console.log(name);
//   console.log(age);
//   var name = "Lydia";
//   let age = 21;
// }
// sayHi();
// var hoisted ==> undefined,
// don't get initialized. they  are not accessible before the line we declare (initialize) them. This is called the "temporal dead zone".
// When we try to access the variables before they are declared.

// for (var i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 1);
// }

// for (let i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 1);
// }
// 333 - 012
// Because of the event queue in JS, the setTimeout callback function is called after the loop has been executed.
// const shape = {
//   radius: 10,
//   diameter() {
//     return this.radius * 2;
//   },
//   perimeter: () => 2 * Math.PI * this.radius,
// };

// console.log(shape.diameter());
// console.log(shape.perimeter());

// const bird = {
//   size: "small",
// };

// const mouse = {
//   name: "Mickey",
//   small: true,
// };
// console.log(mouse[bird["size"]]);
// console.log("OUTPUT: mouse[bird.size] ", mouse[bird.size]);

function sum(a, b) {
  return a + b;
}
console.log(sum("1", 2));
