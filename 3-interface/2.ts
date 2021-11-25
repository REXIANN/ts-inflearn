/*
선택 속성
age: number | undefined 와는 의미가 다름
선택속성이 아닌 | undefined로 적으면 age 값은 무조건 존재해야 하며 값으로 undefined를 가질 수 있다는 의미가 된다
 */

export {};

interface Person {
  name: string;
  age?: number;
}

const p1: Person = { name: 'mike', age: 23}
const p2: Person = { name: 'mike'}
