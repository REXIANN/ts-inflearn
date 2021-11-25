/*
인터페이스는 클래스로 구현될 수 있다. 자바와 같은 많은 언어에서 그렇게 사용을 하고 있다.
Person 인터페이스를 implements 키워드를 이용해서 클래스를 만들고 있다.
 */
export {};

interface Person {
  name: string;
  age: number;
  isYoungerThan(age: number): boolean;
}

class SomePerson implements Person {
  // 인터페이스에서 정의한 속성을 여기에 다시한번 정의해주어야 한다
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  isYoungerThan(age: number): boolean {
    return this.age < age;
  }
}
