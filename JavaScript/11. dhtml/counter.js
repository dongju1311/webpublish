//숫자 증가/감소 함수 생성
function counter(event) {
    let number = document.querySelector("#number").textContent;
    if(event === 'increment'){
        if(number >= 0){
            document.querySelector("#number").textContent = ++number;
        }
    } else if(event === 'decrement'){
        if(number > 0){
            document.querySelector("#number").textContent = --number;
        }
    }
}


// //증가
// function increment() {
//     // alert('increment');
//     let number = document.querySelector("#number").textContent; //form -> input
//     //0보다 크면 1증가
//     if(number >= 0){
//         document.querySelector("#number").textContent = ++number;
//     }
// }
// //감소
// function decrement() {
//     // alert('decrement');
//     let number = document.querySelector("#number").textContent;
//     if(number > 0){
//         document.querySelector("#number").textContent = --number;
//     }
// }