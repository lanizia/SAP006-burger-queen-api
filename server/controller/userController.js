const getAllUsers = async (req, res) => {
  res.status(200).send({
    messsage: "Usando o GET dentro da rota de usuários",
  });
};

const getUserId = (req, res) => {
  const id = req.params.uid;
  res.status(200).send({
    mesage: "Usando o GET de um usuário exclusivo",
    id: id,
  });
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
