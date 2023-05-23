const { Router } = require("express");
const productsRouter = require("./Products");
const categoryRouter = require("./Category");

const router = Router();

router.use('/products', productsRouter);

router.use('/category', categoryRouter);

module.exports = router;