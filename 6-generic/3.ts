export {};

function makeArray<T>(
  defaultValue: T,
  size: number
): T[] {
  const arr: Array<T> = [];
  for (let i = 0; i < size; i++) {
    arr.push(defaultValue)
  }

  return arr
}

// 여기서 사실 <>안에 타입을 넣지 않아도 된다.
const arr1 = makeArray<number>(1, 10)
const arr2 = makeArray<string>('empty', 10)
const arr3 = makeArray(true, 10)
// 제네릭에 명시적으로 값을 입력해주는 것 또한 가능
const arr4 = makeArray<number | string>(true, 10)
