import express from "express";
import { registerUser } from "../controller/usersController.js";
import { verifySignUp } from "../middleware/user/verifyUserInput.js";

const router = express.Router();

router.route("/register").post(verifySignUp, registerUser);
// router.route("/login").post(verifyLogin, loginUser);

export default router;
