import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import db from "../config/config.js";
import 'dotenv/config';

const User = db.Users;

const createToken = (user) => {
  return jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
    expiresIn: 86400,
  });
};

export const registerUser = (req, res) => {
  User.create({
    username: req.body.username.trim(),
    password: bcrypt.hashSync(req.body.password, 8),
    email: req.body.email.trim(),
  })
    .then((data) => {
      const token = createToken(data);
      res.status(201).send({
        message: "User registered successfully!",
        token: token,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error occurred while registering user!",
      });
    });
};
