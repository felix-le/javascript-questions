const alert = (data) => {
  console.log(data);
};

//alert(sumTo(100)); // 5050
/**
 * sumTo(1) = 1
sumTo(2) = 2 + 1 = 3
sumTo(3) = 3 + 2 + 1 = 6
sumTo(4) = 4 + 3 + 2 + 1 = 10
...
sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050
 * 
 * 
 */
// function sumTo(n) {
//   let sum = 0;
//   for (let i = 1; i <= n; i++) {
//     sum += i;
//   }
//   console.log(sum);
// }
function sumTo(n) {
  let sum = 0;
  if (n == 1) {
    sum + 1;
  } else {
    sum += n;
    return sumTo(n - 1);
  }

  return sum;
}
const result = sumTo(100);
console.log(result);
