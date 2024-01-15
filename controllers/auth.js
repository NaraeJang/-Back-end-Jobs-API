const User = require("../models/User"); // 1. Import Model firstly.
const { StatusCodes } = require("http-status-codes"); // 3. After confirm everything works, we import this function here.

const register = async (req, res) => {
  const user = await User.create({ ...req.body }); // 4. create a variable to create User. Mongoose will validate the data.
  res.status(StatusCodes.CREATED).json({ user }); // 2. Check if you can get the value in PostMan.
};

const login = async (req, res) => {
  res.send("register user");
};

module.exports = { register, login };
