const { Router } = require("express");
const {
  getAllProducts,
  postProducts,
  getProductsId,
  putProducts,
  deleteProducts,
} = require("../controller/productsController");

const router = Router();

// aqui vai as requisições
router.get("/", getAllProducts);
router.get("/:productsId", getProductsId);
router.post("/", postProducts);
router.put("/:productsId", putProducts);
router.delete("/:productsId", deleteProducts);

module.exports = router;
