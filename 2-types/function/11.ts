/*
함수 오버로드를 사용하면 조건을 만족할 수 있다
 */

export {};

// 아래의 두개는 타입정의 이다. 컴파일시에는 날아감.
function add(x: number, y: number): number;
function add(x: string, y: string): string;

function add(x: number | string, y: number | string): number | string {
  if (typeof x === 'number' && typeof y === 'number') {
    return x + y
  } else {
    const result = Number(x) + Number(y)
    return result.toString();
  }
}

const v1: number = add(1, 2)
console.log(add(1, '2'))
