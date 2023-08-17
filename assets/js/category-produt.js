//creation of the class Category
class Category {
    constructor(id, name){
        this.id = id
        this.name = name
        //array products
        this.products = []
    }
}
//product class
class product {
    constructor(id, name, price, category){
        this.id = id;
        this.name = name;
        this.price = price
        this.category = category
    }
}