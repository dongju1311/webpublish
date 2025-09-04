/**
 * scope(스코프:범위) : 메모리 관리, 이름 충돌 방지, 블록 처리 단위 개념
 * block(블록 : {})
 * { 블록 단위 실행 : 제어문(for, switch~case, while...)}
 */
{
    //전역 변수, Global variable
    //파일 전체 어느곳에서든 호출 가능
    //변수의 초기화는 자동
    let a = 10;
    let b = 20;
    console.log(a,b);

    {   //로컬변수, 지역변수
        let aa = 100;
        let bb = 200;
        console.log(`aa,bb -> `,aa,bb);
        console.log(`a,b -> `,a,b)
    }
    // console.log(`aa,bb ->`,aa,bb);
    // 로컬변수는 해당 스코프에서만 호출 가능
    let numbers = [1,2,3,4,5];
    //for of 사용
    // for(const number of numbers){
    //     console.log(number);
    // }
    //forEach사용
    // numbers.forEach((number)=>console.log(number));
    //일반 for문 사용
    for(let i=0;i<numbers.length;i++){
        console.log(numbers[i]);
    }
}