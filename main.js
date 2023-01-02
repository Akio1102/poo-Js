const obj = {
  a: "a",
  b: "b",
  c: {
    d: "d",
    c: "c",
  },
  editA() {
    this.a = "AAAA";
  },
};

const stringifiedComplexObj = JSON.stringify(obj);
const obj2 = JSON.parse(stringifiedComplexObj);
console.log({
  stringifiedComplexObj,
  obj2,
});
// for (prop in obj) {
//   obj2[prop] = obj[prop];
// }

// const obj3 = Object.assign({}, obj);
// const obj4 = Object.create(obj);
