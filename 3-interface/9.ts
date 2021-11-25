/*
JS에서는 함수도 속성값을 가질 수 있다.
인터페이스로 함수를 정의할 때 함수의 속성값도 같이 정의할 수 있다.
 */

export {};

interface GetText {
  (name: string, age: number): string;
  totalCall?: number;
}

const getText: GetText = function (name, age) {
  if (getText.totalCall !== undefined) {
    getText.totalCall += 1
    console.log(`totalCall: ${getText.totalCall}`)
  }

  return '';
}

getText.totalCall = 0;
getText('', 0);
getText('', 0);
