class Teste{
    constructor(a, b, type){
        this.a = a;
        this.b = b;
        this.type = type;
    }
    calc(){
        switch (this.type) {
            case "+":
                    return this.a + this.b;
                break;
            case "*":
                return this.a * this.b;
                break;
            case "/":
                return this.a / this.b
                break;        
            default:
                break;
        }
    }
}

const soma = new Teste(5,5,"+")
const multi = new Teste(5,5, "*")
const divid = new Teste(5,5, "/")
console.log(`Result ${soma.calc()}`);
console.log(`Result ${multi.calc()}`);
console.log(`Result ${divid.calc()}`)