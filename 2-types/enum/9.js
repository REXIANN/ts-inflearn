"use strict";
/*
enum을 사용하면 컴파일 이후에도 enum객체가 남아있기 때문에 번들 파일의 크기가 불필요하게 커질 수 있다.
enum객체에 접근하지 않는다면 굳이 번들파일에 남겨놓을 필요가 없다.
이런 경우 const enum을 사용해서 컴파일결과에 enum의 객체를 남겨놓지 않을 수 있다.

다만 이 경우 앞에서 작성한 유틸리티 함수 getIsValidEnumValue는 사용할 수 없다.
해당 enum 객체는 남아있지 않기 때문이다.
 */

exports.__esModule = true;
var fruit = 0 /* Apple */;
var lang = "ko" /* Korean */;
