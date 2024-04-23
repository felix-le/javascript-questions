function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    let j; // Declare j here

    for (j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal; // Update the correct position
  }

  return arr;
}

const arr = [10, 57, 34, 123, 143, 22, 12, 43, 67, 42];

const sortArr = insertionSort(arr);
console.log(sortArr);
