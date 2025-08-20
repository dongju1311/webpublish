/**
 * 객체형
 * Class: Array([]), Object({})
 * Array 형식 : [데이터1, 데이터2 ...]
 * Object 형식 : {
 *  프로퍼티: 데이터,
 *  프로퍼티: 데이터,
 *  프로퍼티: 데이터,
 * ...
 * }
 */

//Object
let apple = null;
apple = {
    // 'name' : 'apple',
    // 'color' : 'red',
    // 'emoji' : '🍎'
    name : 'apple',
    color : 'red',
    emoji : '🍎'
};
console.log(apple.name);
console.log(apple.color);
console.log(apple.emoji);

//orange 객체 정의 및 생성S
let orange = {
    name  : 'orange',
    color : "coral",
    emoji : '🍊'
};

//Array
let numbers = [1,2,3,4,5];
console.log(numbers[0]);
console.log(numbers[3]);
console.log(numbers);

let fruits = [apple, orange]; //위에 apple과 orange가 선언되어야 가능함
console.log(fruits);
console.log(fruits[0].emoji);
console.log(fruits[1].emoji);
