const Product = require('../model/product');

exports.getAddProductPage =(req,res,next)=>{
    res.render('add-product',{
    pageTitle:'Add Product', 
    path: '/admin/add-product', 
    formCSS:true,
    productCSS:true,
    activeAddProduct:true});
};

exports.getProductDataFromPage = (req, res,next)=>{
    const product = new Product(req.body.message);
    product.saveProduct();
    res.redirect('/');
};

exports.getAllProducts = (req,res,next)=>{
    Product.fetchAllProducts((prod)=>{
        res.render('shop',{
            prod : prod, 
            pageTitle:'Shop', 
            path: '/', 
            hasProduct: prod.length>0,
            activeShop:true,
            productCSS:true
        });
    });
    
};