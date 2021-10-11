const { Order, OrderItem, User } = require('../db/models');

const getAllOrders = async (req, res) => {
  const orders = await Order.findAll();
  res.status(200).send(orders);
};

const getOrdersId = async (req, res) => {
  const id = req.params.orderId;
  const order = await Order.findByPk(id, { include: [User, OrderItem] });
  res.status(200).send(order);
};

const postOrders = (req, res) => {
  //validar body
  res.status(201).send({
    messsage: "Usando o POST dentro da rota de pedidos",
  });
};

const putOrders = (req, res) => {
  const id = req.params.orderId;
  //validar body
  res.status(201).send({
    messsage: "Usando o PUT dentro da rota de pedidos",
    id: id,
  });
};

const deleteOrders = (req, res) => {
  const id = req.params.orderId;
  //validar body
  res.status(201).send({
    messsage: "Usando o DELETE dentro da rota de pedidos",
  });
};

module.exports = {
  getAllOrders,
  postOrders,
  getOrdersId,
  putOrders,
  deleteOrders,
};
