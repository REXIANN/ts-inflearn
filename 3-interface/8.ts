/*
인터페이스로 함수 타입을 정의할 수도 있다.
 */

export {};

interface GetText {
  (name: string, age: number): string;
}

// type GetText = (name: string, age: number) => string;

const getText: GetText = function(name, age) {
  const nameText = name.substr(0, 10)
  const ageText = age >= 35 ? 'senior' : 'junior'
  return `name: ${nameText}, age: ${ageText}`;
}
