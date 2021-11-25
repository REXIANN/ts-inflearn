/*
enum 객체에 특정한 값이 있는지 검사하는 함수
 */
export {};

function getIsValidEnumValue(enumObj: any, value: number | string) {
  return Object.keys(enumObj)
    .filter(key => isNaN(Number(key))) // 양방향 매핑을 제거하기 위한 필터
    .some(key => enumObj[key] === value )
}
