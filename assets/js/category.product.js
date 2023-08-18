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



// FUNCTIONS CATEGORIAS


function CreateCategory() {
    const categoryName = document.getElementById("categoryNameInput").value;

     categoriesList.addCategory(categoryName);

    console.log(categoriesList.categories);

    DisplayCategories();
    ClearFields();

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

//FUNCTIONS PRODUTOS
function CreateProduct() {
    const productName1 = "Choco";
    const productPrice1 = 0.50;
    const productCategory1 = categoriesList.categories[0];

    const productName2 = "Wine";
    const productPrice2 = 15.00;
    const productCategory2 = categoriesList.categories[1];

    const productName3 = "Chips";
    const productPrice3 = 7.00;
    const productCategory3 = categoriesList.categories[2];


    productList.addProduct(productName1, productPrice1, productCategory1)
    productList.addProduct(productName2, productPrice2, productCategory2)
    productList.addProduct(productName3, productPrice3, productCategory3)

    console.log(productList.products);
}

function FindProduct(id) {
    const product =  productList.getCategoryById(id);

    console.log(product);
}

function DisplayCategories(){
    let content = "";

    categoriesList.categories.forEach((category) => {
        content+= `<li> ${category.name}</li>`
    });
    document.getElementById("categoriesList").innerHTML = content;
}

function ClearFields(){
    document.getElementById("categoryNameInput").value = ""
}