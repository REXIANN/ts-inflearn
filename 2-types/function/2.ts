/*
 함수를 저장할 변수의 타입은 화살표 '기호'를 사용하여 나타낼 수 있다.
 이때 함수를 구현하는 코드에서는 따로 타입을 적지 않아도 된다.
 */
export {};

const getText: (name: string, age: number) => string = function (name, age) {
  return ''
}
