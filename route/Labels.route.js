import express from "express";
import {
  createLabel,
  deleteLabel,
  getAllLabels,
  getLabelById,
  updateLabel,
} from "../controller/labelsController.js";

const router = express.Router();

router.get("/", getAllLabels);
router.post("/", createLabel);
router.get("/:id", getLabelById);
router.put("/:id", updateLabel);
router.delete("/:id", deleteLabel);

export default router;
