const getAllOrders = async (req, res) => {
  res.status(200).send({
    messsage: "Usando o GET dentro da rota de pedidos",
  });
};

const getOrdersId = (req, res) => {
  const id = req.params.orderId;
  res.status(200).send({
    mesage: "Usando o GET de um pedidos exclusivo",
    id: id,
  });
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
