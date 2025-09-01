/**
 * Number 클래스 메소드
 * - valueOf()
 * - toLocaleString()
 */
let a = 100;
let b = new Number(100);

console.log(a == b); //true
console.log(a == b.valueOf()); //true

let aa = 1234567;
let bb = new Number(1234567);
console.log(aa.toLocaleString()); //3자리씩 끊어서 출력
console.log(bb.toLocaleString());

let aaa = 123.75;
console.log(aaa.toFixed()); //소수점 첫째 자리에서 사사오입 후 정수 변환
