/*
이름이 다르나 내부 구조가 같으면 오케이
 */
export {};

interface Person {
  name: string;
  age: number;
}

interface Product {
  name: string;
  age: number;
}

const person: Person = { name: 'mikee', age: 23 };
const product: Product = person;
