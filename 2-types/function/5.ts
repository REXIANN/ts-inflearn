/*
rest 파라미터의 경우 항상 타입을 배열로 정의해야 한다.
타입은 number[] 또는 Array<number> 로 쓰면 된다.
 */
export {};

function getText(name: string, ...rest: Array<number>): string {
  return ''
}

console.log(getText('mike', 1, 2, 3))
