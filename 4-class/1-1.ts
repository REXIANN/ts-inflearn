/*
ts에서의 클래스 생성방법
 */
export {};

class Person {
  name: string;
  age: number = 0;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log('hello');
  }
}
