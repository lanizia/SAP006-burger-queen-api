// aqui vai o código que acessa o banco de dados
const { Product } = require('../db/models');

const getAllProducts = async (req, res) => {
  const products = await Product.findAll();
  res.status(200).send(products);
};

const getProductsId = async (req, res) => {
  const id = req.params.productsId;
  const product = await Product.findByPk(id)
  res.status(200).send(product);
};

const postProducts = (req, res) => {
  //validar body
  res.status(201).send({
    messsage: "Usando o POST dentro da rota de produtos",
  });
};

const putProducts = (req, res) => {
  const id = req.params.productsId;
  //validar body
  res.status(201).send({
    messsage: "Usando o PATCH dentro da rota de produtos",
    id: id,
  });
};

const deleteProducts = (req, res) => {
  const id = req.params.productsId;
  //validar body
  res.status(201).send({
    messsage: "Usando o DELETE dentro da rota de produtos",
    id: id
  });
};

module.exports = {
  getAllProducts,
  postProducts,
  getProductsId,
  putProducts,
  deleteProducts,
};
