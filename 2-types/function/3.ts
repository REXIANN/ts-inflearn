/*
optional parameter를 넣을 수 있따.
선택적 매개변수는 기본 매개변수 뒤에 위치해야한다.
굳이 중간에 위치해야한다면 | undefined를 사용할 수 있으나 변수가 많은 경우
비구조화를 활용해서 named parameter로 적는 것이 좋다.
 */
export {};

function getText(name: string, age: number, language?: string): string {
  const nameText = name.substr(0, 10)
  const ageText = age >= 35 ? 'senior' : 'junior'
  const languageText = language ? language.substr(0, 10) : '';

  return `name: ${nameText}, age: ${ageText}, language: ${languageText}`
}

getText('mike', 23, 'ko')
getText('mike', 23)
getText('mike', 23, 123)
