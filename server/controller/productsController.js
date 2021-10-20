// aqui vai o código que acessa o banco de dados
const { Product } = require("../db/models");

const getAllProducts = async (req, res) => {
  const products = await Product.findAll();
  res.status(200).send(products);
};

const getProductsId = async (req, res) => {
  const id = req.params.productsId;
  const product = await Product.findByPk(id);

  res.status(200).send(product);
};

const postProducts = async (req, res) => {
  const { name, flavor, complement, price, image, type, sub_type } = req.body;

  if (!name || !price || !type) {
    return res.status(400).send({
      message: "Missing required data",
    });
  }

  let newProduct = await Product.create({
    name,
    flavor,
    complement,
    price,
    image,
    type,
    sub_type,
    createdAt: new Date(),
    updatedAt: new Date(),
  });

  return res.status(200).send(newProduct);
};

const putProducts = async (req, res) => {
  const id = req.params.productsId;
  const { name, price, type } = req.body;
  const product = await Product.findByPk(id);

  if (!product) {
    return res.status(400).send({
      message: "Missing required or new data",
    });
  }

  await Product.update(
    { name, price, type, updatedAt: new Date() },
    {
      where: {
        id,
      },
    }
  );

  return res.status(200).send({
    ...product,
    name,
    price,
    type,
  });
};

const deleteProducts = async (req, res) => {
  const id = req.params.productsId;
  const product = await Product.findByPk(id);

  if (!product) {
    return res.status(403).send({
      message: "Product not found",
    });
  }

  const removeProduct = await Product.destroy({ where: { id } });

  return res.status(200).send({ message: "Product deleted", removeProduct });
};

module.exports = {
  getAllProducts,
  postProducts,
  getProductsId,
  putProducts,
  deleteProducts,
};
