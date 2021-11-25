/*
& 기호는 교차타입(이전에 한번 설명함)
교차타입을 인터페이스에 사용하면 여러개의 인터페이스를 하나로 합칠 수 있다.
교차 타입은 집합에서의 교집합과 같은 기능을 한다.
PP의 타입이 name 속성만 포함하는게 아니라서 헷갈릴 수도 있다.
이는 속성의 교집합이 아니라 타입이 가질 수 있는 값의 집합에 대한 교집합이기 때문이다.
값의 집합에 대해서는 나중에 타입 호환성 부분에서 다시 설명할 예정
 */

export {};

interface Person {
  name: string;
  age: number;
}

interface Product {
  name: string;
  price: number;
}

type PP = Person & Product;
const pp: PP = {
  name: 'a',
  age: 23,
  price: 1000,
}
