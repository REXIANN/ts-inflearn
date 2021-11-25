// 1.
function Counter() {
  this.value = 0;
  this.add = amount => {
    this.value += amount;
  }
}

const counter = new Counter()
console.log(counter.value)
counter.add(5)
console.log(counter.value)

const add = counter.add
add(5)
console.log(counter.value)

// 2.
function Counter2() {
  this.value = 0;
  this.add = function(amount) {
    this.value += amount;
  }
}

const counter2 = new Counter2()
console.log(counter2.value)
counter2.add(5)
console.log(counter2.value)

const add2 = counter2.add
add2(5)
console.log(counter2.value)

// 3.
// 화살표함수가 생성될 당시의 this 는 항상 해당 화살표 함수를 감싸고 있는 일반 함수(최종적으로 전역객체)가 된다.
// add 가 일반함수 라면 0 5 5, 화살표 함수라면 0 0 0
const counter3 = {
  value: 0,
  add: amount => {
    this.value += amount
  }
}

console.log(counter3.value)
counter3.add(5)
console.log(counter3.value)
const add3 = counter3.add
add3(5)
console.log(counter3.value)
