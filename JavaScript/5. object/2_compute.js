const person = {
    name: '홍길동',
    age: 20,
    job: '개발자'
}

const fruit = {
    name: 'apple',
    emoji: '🍎'
}

// //person 객체를 이용하여 CRUD 작업을 진행하는 함수 정의
// //setObject, getObject, updateObject, deleteObject
// //Arrow function
// //1. person 객체에 프로퍼티값 추가
// const setObject = (obj,key,value) => {
//     obj[key] = value;
// };
// //2. 객체의 프로퍼티 값 반환
// const getObject = (obj,key) => {
//     return obj[key];
// };
// //3. 객체의 프로퍼티 값 수정
// const updateObject = (obj,key,newValue) => {
//     obj[key] = newValue;
// };
// //4. 객체의 프로퍼티 삭제
// const deleteObject = (obj,key) => {
//     delete obj[key];
// };

import { setObject, getObject, updateObject, deleteObject } from "../commons/util.js";

setObject(person,'address','강남구');
let job = getObject(person,'job');
updateObject(person,'age',32);
deleteObject(person, 'name');
console.log(person);


setObject(fruit,'color','red');
let e = getObject(fruit,'emoji');
updateObject(fruit,'color','green');
deleteObject(fruit, 'emoji');
console.log(fruit, e);
