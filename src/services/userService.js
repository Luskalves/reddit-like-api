const Joi = require('joi');
const handleError = require('../errors/handleError')
const model = require('../database/models');

const schema = Joi.object({
  name: Joi.string().min(5).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
})

const userService = {
  async getAll() {
    const users = await model.Users.findAll({
      attributes: { exclude: ['password'] },
    });
    return users;
  },
  async newUser(body) {
    const { error } = schema.validate(body);
    if (error) handleError(error.message, '404');

    await model.Users.create({ ...body })
  },
};

module.exports = userService;