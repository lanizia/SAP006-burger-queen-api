const { User } = require("../db/models");

// autenticação
// const protectRoute = async (req, res, next) => {
//   if (!req.user) {
//     return res.status(401).send({
//       message: "User not authenticated",
//     });
//   }

//   return next();
// }

const getAllUsers = async (req, res) => {
  const users = await User.findAll({
    attributes: {
      exclude: "password",
    },
  });
  return res.status(200).send(users);
};

const getUserId = async (req, res) => {
  const id = req.params.uid;
  const user = await User.findOne({
    attributes: {
      exclude: "password",
    },
    where: {
      id,
    },
  });

  return res.status(200).send(user);
};

const postUser = async (req, res) => {
  const { name, email, password, role, restaurant } = req.body;

  if (!email || !password || !role) {
    return res.status(400).send({
      message: "Missing required data",
    });
  }

  let userExists = await User.findOne({
    where: {
      email,
    },
  });

  if (userExists) {
    return res.status(403).send({
      message: "Email already in use",
    });
  }

  let newUser = await User.create({
    name,
    email,
    password,
    role,
    restaurant,
    createdAt: new Date(),
    updatedAt: new Date()
  });

  return res.status(200).send(newUser);
};

const putUser = async (req, res) => {
  const id = req.params.uid;
  const { name, role } = req.body;
  const user = await User.findOne({
    attributes: {
      exclude: "password",
    },
    where: {
      id,
    },
  });

  if (!user) {
    return res.status(400).send({
      message: " Missing required or new data",
    });
  }

  await User.update(
    { name, role, updatedAt: new Date() },
    {
      where: {
        id,
      },
    }
  );

  return res.status(200).send({
    ...user,
    name,
    role
  });
};

const deleteUser = async (req, res) => {
  const id = req.params.uid;
  const user = await User.findByPk(id);

  if (!user) {
    return res.status(403).send({
      message: "User not found",
    });
  }

  const removeUser = await User.destroy({ where: { id } });

  return res.status(200).send({ message: "User deleted", removeUser });
};

module.exports = { getAllUsers, postUser, getUserId, putUser, deleteUser };
