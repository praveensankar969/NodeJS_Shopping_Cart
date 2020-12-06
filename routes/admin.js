const express = require('express');
const path = require('path');
const router = express.Router();
const productsController = require('../controllers/products');

router.post('/product',productsController.getProductDataFromPage);

router.get('/add-product',  productsController.getAddProductPage);

module.exports = router;
