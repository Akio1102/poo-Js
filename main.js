const obj = {
  a: "a",
  b: "b",
  c: {
    d: "d",
    c: "c",
  },
};

const obj2 = {};
for (prop in obj) {
  obj2[prop] = obj[prop];
}

const obj3 = Object.assign({}, obj);
const obj4 = Object.create(obj);
