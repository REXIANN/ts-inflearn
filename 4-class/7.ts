/*
readonly 를 사용하면 읽기전용 변수로 만들 수 있다.
readonly로 선언된 변수는 오직 constructor 에서만 수정될 수 있다.
readonly는 접근범위를 설정하는 다른 키워드와 같이 사용할 수 있다.
 */

export {};

class Person {
  readonly name: string;
  private readonly age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const person = new Person('kim', 30)
person.name = 'lee'
