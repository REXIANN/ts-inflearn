/*
제네릭은 데이터 타입에 다양성을 부여해주기 때문에 자료구조에서 많이 사용된다.
 */

export {};

class Stack<D> {
 private items: D[] = [];

 push(item: D) {
   this.items.push(item);
 }

 pop() {
   return this.items.pop();
 }

}

const numberStack = new Stack<number>();
const stringStack = new Stack<string>();

let myStack: Stack<number>
myStack = numberStack
myStack = stringStack
