const express = require('express');
const path = require('path');
const router = express.Router();
const shopController = require('../controllers/shop');

router.get('/', shopController.getAllProducts);
router.get('/cart', shopController.getCartPage);
router.get('/checkout', shopController.checkOut);
router.get('/orders', shopController.orders);
router.get('/product/:productId',shopController.getProductDetails);


module.exports = router;
