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
console.log("substraction", substractionResult);

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

class CamaraSecreta {
    constructor(name, pwd){
        this.name =name;
        let _pwd = pwd;
        this.verifyPwd = (pwdInput) => {
            return pwdInput == _pwd;
        }
        this.acessToChamber = () => {
            let pwdInput = prompt("digite a senha")
            if (this.verifyPwd(pwdInput)){
                console.log(`Bem-vindo a Camara Secreta`)
            }else{
                console.log("acesso negado troxa!")
            }
        }        
    }
    showName(){
        console.log(`Nome do bruxo: ${this.name}`);
    }
    const myAcess1 = new CamaraSecreta(`Harry Potter` `senha123`);
    myAcess1.name = 'HP';

    myAcess1.pwd ='123';
}


const campanies = ["Apple","Google", "Facebook" ]
companies.forEach(company => {
    console.log(`hey ${company}!`);
});


const names = ["Whinds", "Freeway", "Teste", "Maria" ];
names.forEach((name) => {
    console.log(`hi, ${name}!`);
});


const numbers = [1, 2, 3, 4, 5, 6, 7, 8,9, 10];
console.log(numbers)
//forEach
numbers.forEach((number) => {
    if(number % 2 == 0){
        console.log(number)
    }
});


const cars = [
    {
        marca: "Ford",
        modelo: "Focus",
    },
    {
        marca: "BMW",
        modelo: "BMW Z4",
    },
    {
        marca: "Fiat",
        modelo: "Palio",
    },
    {
        marca: "Audi",
        modelo: "A3",
    },
];
cars.forEach((car) => {
    console.log(`Marca: ${car.marca}, Modelo: ${car.modelo}`);
});
*/

class Car{
    constructor(brand, model){
        this.brand = brand
        this.model = model
    }
   }
   
   

function carShop(){
    let brand = document.getElementById("brand").value;
    let model = document.getElementById("model").value;
    const newCar= new Car(brand, model)
    cars.push(newCar);
    console.log(cars)
}