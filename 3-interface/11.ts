/*
인터페이스는 확장가능함
 */
export {};

interface Person {
  name: string;
  age: number;
}

interface Korean extends Person {
  isLiveInSeoul: boolean;
}
