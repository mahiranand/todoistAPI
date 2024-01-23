import express from "express";
import {
  createComment,
  deleteComment,
  getCommentById,
  getComments,
  updateComment,
} from "../controller/commentsController.js";

const router = express.Router();

router.get("/", getComments);
router.post("/", createComment);
router.get("/:id", getCommentById);
router.put("/:id", updateComment);
router.delete("/:id", deleteComment);

export default router;
