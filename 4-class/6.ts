/*
protected 인 경우 상속받는 쪽에서만 사용 가능. 외부에서 사용 불가
만약 constructor 앞에 protected를 붙이면 외부에서 사용할 수 없기 때문에 해당 클래스는 객체를 만들 수 없게 된다
객체를 만들 수 없게 하는 목적으로 constructor 앞에 protected를 붙이기도 한다.
이렇게 되면 해당 객체는 객체를 만들 수 없고 다른 클래스를 만들기 위한 용도로만 사용된다.
 */
export {};

class Person {
  protected name: string;

  // protected constructor(name: string) {
  constructor(name: string) {
    this.name = name;
  }
}

class Programmer extends Person {
  sayHello() {
    console.log(`I am ${this.name}`);
  }
}

const person = new Person('kim')
console.log(person.name) // protected 인 경우 상속받는 쪽에서만 사용 가능. 외부에서 사용 불가
