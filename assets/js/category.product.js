// Cada categoria possui vários produtos
// Cada produto é pertencente a uma categoria

class Category {
    constructor(id, name){
        this.name = name;
        this.id = id;
        this.products = [];
    }
}

class Product{
    constructor(id, name, price, category){
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;

    }
}

class CategoryService{
    constructor(){
        this.categories = [];
        this.nextCategoryId = 1;
    }

    addCategory(name){
        const id = this.nextCategoryId;
        this.nextCategoryId++;

        const category = new Category(id, name);
        this.categories.push(category);
    }
}

class ProductService{
    constructor(){
        this.products =  [];
        this.nextProductId = 1;
    }

    addProduct(name, price, category){
        const id = this.nextProductId;
        this.nextProductId++

        const product = new Product(id, name, price, category);
        this.products.push(product);
        category.products.push(product);
    }
}

const categoriesList = new CategoryService;
const productList = new ProductService;

function CreateCategory() {
    const categoryName = "Candies";

    categoriesList.addCategory(categoryName);

    console.log(categoriesList.categories);

}

function CreateProduct() {
    const productName = "Choco";
    const productPrice = 0.50;
    const productCategory = categoriesList.categories[0];

    productList.addProduct(productName, productPrice, productCategory)

    console.log(productList.products);
}






