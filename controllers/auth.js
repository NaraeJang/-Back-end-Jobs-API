const User = require("../models/User");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError } = require("../errors/index");

const register = async (req, res) => {
  // // How to check empty values in controller.
  // const { name, email, password } = req.body;
  // if (!name || !email || !password) {
  //   throw new BadRequestError("Please provide name, email and password");
  // }
  // However, it works without checking empty values in controller. because we validate it in mongo db.

  const user = await User.create({ ...req.body }); // !IMPORTANT! We also SAVED PASSWORD as a string which is very bad idea.
  res.status(StatusCodes.CREATED).json({ user });
};

const login = async (req, res) => {
  res.send("register user");
};

module.exports = { register, login };
