const express = require('express');
const path = require('path');
const router = express.Router();
const productsController = require('../controllers/products');

router.post('/products',productsController.getProductDataFromPage);

router.get('/add-product',  productsController.getAddProductPage);

router.get('/products',productsController.getAllProducts);


module.exports = router;
