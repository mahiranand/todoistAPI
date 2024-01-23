import express from "express";
import {
  createNewTask,
  updateATask,
  getActiveTasks,
  getActiveTaskById,
  closeATask,
  reopenATask,
  deleteATask,
} from "../controller/tasksController.js";

const router = express.Router();

router.get("/", getActiveTasks);
router.post("/:projectId", createNewTask);
router.get("/:id", getActiveTaskById);
router.put("/:id", updateATask);
router.put("/:id/close", closeATask);
router.put("/:id/reopen", reopenATask);
router.delete("/:id", deleteATask);

export default router;
