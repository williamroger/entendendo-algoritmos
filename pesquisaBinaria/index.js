function binarySearch(array, target) {
  let initialIndex = 0;
  let finalIndex = array.length - 1;

  while (initialIndex <= finalIndex) {
    const middleIndex = Math.floor((initialIndex + finalIndex) / 2);
    const middleValue = array[middleIndex];

    if (middleValue === target) {
      return middleIndex;
    }

    if (middleValue < target) {
      initialIndex = middleIndex + 1;
    } else {
      finalIndex = middleIndex - 1;
    }
  }

  return null;
}

const numberList = [2, 6, 8, 13, 15, 20, 31, 45, 83, 97];

console.log('Looking for number 45: ', binarySearch(numberList, 45)); // => 7
console.log('Looking for number 6: ', binarySearch(numberList, 6)); // => 1
console.log('Looking for number -3: ', binarySearch(numberList, -3)); // => null
