const add = (a, b) => a + b;

const add2 = function (a, b) {
  return a + b;
};

function fn() {
  console.log(arguments);
}
fn(1, 2, 3, 4, 5); // Arguments(5) [1, 2, 3, 4, 5, callee: ƒ, Symbol(Symbol.iterator): ƒ]

const fnArr = () => {
  console.log(arguments);
};
fnArr(1, 2, 3, 4, 5); // ReferenceError: arguments is not defined
