/*
super 키워드를 통해 부모의 생성자를 호출해주어야함
또는 super 키워드를 통해 메서드를 호출 가능

* public: 외부 노출, 상속받는 쪽에도 노출
* protected: 외부 노출 ㄴㄴ, 상속받는 쪽에는 노출
* private: 외부 노출 ㄴㄴ, 상속받는 쪽 노출 ㄴㄴ

타입스크립트의 멤버변수와 멤버함수는 기본적으로 public
필요하다면 public 또는 protected로 설정해주자
 */
export {};

class Person {
  protected name: string;

  constructor(name: string) {
    this.name = name;
  }

  sayHello() {
    console.log(`hello, this is ${this.name}`);
  }
}

class Programmer extends Person {
  constructor(name: string) {
    super(name);
  }

  sayHello() {
    super.sayHello();
    this.name; // Person에 있는 protected name을 다음과 같이 사용가능
    console.log(`I am programmer`);
  }
}

class Doctor extends Person {
  constructor(name: string) {
    super(name);
  }

  sayHello() {
    super.sayHello();
    console.log(`I am programmer`);
  }
}
