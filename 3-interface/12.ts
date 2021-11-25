/*
여러 개의 interface를 확장할 수도 있다.
 */
export {};

interface Person {
  name: string;
  age: number;
}

interface Programmer {
  favoriteProgrammingLanguage: string;
}

interface Korean extends Person, Programmer {
  isLiveInSeoul: boolean;
}
