/*
enum에 문자열을 할당했다면 단방향으로 매핑이된다.
*/
var Language;
(function (Language) {
    Language["Korean"] = "ko";
    Language["English"] = "en";
    Language["Japanese"] = "jp";
})(Language || (Language = {}));
