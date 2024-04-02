// <!-- Var, let, const -->

// <!-- Scope -->

{
  {
    var a = 5;
  }
  console.log(a); // 5

  {
    let b = 5;
  }
  console.log(b); // ReferenceError: b is not defined

  {
    const c = 5;
  }
  console.log(c); // ReferenceError: c is not defined

  // Shadowing
  var a = 5;
  {
    var a = 10;
  }
  console.log(a); // 10

  let b = 5;
  {
    let b = 10;
  }
  console.log(b); // 5
}
// Mix between var and let

{
  function test() {
    var a = "hello";
    let b = "Bye";

    if (true) {
      let a = "world";
      var b = "World";
      console.log(a); // world
      console.log(b); // identifier 'b' has already been declared
    }
  }
  test(); // identifier 'b' has already been declared
}

// Declaration

var a;
var a;
// it is valid
let b;
let b;
// SyntaxError: Identifier 'b' has already been declared

// Initialization

const c;
const c;
// SyntaxError: Missing initializer in const declaration

// Hoisting
var count;
console.log(count);
count = 5;

console.log(count); // undefined

console.log(count2); // ReferenceError: Cannot access 'count2' before initialization
let count2;

var count3 = 20, count4 = 30;

function getScore() {
  var count3 = 2;
  console.log(count3); // 2
}
console.log(getScore); // count3 = 20