/**
 * destructure : 구조 분해 할당
 * - 객체의 구조를 분해하여 대입하는 변수에 자동으로 할당 
 */
//1. 배열객체
let numbers = [1,2,3,4,5];
let aa = numbers;
let bb = numbers[2];
let [a, b, ...nlist] = numbers; //구조분해 할당

console.log(`aa = ${aa}`);
console.log(`bb = ${bb}`);
console.log(`a = ${a}`);
console.log(`b = ${b}`);
console.log(`nlist = `, nlist);
//2. 오브젝트 리터럴
let hong = {
    name: '홍길동',
    age: 20,
    job: '개발자'
};
// let name = hong.name;
// let age = hong.age;
// let job = hong.job;
let {name,age,job} = hong; //구조분해 할당

console.log(`name = ${name}`);
console.log(`age = ${age}`);
console.log(`job = ${job}`);

//오브젝트 리터럴을 반환하는 함수
function createObject() {
    return {
        aname: 'apple',
        emoji: '🍎',
        color: 'red'
    };
}

let {aname,emoji,color,price=100} = createObject();
console.log(aname,emoji,color);
