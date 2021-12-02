/*
js에서는 속성 이름에 숫자와 문자열을 사용할 수 있다.
그리고 속성 이름에 숫자를 사용하면 내부적으로 문자열로 변환해서 사용한다.
따라서 ts에서는 숫자인 속성 이름의 값이 문자열인 속성 이름의 값으로 할당가능한지 검사를 한다.
 */
export {};

// 이 숫자의 값 A 는 B 로 할당가능해야 한다.
interface YearPriceMap {
  [year: number]: A;
  [year: string]: B;
}