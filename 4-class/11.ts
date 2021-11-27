/*
abstract 키워드를 사용해서 추상클래스를 정의할 수 있다
추상클래스는 객체로 만들 수 없다
abstract로 메서드를 선언한 경우 상속받는 쪽에서는 무조건 해당 메서드를 구현해야 한다.

 */

export {};

abstract class Person {
  constructor(public name: string) {
  }

  sayHello() {
    console.log('hello');
  }

  abstract sayHello2(): void
}

class Programmer extends Person {
  sayHello() {
    super.sayHello();
    console.log('I am a programmer');
  }

  sayHello2() {
    console.log('nice to meet you');
  }
}

const person = new Person('kim');

const programmer = new Programmer('lee');
programmer.sayHello();
programmer.sayHello2();
