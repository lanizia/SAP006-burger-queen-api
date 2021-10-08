const { Router } = require("express");
const {
  getAllOrders,
  postOrders,
  getOrdersId,
  putOrders,
  deleteOrders,
} = require("../controller/ordersController");

const router = Router();

router.get("/", getAllOrders);
router.get("/:orderId", getOrdersId);
router.post("/", postOrders);
router.put("/:orderId", putOrders);
router.delete("/:orderId", deleteOrders);

module.exports = router;
