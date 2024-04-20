// let head = {
//   glasses: 1,
// };
// let table = {
//   pen: 3,
// };
// let bed = {
//   sheet: 1,
//   pillow: 2,
// };
// let pockets = {
//   money: 2000,
// };
// // Use __proto__ to assign prototypes in a way that any property lookup will follow the path: pockets → bed → table → head.
// // For instance, pockets.pen should be 3 (found in table), and bed.glasses should be 1 (found in head).
// // Answer the question: is it faster to get glasses as pockets.glasses or head.glasses? Benchmark if needed.

// pockets.__proto__ = bed;
// bed.__proto__ = table;
// table.__proto__ = head;

// console.log(pockets.pen);
// console.log(bed.glasses);
/**
 * In modern engines, performance-wise, 
 * there’s no difference whether we take a property from an object or its prototype. 
 * They remember where the property was found and reuse it in the next request.

For instance, for pockets.glasses they remember where they found glasses (in head), 
and next time will search right there. 
They are also smart enough to update internal caches if something changes, so that optimization is safe.
 */

// {} ++++ trues
// false
// true // delete effect only directly object.
// undefined

// function Rabbit() {}
// Rabbit.prototype = {
//   eats: true,
// };

// let rabbit = new Rabbit();

// Rabbit.prototype = {};

// console.log(rabbit.eats);
