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

function SuperObject() {}
SuperObject.isObject = function (subject) {
  return typeof subject == "object";
};
SuperObject.deepCopy = function (subject) {
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
};

function requiredParam(param) {
  throw new Error(param + " es obligatorio");
}

function LearningPath({ name = requiredParam("name"), courses = [] }) {
  this.name = name;
  this.courses = courses;
  // const private = {
  //   _name: name,
  //   _courses: courses,
  // };
  // const public = {
  //   get name() {
  //     return private["_name"];
  //   },
  //   set name(newName) {
  //     if (newName.length != 0) {
  //       private._name = newName;
  //     } else {
  //       console.warn("Tu nombre debe tener al menos 1 caracter");
  //     }
  //   },
  //   get courses() {
  //     return private["_courses"];
  //   },
  // };

  // return public;
}

function Student({
  name = requiredParam("name"),
  email = requiredParam("email"),
  age,
  twitter,
  instagram,
  facebook,
  approvedCourses = [],
  learningPaths = [],
} = {}) {
  this.name = name;
  this.email = email;
  this.age = age;
  this.approvedCourses = approvedCourses;
  this.socialMedia = {
    twitter,
    instagram,
    facebook,
  };

  const private = {
    _learningPaths: [],
  };

  Object.defineProperty(this, "learningPaths", {
    get() {
      return private._learningPaths;
    },
    set(newLp) {
      if (newLp instanceof LearningPath) {
        private._learningPaths.push(newLp);
      } else {
        console.warn("No es una instancia de LP");
      }
    },
  });

  for (learningPathIndex in learningPaths) {
    this.learningPaths = learningPaths[learningPathIndex];
  }

  // const private = {
  //   _name: name,
  //   _leaningPaths: learningPaths,
  // };
  // const public = {
  //   age,
  //   email,
  //   approvedCourses,
  //   socialMedia: {
  //     twitter,
  //     instagram,
  //     facebook,
  //   },
  //   get name() {
  //     return private["_name"];
  //   },
  //   set name(newName) {
  //     if (newName.length != 0) {
  //       private._name = newName;
  //     } else {
  //       console.warn("Tu nombre debe tener al menos 1 caracter");
  //     }
  //   },
  //   get learningPaths() {
  //     return private["_leaningPaths"];
  //   },
  //   set learningPaths(newLp) {
  //     if (!newLp.name) {
  //       console.warn("Tu LearningPath no tiene name");
  //       return;
  //     } else if (!newLp.courses) {
  //       console.warn("Tu LearningPath no tiene courses");
  //       return;
  //     } else if (!isArray(newLp.courses)) {
  //       console.warn("Tu LearningPath no es un Array");
  //       return;
  //     }
  //     private._leaningPaths.push(newLp);
  //   },
  // };
  // return public;
}

const escuelaWeb = new LearningPath({ name: "Escuela web" });
const escuelaJS = new LearningPath({ name: "Escuela JS" });
const akio = new Student({
  email: "akio@xd",
  name: "akio",
  learningPaths: [
    escuelaWeb,
    escuelaJS,
    // {
    //   name: "SUS",
    //   courses: [],
    // },
  ],
});
