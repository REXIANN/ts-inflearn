export {};

const size: number = 123;
const isBig: boolean = size >= 100;
const msg: string = isBig ? '크다' : '작다';

const values: number[] = [1, 2, 3];
const values2: Array<number> = [1, 2, 3];
// values.push('a');

const data: [string, number] = [msg, size]; // tuple
data[0].substr(1);
// data[1].substr(1);

console.log('type of :  123', typeof 123)
console.log('type of : "abc"', typeof 'abc')
console.log('type of : [1, 2, 3]', typeof [1, 2, 3]) // object
// JS에 Array 타입은 없고 object 타입만 있음
