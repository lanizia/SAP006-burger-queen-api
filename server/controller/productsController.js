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

const postProducts = (req, res) => {
  const { name, flavor, complement, price, image, type, subtype } = req.body;

  if (!name || !price || !type) {
    return res.status(400).send({
      message: "Missing required data",
    });
  }

  let productExists = await Product.findOne({
    where: {
      name,
      price,
      type,
    },
  });

  if (productExists) {
    return res.status(403).send({
      message: "Product already registered",
    });
  }

  let newProduct = await Product.create({
    name,
    flavor,
    complement,
    price,
    image,
    type,
    subtype,
  });

  return res.status(200).res.send(newProduct);
};

const putProducts = (req, res) => {
  const id = req.params.productsId;

  const { price, type } = req.body;

  const product = await User.findOne(id);

  if (!product) {
    return res.status(400).send({
      message: "Missing required or new data",
    });
  }

  await Product.update(
    { price, type },
    {
      where: {
        id,
      },
    }
  );

  return res.status(200).send({
    ...product,
    price,
    type
  });
};

const deleteProducts = (req, res) => {
  const id = req.params.productsId;
  const product = await Product.findPk(id);

  if (!product) {
    return res.status(403).send({
      message: "Product not found",
    });
  }

  const removeProduct = await Product.destroy(product);
  return res.status(200).res.send(removeProduct);
};

module.exports = {
  getAllProducts,
  postProducts,
  getProductsId,
  putProducts,
  deleteProducts,
};
