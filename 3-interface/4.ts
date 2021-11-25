export {};

interface Person {
  readonly name: string;
  age?: number;
}

const p1: Person = { name: 'mike', birthday: '1997-01-01' }

const p2 = {
  name: 'mike',
  birthday: '1997-01-01'
}

// p3의 타입이 p2의 타입을 포함하는 더 큰 타입이 된다.
const p3: Person = p2
