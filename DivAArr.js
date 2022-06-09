// DIvide an array to equal parts

let arr = [1, 2, 3, 4, 5, 6, 7];

// while (arr.length > 0) {
//   for (let i = 0; i >= 0; i++) {
//     if (arr.length % i == 0) {
//       console.log(arr.splice(0, i));
//     }
//   }
// }

while (arr.length > 0) {
  if (arr.length % 2 == 0) {
    for (let i = 0; i >= 0; i++) {
      console.log(i);
    }
    console.log(arr.splice(0, i));
  }
}
