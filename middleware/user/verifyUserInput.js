import db from "../../config/config.js";

const User = db.Users;

export const verifySignUp = (req, res, next) => {
  const { username, password, email } = req.body;
  console.log(req.body);
  console.log(username, password, email);
  if (!username || !password || !email) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  if (
    username == "" ||
    username.trim() == "" ||
    password == "" ||
    password.trim() == "" ||
    email == "" ||
    email.trim() == "" ||
    email.includes("@") == false
  ) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  User.findOne({ where: { username: username } })
    .then((data) => {
      if (data) {
        res.status(400).send({
          message: "Username already exists!",
        });
        return;
      }
      return next();
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error occurred while checking username!",
      });
      return;
    });
};

export const verifyLogin = (req, res, next) => {
  const { username, password } = req.body;

  if (!username || !password) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  if (
    username == "" ||
    username.trim() == "" ||
    password == "" ||
    password.trim() == ""
  ) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }
  next();
};
