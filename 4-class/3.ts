/*
private 을 사용하는 다른 방법으로 #을 붙일 수 있음
비교적 최근에 추가된 자바스크립트 문법임
자바스크립트는 동적 타입 언어이기 때문에 private 키워드를 사용하지 못한 것으로 보임
타입스크립트에서는 #과 private 모두 사용할 수 있음
 */

class Person {
  #name: string;

  constructor(name: string) {
    this.#name = name;
  }

  sayHello() {
    console.log(`hello, this is ${this.#name}`);
  }
}

const person = new Person('hong')
console.log(person.name)
