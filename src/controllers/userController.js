const userService = require('../services/userService');

const userController = {
  async get(req, res) {
    const users = await userService.getAll();
    res.status(200).json(users);
  },
  async post(req, res) {
    await userService.newUser(req.body);

    const response = {
      message: "usuário criado com sucesso",
    }

    res.status(201).json(response)
  },
};

module.exports = userController