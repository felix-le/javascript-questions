var x = 21;
var fun = function () {
  console.log(x);
  var x = 42; // var x is hoisted to the top of the function scope then it
  // is initialized with undefined
};

fun(); // undefined
