import express from "express";
import ProjectRouter from "./route/Project.route.js";

const app = express();
app.use(express.json());

app.use("/rest/v2/projects", ProjectRouter);

app.listen(3000, () => {
  console.log("server started");
});
