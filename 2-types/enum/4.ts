/*
enum은 객체로 존재하기 때문에 해당 객체를 런타임에 사용할 수도 있다
 */

export {};

enum Fruit {
  Apple,
  Banana = 5,
  Orange,
}

console.log(Fruit.Banana) // 5
console.log(Fruit["Banana"]) // 5
console.log(Fruit[5]) // Banana
