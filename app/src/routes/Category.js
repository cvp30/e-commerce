const { Router } = require("express");

const categoryRouter = Router();

categoryRouter.get('/', async (req, res) => {
  res.json({ sms: "ALL CATEGORIES" })
});

module.exports = categoryRouter;