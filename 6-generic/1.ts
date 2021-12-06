/*
제네릭: 타입 정보가 동적으로 결정되는 타
제네릭을 통해 간ㅌ은 규칙을 여러 타입에 적용할 수 있기 떄문에 타입작성시 중복코드를 줄일 수 있다
 */
export {};

function makeNumberArray(defaultValue: number, size: number): number[] {
  const arr: number[] = [];
  for (let i = 0; i < size; i++) {
    arr.push(defaultValue)
  }

  return arr
}

function makeStringrArray(defaultValue: string, size: number): string[] {
  const arr: string[] = [];
  for (let i = 0; i < size; i++) {
    arr.push(defaultValue)
  }

  return arr
}

const arr1 = makeNumberArray(1, 10)
const arr2 = makeStringrArray('empty', 10)
