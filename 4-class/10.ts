/*
static 키워드를 통해 정적 멤버변수와 적적 메서드를 정의
정적 멤버변수는 각 객체와는 상관없이 고정된 값이다
 */
export {};

class Person {
  static adultAge = 20;

  constructor(public name: string, public age: number) {
  }

  sayHello() {
    console.log(`Hi, this is ${this.name}`);
    console.log(
      Person.getIsAdult(this.age) ? 'I am not an adult' : 'I am an adult',
    );
  }

  static getIsAdult(age: number) {
    return Person.adultAge <= age;
  }
}

const person = new Person('kim', 30);
person.sayHello();
console.log(`AdultAge is ${Person.adultAge}`);
