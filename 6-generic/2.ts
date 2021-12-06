/*
숫자열과 문자열만 필요하다면 다음과같이 함수 오버로드를 사용할 수 있다
 */
export {};

function makeNumberArray(defaultValue: number, size: number): number[];
function makeStringArray(defaultValue: string, size: number): string[];
function makeArray(
  defaultValue: number | string,
  size: number
): Array<number | string> {
  const arr: Array<number | string> = [];
  for (let i = 0; i < size; i++) {
    arr.push(defaultValue)
  }

  return arr
}

const arr1 = makeArray(1, 10)
const arr2 = makeArray('empty', 10)
