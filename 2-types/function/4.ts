/*
language는 타입을 따로 지정하지 않았지만 기본값을 주었으므로 기본값의 타입을 묵시적으로 따른다.
 */
export {};

function getText(name: string, age: number = 15, language = 'korean'): string  {
  return ''
}

console.log(getText('mike'))
console.log(getText('mike', 23))
console.log(getText('mike', 23, 'english'))
