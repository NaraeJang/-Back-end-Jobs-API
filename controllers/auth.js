// firstly, check if it's well connected with router.
//In this case, we don't need to put actual function. we can put simple dummies.

const register = async (req, res) => {
  res.send("register user");
};

const login = async (req, res) => {
  res.send("register user");
};

module.exports = { register, login };
