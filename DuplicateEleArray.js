const numbers = [1, 2, 3, 3, 5];

let x = numbers => numbers.filter((v, i) => numbers.indexOf(v) === i);
console.log(x(numbers));

// =================================

console.log([...new Set(arr)]);
