function regressiveCount(value) {
  if (value === 0) { // => caso base
    console.log('Ready!');
    return;
  }

  console.log(value);
  regressiveCount(value - 1); // => caso recursivo
}

regressiveCount(10); // => 10 9 8 7 6 5 4 3 2 1 'Ready!'