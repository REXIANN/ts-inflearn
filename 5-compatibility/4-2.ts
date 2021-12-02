export {};

interface Person {
  name: string;
}

interface Product {
  name: string;
  age: number;
}

const obj = { name: 'mikee', age: '23', city: 'abc' };

let person: Person = obj; // obj에 name이 있고 person의 name이 obj의 name 타입과 일치
let product: Product = obj;

product = person
person = product
