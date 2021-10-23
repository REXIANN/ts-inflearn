export {};

// undefined 와 null 도 타입지정이 가능함
let v1: undefined = undefined;
let v2: null = null;

let v3: number | undefined = undefined;
v3 = 3;

console.log(typeof undefined) // undefined
console.log(typeof null) // object
