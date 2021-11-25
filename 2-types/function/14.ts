/*
ts는 named parameter로 변환해주는 리팩터링 기능을 제공한.
IDE에 뜨는 리팩터링 버튼을 누르면 생성됨
 */
function getText({
  name,
  age = 15,
  language,
}: {
  name: string,
  age?: number,
  language?: string
}): string {
  const nameText = name.substr(0, 10)
  const ageText = age >= 35 ? 'senior' : 'junior'
  return `name: ${nameText}, age: ${ageText}, language: ${language}`
}
