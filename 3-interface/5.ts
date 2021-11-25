/*
인덱스 타입 - 속성이름을 구체적으로 정의하지 않고 값의 타입만을 정의함
age의 타입은 인덱스타입에 포함되지 않고 명시적으로 표시된 number를 따른다
 */
export {};

interface Person {
  readonly name: string;
  age: number;
  [key: string]: string | number;
}

const p1: Person = {
  name: 'mike',
  birthday: '1997-01-01',
  age: '25',
}
