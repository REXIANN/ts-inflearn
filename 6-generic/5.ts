/*
제네릭의 타입 종류를 제한할 수 있다.
예를 들어, 리액트의 속성값 전체는 객체 타입만 허용된다.
 */
export {};

function identity<T extends number | string>(p1: T): T {
  return p1;
}

identity(1);
identity('a');
identity([]);
