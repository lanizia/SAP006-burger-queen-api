const { Router } = require("express");
const productsRoute = require("./products");
const ordersRoute = require("./orders");
const userRoute = require("./user");

const router = Router();

// aqui vai todas as rotas
router.use("/products", productsRoute);
router.use("/orders", ordersRoute);
router.use("/user", userRoute);

router.use((req, res, next) => {
  const erro = new Error("Not Found");
  erro.status = 404;
  next(erro);
});

router.use((error, req, res, next) => {
  res.status(error.status || 500);
  return res.send({
    erro: {
      message: error.message,
    },
  });
});

module.exports = router;
