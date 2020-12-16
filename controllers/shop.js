const Product = require('../model/product');

exports.getCartPage =(req,res,next)=>{
    res.render('shop/cart',{
    pageTitle:'Cart', 
    path: '/cart'});
};


exports.checkOut =(req,res,next)=>{
    res.render('shop/checkout',{
    pageTitle:'Checkout', 
    path: '/checkout'});
};

exports.orders =(req,res,next)=>{
    res.render('shop/orders',{
    pageTitle:'Orders', 
    path: '/orders'});
};


exports.getProductDetails =(req,res,next)=>{
    const id = req.params.productId;
    Product.findProductById(id, product =>{
        res.render('shop/product',{
            product : product, 
            pageTitle:'Product Details', 
            path: '/'
        });
    })
    
};

exports.getAllProducts = (req,res,next)=>{
    Product.fetchAllProducts((prod)=>{
        res.render('shop/product-list',{
            prod : prod, 
            pageTitle:'Shop', 
            path: '/', 
            hasProduct: prod.length>0,
            activeShop:true,
            productCSS:true
        });
    });
    
};