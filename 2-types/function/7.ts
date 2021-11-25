/*
js에서 내장된 기능을 넣고 싶을때는 prototype을 이용해서 주입을 할 수 있다.
String이라는 내장 타입에 속성을 추가하고 싶을 때에는 인터페이스를 이용하는 방법이 있다.
 */
function getParam(this: string, index: number): string {
  const params = this.split(',');
  if (index < 0 || params.length <= index) {
    return ''
  }

  return this.split(',')[index]
}

interface String {
  getParam(this: string, index: number): string;
}

String.prototype.getParam = getParam;
console.log('asdf, 1234, ok'.getParam(1))
