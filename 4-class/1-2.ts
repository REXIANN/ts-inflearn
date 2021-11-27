export {};

class Person {
  sayHello() {
    console.log('hello');
  }
}

class Programmer extends Person {
  fixBug() {
    console.log('bug fixed');
  }
}

const programmer = new Programmer();
programmer.fixBug();
programmer.sayHello();
