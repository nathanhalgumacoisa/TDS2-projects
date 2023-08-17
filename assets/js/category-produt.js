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
//Class CategoryService
class CategoryService {
    constructor(){
        this.categories = [];
        this.nextCategoryId = 0;
    }
    //addcategory services
    addCategory(name){
        const id = this.nextCategoryId ++;
        const category = new Category(id, name);
        this.categories.push(category)
    }
}
//categoryList for test
const categoryList = new CategoryService();
//creation of the function createCategory for test
function createCategory(){
    const categoryName = "Doce";

    categoryList.addCategory(categoryName)

    console.log(categoryList.categories);
}