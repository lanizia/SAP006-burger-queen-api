const { Router } = require("express");
const {
  getAllUsers,
  postUser,
  getUserId,
  putUser,
  deleteUser,
} = require("../controller/userController");

const router = Router();

// aqui vai as requisições
router.get("/", getAllUsers);
router.get("/:uid", getUserId);
router.post("/", postUser);
router.put("/:uid", putUser);
router.delete("/:uid", deleteUser);

module.exports = router;
