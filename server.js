import express from "express";
import ProjectRouter from "./route/Projects.route.js";
import TaskRouter from "./route/Tasks.route.js";
import CommentRouter from "./route/Comments.route.js";

const app = express();
app.use(express.json());

app.use("/rest/v2/projects", ProjectRouter);
app.use("/rest/v2/tasks", TaskRouter);
app.use("/rest/v2/comments", CommentRouter);

app.listen(3000, () => {
  console.log("server started");
});
