const fs =require('fs');
const path = require('path');
const p = path.join(path.dirname(require.main.filename),'data', 'products.json');

module.exports = class Product{

    constructor(t){
        this.message = t;
    }

    saveProduct(){  
        fs.readFile(p, (err, content)=>{
            let products = [];
            if(!err){
                products = JSON.parse(content);
            }
            products.push(this);
            fs.writeFile(p, JSON.stringify(products) , (err)=>{
                console.log(err);
            });

        });
        
    }

    static fetchAllProducts(callBack){     
        fs.readFile(p , (err,content)=>{
            if(!err){
                callBack(JSON.parse(content));
            }
            else{
               callBack([]);
            }
        });
    }
}