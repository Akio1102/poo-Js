// const obj = {
//   a: "a",
//   b: "b",
//   c: {
//     d: "d",
//     c: "c",
//   },
//   editA() {
//     this.a = "AAAA";
//   },
// };

// const stringifiedComplexObj = JSON.stringify(obj);
// const obj2 = JSON.parse(stringifiedComplexObj);
// console.log({
//   stringifiedComplexObj,
//   obj2,
// });

const numeritos = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// let numerito = 0;
// for (let index = 0; index < numeritos.length; index++) {
//   numerito = numeritos[index];
//   console.log({ index, numerito });
// }

function recursiva(arrayNums) {
  if (arrayNums.length != 0) {
    const firtNum = arrayNums[0];
    console.log(firtNum);
    arrayNums.shift();
    recursiva(arrayNums);
  }
}
