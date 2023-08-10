/*let personSimple = "John Doe"

const personObject = new Object();
personObject.firstName = "John"
personObject.lastName = "Doe"
personObject.age = 50;
personObject.eyeColor = "blue"

console.log(personSimple);
console.log(personObject);

let personSimple = "John Doe";

const personObject = {
    firtName: "John",
    lastName:"Doe",
    age:50,
    eyeColor:"blue"
}

personObject.age = 10;

class User {
    constructor(name, age){
        this.name = name
        this.age = age
    }

    introduce() {
        console.log(`Olá, meu nome é ${this.name} e tenho ${this.age} anos.`)
    }
}

const user1 = new User('João', 33);
user1.introduce()




class Pizza {
    constructor(base, sauce, toppings, cheese) {
        this.base = base;
        this.sauce = sauce;
        this.toppings = toppings;
        this.cheese = cheese
    }
    getDescription (){
        return `A delicious pizza with ${this.base} base, ${this.sauce} sauce, ${this.toppings} topping,
         and lots of cheese.`
    }
    getTimerBase(){
        if(this.base == 'traditional'){
            return 10;
        }else if(this.base == 'integral'){
            return 15
        }else{
            return 'this base does not exist'
        }
    }
    getTimerSauce(){
        if(this.sauce == 'tomato'){
            return 5;
        }else if(this.sauce == 'pesto'){
            return 7
        }else{
            return 'this sauce does not exist'
        }
    }
    getTimerToppings(){
        if(this.toppings == 'pepperoni'){
            return 10;
        }else if(this.toppings == 'bacon'){
            return 15;
        }else if(this.toppings == 'sausage'){
            return 16;
        }else{
            return 'this Topping does not exist'
        }
    }
    getTimerCheese(){
        if(this.cheese == 'gorgonzola'){
            return 5;
        }else if(this.cheese == 'muzzarela'){
            return 3;
        }else{
            return 'this base does not exist'
        }
    }
     
}

const myPizza = new Pizza('integral', 'tomato', 'pepperoni', 'muzzarela'  )
console.log(myPizza.getDescription())
let getTimerTotal =  myPizza.getTimerBase() + myPizza.getTimerSauce() + myPizza.getTimerToppings() + myPizza.getTimerCheese() 
console.log(`Time to cook the pizza =  ${getTimerTotal}`)



class Calculator {
    add(a, b) {
        return a + b;
    }
    multiply(a, b){
        return a * b;
    }

    substract(a, b){
        return a - b
    }
}

const calculator = new Calculator();

const sumResult = calculator.add(5, 3);
console.log("sum:", sumResult);

const multiplicationResult = calculator.multiply(4, 2);
console.log("multiplication:", multiplicationResult);

const substractionResult = calculator.substract(10, 4);
console.log("substraction", substractionResult);*/

class Witch{
    constructor(name, patron, house, colorEyes){
        this.name = name;
        this.patron = patron;
        this.house = house;
        this.colorEyes = colorEyes;
    }

    getName(){
        return `O nome do bruxo(a) é: ${this.name}`;
    }
    getHouse(){
        return `Ela(a) está na casa: ${this.house}`;
    }
    getPatron(){
        return `Seu patrono é: ${this.patron}`
    }
}

const Witch1 = new Witch('Harry Potter', 'Cervo', 'Grifinória', 'Verde/Azul')
console.log(Witch1.getName())
console.log(Witch1.getHouse())
console.log(Witch1.getPatron())

class TypeWitch extends Witch {
    constructor(name, patron, house, colorEyes, TypeWitch) {
        super(name, patron, house, colorEyes);
        this.TypeWitch = TypeWitch;
    }
    getTypeWitch() {
        if(this.TypeWitch === 'P'){
            return "Este bruxo é sangue puro";
        }else if(this.TypeWitch === 'M'){
            return "Este bruxo é mestiço";
        }else{
            return "Este é um trouxa";
        }
    }
}

const Harry = new TypeWitch('Harry Potter', 'Cervo', 'Grifinória', 'Verde/Azul', 'M');
console.log(Harry.getTypeWitch())