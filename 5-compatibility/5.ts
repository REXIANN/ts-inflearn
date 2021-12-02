export {};

interface Person {
  name: string;
  age?: number;
}

interface Product {
  name: string;
  age: number;
}

const obj = { name: 'mikee' };

const person: Person = obj;
const product: Product = obj;
