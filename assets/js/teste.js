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
user1.introduce()*/
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
