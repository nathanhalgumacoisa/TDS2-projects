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
class Product {
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
//class ProductService
class ProductsService{
    constructor(){
        this.products = [];
        this.nextProductId = 0;
    }
    //addProduct
    addProduct(name, price, category){
        const id = this.nextProductId++
        const product = new Product(id, name, price, category);
        category.products.push(product);
        this.products.push(product);
    }
}
//categoryList for test
const categoryList = new CategoryService();
const productList = new ProductsService();
//creation of the function createCategory for test
function createCategory(){
    const categoryName = "Doce";

    categoryList.addCategory(categoryName)
//console.log
    console.log(categoryList.categories);
}

function createProduct(){
    const productName = "Bolo"
    const productPrice = 20
    const productCategory = categoryList.categories[0]
    productList.addProduct(productName, productPrice, productCategory)

    console.log(productList.products)
}