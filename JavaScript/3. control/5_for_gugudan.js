/**
 * 구구단 출력 : 2~9단
 */

for(let i=1;i<10;i++){ //행
    let rows = '';
    for(let j=2;j<10;j++){ //열
        rows += `${j}*${i}=${i*j}\t`
    }
    console.log(rows); 
}

/**
 * 
 **
 ***
 ****
 *****
 * 5행까지의 별찍기
 */
 for(let i=1;i<6;i++){ //행
    let rows = '';
    for(let j=1;j<=i;j++){ //열
        rows += `*`;
    }
    console.log(rows); 
 }
 /**
  * 5행까지 초록사과 찍기, 3행 줄만 빨간사과 출력
  */
  for(let i=1;i<6;i++){ //행
    let rows = '';
    for(let j=1;j<=i;j++){ //열
        if(i===3){
            rows += `🍎`;
        } else {
            rows += `🍏`;
        }
    }
    console.log(rows); 
 }