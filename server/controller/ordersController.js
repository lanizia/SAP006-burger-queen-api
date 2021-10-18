const { Order, OrderItem, User } = require("../db/models");

const getAllOrders = async (req, res) => {
  const orders = await Order.findAll();
  res.status(200).send(orders);
};

const getOrdersId = async (req, res) => {
  const id = req.params.orderId;
  const order = await Order.findByPk(id, { include: [User, OrderItem] });
  res.status(200).send(order);
};

const postOrders = async (req, res) => {
  const { client_name, table, products } = req.body;

  // cria o pedido
  const orderId = Order.create({ client_name, table, status: "pending" });

  // monta itens
  const items = products.map((product) => ({
    order_id: orderId,
    product_id: product.id,
    qtd: product.qtd,
  }));

  // insere todos itens
  await OrderItem.bulkCreate(items);

  // busca pedido criado
  const newOrder = Order.findByPk(orderId, {
    include: [
      {
        model: OrderItem,
        as: "Products",
      },
    ],
  });

  res.status(201).send(newOrder);
};

const putOrders = async (req, res) => {
  const id = req.params.orderId;
  
  const { status} = req.body;

  const order = await Order.findOne(id);

  if (!order) {
    return res.status(400).send({
      message: "Missing required or new data",
    });
  }
  if (!order) {
    return res.status(403).send({
      message: "Order not found",
    });
  }

  await Product.update(
    { status },
    {
      where: {
        id,
      },
    }
  );

  return res.status(200).send({
    ...order,
    status
  });
};


const deleteOrders = async  (req, res) => {
  const id = req.params.orderId;
  
  const order = await Order.findByPk(id);

  if (!order) {
    return res.status(404).send({
      message: "Order not found",
    });
  }
  
  const removeOrder = await Order.destroy(order);
  return res.status(200).res.send(removeOrder);
};

module.exports = {
  getAllOrders,
  postOrders,
  getOrdersId,
  putOrders,
  deleteOrders,
};
