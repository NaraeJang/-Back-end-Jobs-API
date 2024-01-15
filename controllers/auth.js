const User = require("../models/User");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError } = require("../errors/index");
const bcrypt = require("bcryptjs");

const register = async (req, res) => {
  const user = await User.create({ ...req.body }); // !IMPORTANT! We also SAVED PASSWORD as a string which is very bad idea. If somebody breaks my app they can just get the password.
  res.status(StatusCodes.CREATED).json({ user });
};

const login = async (req, res) => {
  res.send("register user");
};

module.exports = { register, login };
