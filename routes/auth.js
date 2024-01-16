const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authentication");

const { login, register } = require("../controllers/auth");

router.post("/register", register);
router.post("/login", authMiddleware, login);

module.exports = router;
