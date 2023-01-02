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

function isObject(subject) {
  return typeof subject == "object";
}

function isArray(subject) {
  return Array.isArray(subject);
}

function deepCopy(subject) {
  let copySubject;

  const subjectIsObject = isObject(subject);
  const subjectIsArray = isArray(subject);

  if (subjectIsArray) {
    copySubject = [];
  } else if (subjectIsObject) {
    copySubject = {};
  } else {
    return subject;
  }

  for (key in subject) {
    const keyIsObject = isObject(subject[key]);

    if (keyIsObject) {
      copySubject[key] = deepCopy(subject[key]);
    } else {
      if (subjectIsArray) {
        copySubject.push(subject[key]);
      } else {
        copySubject[key] = subject[key];
      }
    }
  }
  return copySubject;
}

const juan = {
  name: "Juanito",
  approvedCourses: ["Curso 1", "Curso 2"],
  caracteristicas: {
    age: 18,
    colorCabello: "Negro",
    gustos: {
      musica: ["rock", "punk", "ska"],
      peliculas: ["drama", "horros", "comedia"],
    },
  },
  addCourse(newCourse) {
    console.log("This", this);
    console.log("This.approvedCourses", this.approvedCourses);
    this.approvedCourses.push(newCourse);
  },
};

function deepFreeze(obj) {
  for (key in obj) {
    if (typeof obj[key] === "object") {
      deepFreeze(Object.freeze(obj[key]));
    }
    return Object.freeze(obj);
  }
}

function deepFreeze2(obj) {
  Object.keys(obj).forEach((prop) => {
    if (typeof obj[prop] === "object") deepFreeze2(obj[prop]);
  });
  return Object.freeze(obj);
}
