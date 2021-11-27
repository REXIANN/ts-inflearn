/*
constructor에서 접근범위, 초기화가 한번에 매개변수에 넣어서 가능하다
 */
export {};

class Person {
  constructor(public name: string, public age: number) {}
}

const person = new Person('kim', 30)
console.log(person.name, person.age)
