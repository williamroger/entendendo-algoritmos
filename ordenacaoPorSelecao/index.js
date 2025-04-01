function findIndexOfSmallestValue(array) {
  let smallest = array[0];
  let smallestIndex = 0;
 
  for (let i = 1; i < array.length; i++) {
    if (array[i] < smallest) {
      smallest = array[i];
      smallestIndex = i;
    }
  }

  return smallestIndex;
}

function selectionSort(array) {
  const arrayLength = array.length;
  const newArray = [];

  for (let i = 0; i < arrayLength; i++) {
    const smallestIndex = findIndexOfSmallestValue(array);
    const smallestValue = array.splice(smallestIndex, 1)[0];

    newArray.push(smallestValue);
  }

  return newArray;
}

const listOfNumbers = [7, 3, 2, 16, 10, 1]; 

const newArray = selectionSort(listOfNumbers);

console.log(newArray); // => [ 1, 2, 3, 7, 10, 16 ]
