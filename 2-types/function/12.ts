/*
named parameter의 정보를 다른데서 사용하고 싶다면 인터페이스로 정의해놓고 사용하면 된다.
 */
export {};

interface Param {
  name: string;
  age?: number;
  language?: string;
}

function getText({
  name,
  age = 15,
  language,
 }: Param): string {
  const nameText = name.substr(0, 10)
  const ageText = age >= 35 ? 'senior' : 'junior'
  return `name: ${nameText}, age: ${ageText}, language: ${language}`
}

getText({ name: 'aaa', age: 11, language: 'ko'})
getText({ name: 'aaa'})
