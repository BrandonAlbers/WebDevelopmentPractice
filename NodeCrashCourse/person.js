//Module Wrapper Function
// (function (exports, require, module, __filename, dirname){

class person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greeting() {
    console.log(this.name + " is my name and I am " + this.age);
  }
}

module.exports = person;

// })
