export {};

function f1(): void {
  console.log('hello')
}

function f2(): never {
  throw new Error('some error');
}

function f3(): never {
  while (true) {}
}

// 항상 예외가 발생해서 비정상적으로 종료되거나 무한루프로인해 종료되지 않는 함수의 반환타입은 never
