class Login {
    #id;
    #pwd;
    constructor(id,pwd) {
        this.#id = id;
        this.#pwd = pwd;
    }
    getId = () => this.#id;
    getPwd = () => this.#pwd;

    setId = (id) => this.#id = id;
    setPwd = (pwd) => this.#pwd = pwd;

    display = () => console.log(this.getId,this.getPwd);        
}

function signupCheck() {
    console.log('로그인완료!');
    
}