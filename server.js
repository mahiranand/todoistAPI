import express from "express";
import ProjectRouter from "./route/Projects.route.js";
import TaskRouter from "./route/Tasks.route.js";
import CommentRouter from "./route/Comments.route.js";
import LabelRouter from "./route/Labels.route.js";
import userRouter from "./route/Users.route.js";
import { authUser } from "./middleware/authUser/authUser.js";

const app = express();
app.use(express.json());

app.use("/user", userRouter);
app.use("/rest/v2/projects", authUser, ProjectRouter);
app.use("/rest/v2/tasks", authUser, TaskRouter);
app.use("/rest/v2/comments", authUser, CommentRouter);
app.use("/rest/v2/labels", authUser, LabelRouter);

app.listen(3000, () => {
  console.log("server started");
});
