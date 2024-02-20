

class ProductManager{
    static #ultimoIdEvento = 1
    
    constructor(){
        this.products = [];
    }   
    
    
    #getNuevoId() {
        const id = ProductManager.#ultimoIdEvento
        ProductManager.#ultimoIdEvento++
        return id
    }
    
    #codeVerificationOk(codeToVerify) {
        let codeOK = true;
        this.products.forEach(product => {
            if (product.code === codeToVerify) {
                codeOK = false;
            }
        });
        return codeOK; 
    }
    

    addProduct(title, description, price,thumbnail,code,stock ){
                
        const product = {
            id: this.#getNuevoId(),
            title: title ?? throwError("title es nulo"),
            description: description ?? throwError("description es nulo"),
            price: price ?? throwError("price"),
            thumbnail: thumbnail ?? throwError("thumbnail es nulo"),
            code: code ?? throwError("code es nulo"),
            stock: stock ?? throwError("stock es nulo")
        };
        if(this.#codeVerificationOk(code)){
            this.products.push(product);
        }
        else{throwError("codigo repetido")}
        
    }

    getProducts(){
        this.products.forEach(product => { console.log(product)
        return this.products;    
        });


    }

    getProductById(idBuscado) {
        for (const product of this.products) {
            if (product.id === idBuscado) {
                console.log("Found:", product);
                return product; 
            }
        }
    
        console.log("Not found");
        return null;  
    }


}


//TEST 
const instancia = new ProductManager();
instancia.addProduct("Mi_prodcuto","Descripción", 20.99, "imagen.jpg", "ABC123", 50);
instancia.addProduct("Mi_prodcuto2","Descripción2", 20.992, "imagen2.jpg", "ABC1232", 50);
instancia.addProduct("Mi_prodcuto2","Descripción2", 20.992, "imagen2.jpg", "ABC1233", 50);
instancia.getProducts();
instancia.getProductById(4)
