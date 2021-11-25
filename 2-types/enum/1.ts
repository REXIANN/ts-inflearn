export {};

enum Fruit {
  Apple,
  Banana,
  Orange,
}
/*
enum의 값은 타입도 될 수 있고 값도 될 수 있다.
값을 넣지 않으면 첫번째 인자의 값은 0 이 되며 다음 값을 넣지 않으면 이전값 + 1 이 된다.
enum의 각 원소는 이름과 값이 양방향으로 매핑된다.
 */

const v1: Fruit = Fruit.Apple;
const v2: Fruit.Apple | Fruit.Banana = Fruit.Banana;
