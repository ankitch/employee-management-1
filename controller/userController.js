const UserModel = require("../models/user");

const getUsers = async (req, res, next) => {
  const user = await UserModel.find();
  res.status(200).json(user);
};

const postUser = async (req, res, next) => {
  const userModel = new UserModel({ ...req.body });
  const userData = await userModel.save();
  res.status(201).json(userData);
};

module.exports = {
  getUsers,
  postUser,
};
