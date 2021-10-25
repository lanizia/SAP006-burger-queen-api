const { Order, OrderItem, Product } = require("../db/models");

const getOrderWithProducts = (id) =>
  Order.findByPk(id, {
    include: [
      {
        model: Product,
        as: "Products",
        required: false,
        attributes: ["id", "name", "flavor", "complement"],
        through: {
          model: OrderItem,
          as: "OrderItem",
          attributes: ["qtd"],
        },
      },
    ],
  });

const getAllOrders = async (req, res) => {
  const orders = await Order.findAll();
  res.status(200).send(orders);
};

const getOrdersId = async (req, res) => {
  const id = req.params.orderId;
  const order = await getOrderWithProducts(id);
  res.status(200).send(order);
};

const postOrders = async (req, res) => {
  const { client_name, table, products } = req.body;

  // cria o pedido
  const order = await Order.create({
    client_name,
    table,
    status: "pending",
    processedAt: new Date(),
    createdAt: new Date(),
    updatedAt: new Date(),
    user_id: 1,
  });

  // monta itens
  const items = products.map((product) => ({
    order_id: order.id,
    product_id: product.id,
    qtd: product.qtd,
  }));

  // insere todos itens
  await OrderItem.bulkCreate(items);

  // busca pedido criado
  const newOrder = await getOrderWithProducts(order.id);

  res.status(201).send(newOrder);
};

const putOrders = async (req, res) => {
  const id = req.params.orderId;
  const { status } = req.body;

  const order = await Order.findByPk(id);

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

  await Order.update(
    { status, updatedAt: new Date() },
    {
      where: {
        id,
      },
    }
  );

  return res.status(200).send({
    ...order,
    status,
  });
};

const deleteOrders = async (req, res) => {
  const id = req.params.orderId;
  const order = await getOrderWithProducts(id);

  if (!order) {
    return res.status(404).send({
      message: "Order not found",
    });
  }

  const removeOrder = await Order.destroy({ where: { id } });
  return res.status(200).send({ message: "Product deleted", removeOrder });
};

module.exports = {
  getAllOrders,
  postOrders,
  getOrdersId,
  putOrders,
  deleteOrders,
};
