const express = require('express');
const userRouter = require('./user.router');
const categoryRouter = require('./category.router');
const productRouter = require('./product.router');
const prodImg = require('./productImages.router');
const cartRouter = require('./cart.router');
const purchaseRouter = require('./purchase.router');
const router = express.Router();
const swaggerUi = require('swagger-ui-express');
const swaggerDoc = require('../swagger.json');

// colocar las rutas aquí

router.use('/users', userRouter)
router.use('/categories', categoryRouter)
router.use('/products', productRouter)
router.use('/product_images', prodImg)
router.use('/cart', cartRouter)
router.use('/purchases', purchaseRouter)
router.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc))

module.exports = router;