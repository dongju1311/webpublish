/**
 * 함수 호출 --> 파라미터 --> 함수의 매개변수에 매핑
 * Rest Parameter(나머지 파라미터) : 여러 개의 파라미터를 전송시 사용
 * Spread operator(스프레드 연산자 : ...)
 */

console.log(add(1,2));
console.log(add(1,2,4,6,5,3,8));
console.log(add(1,2,5,4,9,9,8,6,4,2,3));
function add(... numbers) {
    //합계를 구하는 로직
    // let sum = 0; 
    // for(let i=0;i<numbers.length;i++){
    //     sum += numbers[i];
    // }
    //콜백 함수
    let sum = numbers.reduce((acc,cur) => acc + cur);
    // 리턴이 하나일 경우에는 생략가능!!
    // let sum = numbers.reduce((acc,cur) => {return acc + cur});
    return sum;
}

console.log(add2(1,2,3));
console.log(add2(1,2,4,6,5,3,8));
console.log(add2(1,2,5,4,9,9,8,6,4,2,3));

function add2(a,b, ... numbers) {
    let sum = a + b + numbers.reduce((acc,cur) => acc + cur);
    return sum;
}