import jwt from "jsonwebtoken";
import db from "../../config/config.js";

const User = db.Users;

export const authUser = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) {
    return res.status(401).send({
      message: "Unauthorized!",
    });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, {id}) => {
    if (err) {
      return res.status(403).send({
        message: "Forbidden!",
      });
    }
    User.findByPk(id)
      .then((data) => {
        if (!data) {
          return res.status(404).send({
            message: "User not found!",
          });
        }
        req.userID = data.id;
        next();
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "Error occurred while retrieving user!",
        });
      });   
  });
};
