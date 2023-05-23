const { Router } = require("express");

const productsRouter = Router();


productsRouter.get('/', async (req, res) => {
  res.json({ sms: "ALL PRODUCTS" })
});

module.exports = productsRouter;