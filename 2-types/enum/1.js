"use strict";
exports.__esModule = true;
var Fruit;
(function (Fruit) {
    Fruit[Fruit["Apple"] = 0] = "Apple";
    Fruit[Fruit["Banana"] = 1] = "Banana";
    Fruit[Fruit["Orange"] = 2] = "Orange";
})(Fruit || (Fruit = {}));
/*
enum의 값은 타입도 될 수 있고 값도 될 수 있다.
값을 넣지 않으면 첫번째 인자의 값은 0 이 되며 다음 값을 넣지 않으면 이전값 + 1 이 된다.
 */
var v1 = Fruit.Apple;
var v2 = Fruit.Banana;
