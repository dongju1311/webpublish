/**
 * 클래스 정의시 필드(전역변수)는 생성자 함수에서 정의!!
 * 접근제어가 필요한 필드는 #을 붙여 필드 영역에 정의해야 함!!
 */
class Person{
    #empno;
    constructor(name,emoji,empno){
        this.name = name;
        this.emoji = emoji;
        this.#empno = '1234';
    }
    display = () => {
        console.log(this.#empno,this.name,this.emoji);
    }
}

let hong = new Person('홍길동','🧑');
hong.display();
console.log(hong.name);
console.log(hong.emoji);

