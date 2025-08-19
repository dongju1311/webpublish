/**
 * if, if ~ else, if ~ else if ... ~ else
 * 삼항연산자 : (조건문) ? true인경우 실행문 : false인경우 실행문;
 */
//입력되는 과일명이 apple인 경우에만 이모지 출력
//apple 이외의 과일은 이름 출력
let fruit = 'apple';
if(fruit === 'apple') {
    console.log('🍎');
} else {
    console.log(fruit);
}
//위의 if문을 삼항연산자로 변환
let result = undefined;
(fruit === 'apple') ? result = '🍎' : result = fruit;
console.log(`result => ${result}`);

//선택한 메뉴를 출력
let menus = ['pizza', 'hotdog', 'coffee']
let selectMenu = 'coffee';
if(selectMenu[0] === menus[0]) {
    console.log('🍕');
} else if(selectMenu === menus[1]) {
    console.log('🌭');
} else if(selectMenu === menus[2]) {
    console.log('☕');    
} else {
    console.log('메뉴 준비중 ~');
}

//입력받은 숫자가 홀수이면 사과 이모지, 짝수이면 포도 이미지를 출력
let inNumber = 101;
let fresult = undefined;
if(!(inNumber %2 === 1)) {
    fresult = '🍎';
} else {
    fresult = '🍇';
}
console.log(`결과--> ${fresult}`);
//나온결과값이 1일경우는 ture이고 0일 경우 false로 출력
(inNumber % 2) ? fresult = '🍎': fresult = '🍇';
console.log(inNumber % 2, `결과--> ${fresult}`);
!(inNumber % 2) ? fresult = '🍎': fresult = '🍇';
console.log(inNumber % 2, `결과--> ${fresult}`);