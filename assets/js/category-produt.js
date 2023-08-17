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
    const categoryName = document.getElementById("categoryName").value;

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
function clearFormField(){
    document.getElementById("categoryName").value = ""
    document.getElementById("productName").value = ""
    document.getElementById("productPrice").value = ""
    document.getElementById("productCategory").value
}

function displayCategoriesandProducts(){
    let content = ""
    categoryList.category.forEach((category) => {
        content += `
        <li>
            <div class=""categoriesList>
                <span><b>categoria:</b>${category.name}</span>
                <div>
                    <button class="editButton">editar</button>
                    <button class="deleteButton">deletar</button>
                </div>
            </div>
            <ul class="productsListByCategory">`
                category.products.forEach((product) => {
                    content +=`
                    <li>
                    <div class="productsList">
                        <span><b>Produto:</b>${product.name} - <b>Preço:</b>R$ ${product.price}</span>
                        <button class="editButton">editar</button>
                        <button class="deleteButton">deletar</button>
                    </div>
                    </li>`
                })`
            </ul>
        </li>
        `
    });

}