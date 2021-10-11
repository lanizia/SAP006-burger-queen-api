const { User } = require('../db/models');

const getAllUsers = async (req, res) => {
  const users = await User.findAll();
  res.status(200).send(users);
};

const getUserId = async (req, res) => {
  const id = req.params.uid;
  const user = await User.findByPk(id)
  res.status(200).send(user);
};

const postUser = (req, res) => {
  //validar body

  res.status(201).send({
    messsage: "Usando o POST dentro da rota de usuário",
  });
};

const putUser = (req, res) => {
  const id = req.params.uid;
  //validar body

  res.status(201).send({
    messsage: "Usando o PUT dentro da rota de usuário",
    id: id,
  });
};

const deleteUser = (req, res) => {
  const id = req.params.uid;
  //validar body

  res.status(201).send({
    messsage: "Usando o DELETE dentro da rota de usuário",
    id: id,
  });
};

module.exports = { getAllUsers, postUser, getUserId, putUser, deleteUser };
