/* Cada categoria possui vários produtos
 Cada produto é pertencente a uma categoria */

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

// CRUD => Create
    addCategory(name){
        const id = this.nextCategoryId;
        this.nextCategoryId++;

        const category = new Category(id, name);
        this.categories.push(category);
    }
// R => Read
    getCategoryById(id){
        return this.categories.find((category) => category.id == id)
    }
// U => Update
    updateCategory(id, name){
        const category = this.getCategoryById(id);
        category.name = name;
    }
// D => Delete
    deleteCategory(id){
        const category = this.getCategoryById(id);
        const index = this.categories.indexOf(category);

        this.categories.splice(index, 1 )
    }
}





class ProductService{
    constructor(){
        this.products = [];
        this.nextProductId = 1;
    }
// C create
    addProduct(name, price, category){
        const id = this.nextProductId;
        this.nextProductId++

        const product = new Product(id, name, price, category);
        this.products.push(product);
        category.products.push(product);
    }
// R => Read
    getCategoryById(id){
        return this.products.find((product) => product.id == id)
    }
// U => Update
    updateCategory(id, name){
        const category = this.getCategoryById(id);
        category.name = name;
    }
// D => Delete
    deleteCategory(id){
        const category = this.getCategoryById(id);
        const index = this.categories.indexOf(category);

        this.categories.splice(index, 1 )
    }
}

const categoriesList = new CategoryService;
const productList = new ProductService;



// FUNCTIONS


function CreateCategory() {
    const categoryName = "Candies";
    const categoryName1 = "Drinks";
    const categoryName2 = "Snacks";

    categoriesList.addCategory(categoryName);
    categoriesList.addCategory(categoryName1);
    categoriesList.addCategory(categoryName2);

    console.log(categoriesList.categories);

}

function CreateProduct() {
    const productName = "Choco";
    const productPrice = 0.50;
    const productCategory = categoriesList.categories[0];

    productList.addProduct(productName, productPrice, productCategory)

    console.log(productList.products);
}

function FindCategory(id) {
    const category =  categoriesList.getCategoryById(id);

    console.log(category);
}

function EditCategory(id, name){
    categoriesList.updateCategory(id, name)

    console.log(categoriesList.categories);
}

function deleteCategory(id){
    categoriesList.deleteCategory(id)

    console.log(categoriesList.categories);
}

