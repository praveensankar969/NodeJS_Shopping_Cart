const Product = require('../model/product');

exports.getAddProductPage =(req,res,next)=>{
    res.render('admin/add-product',{
    pageTitle:'Add Product', 
    path: '/admin/add-product', 
    formCSS:true,
    productCSS:true,
    activeAddProduct:true});
};



exports.getProductDataFromPage = (req, res,next)=>{
    const title = req.body.title;
    const price = req.body.price;
    const url = req.body.imageUrl;
    const description = req.body.description; 
    const product = new Product(title, url, price, description);
    product.saveProduct();
    res.redirect('/');
};


exports.getProductsDetails = (req, res,next)=>{
    const id = req.params.productId;
    console.log(id);
    res.redirect('/');
};


exports.getAllProducts = (req,res,next)=>{
    Product.fetchAllProducts((prod)=>{
        res.render('admin/products',{
            prod : prod, 
            pageTitle:'Admin Product', 
            path: '/admin/products', 
            hasProduct: prod.length>0,
            activeShop:true,
            productCSS:true
        });
    });
    
};
