/*
typescript 에서의 this
this의 타입은 함수의 맨 앞에 this라는 이름으로 정의하면 된다.
ts는 맨앞에 this가 선언되면 이것이 this의 타입이라고 인식한다.
이 함수의 매개변수는 두번째부터 시작하게 된다.

 */
export {};

function getParam(this: string, index: number): string {
  const params = this.split(',');
  if (index < 0 || params.length <= index) {
    return ''
  }

  return this.split(',')[index]
}
