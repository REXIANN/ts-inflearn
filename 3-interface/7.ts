export {};

// 여기서 number는 string | number에 할당가능하므로 타입에러가 발생하지 않는다.
interface YearPriceMap {
  [year: number]: number;
  [year: string]: string | number;
}

const yearMap: YearPriceMap = {};
yearMap[1998] = 1000;
yearMap[1998] = 'abc';
yearMap['2000'] = 1234;
yearMap['2000'] = 'million';
