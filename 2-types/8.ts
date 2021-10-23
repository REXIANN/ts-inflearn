export {};

// type 키워드를 이용해 타입에 별칭 주기
type Width = number | string
let width: Width;
width = 100;
width = '123';
