/*
객체의 타입 정의
 */

export {};

interface Person {
  name: string;
  age: number;
}

const p1: Person = { name: 'mike', age: 23}
const p2: Person = { name: 'mike', age: 'ten'}
