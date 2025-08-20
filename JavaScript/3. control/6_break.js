/**
 * 반복문 종료 방법
 - break : 반복문을 강제 종료
 - 조건식이 false가 되는방법을 찾아 자연스럽게 종료
 */

 //1~10까지 출력하는 반복문
 //3이 되면 종료
 for(let i=1;i<=10;i++){
     if(i===4){
        break;
     } else {
         console.log(`i = ${i}`);
     }
 }
console.log();

 //break 사용하지 않고 종료하는 방법
  for(let i=1;i<=10;i++){
     if(i===4){
        i = 100;  //조건이 false 값을 i에 입력하여 종료
     } else {
         console.log(`i = ${i}`);
     }
 }