const { Router } = require("express");

const router = Router();

router.use('/', async (req, res) => {
  res.json({ sms: "hola" })
});

router.use('/users', async (req, res) => {
  res.json({ sms: "users" })
});

module.exports = router;