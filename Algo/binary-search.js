const arr = [10, 57, 34, 123, 143, 22, 12, 43, 67, 42];

// Sorting the array
arr.sort((a, b) => a - b);

function binarySearch(arr, elem) {
  var start = 0;
  var end = arr.length - 1;
  var middle = Math.floor((start + end) / 2);
  while (arr[middle] !== elem && start <= end) {
    if (elem < arr[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
    middle = Math.floor((start + end) / 2);
  }
  if (arr[middle] === elem) {
    return middle;
  }
  return -1;
}

const foundIndex = binarySearch(arr, 12);
console.log(foundIndex);
