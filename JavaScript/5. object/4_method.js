/**
 * 객체를 생성하는 함수 : 생성자 함수
 * 일반함수를 정의하는 형식ㅇ로 사용해야 함!!!
 */
const fruits = {
    //field
    name: 'apple',
    emoji: '🍎',
    //method
    getName: function() {return this.name},
    getEmoji: function() {return this.emoji},
    display: function() {
        console.log(this.name,this.emoji);
    }
}
console.log(fruits);
console.log(fruits.display);
fruits.display(); //()를 넣지 않을 경우 주소값만 콘솔에 찍음
console.log(fruits.getName());
console.log(fruits.getEmoji);

//생성자 함수
function Apple(name,emoji ) {
    this.name = name;
    this.emoji = emoji;

    this.display = () => {
        console.log(this.name,this.emoji);
    }
}

let redApple = new Apple('사과', '🍎');
console.log(redApple);
redApple.display();