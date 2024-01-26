import { Sequelize } from "sequelize";
import { projectsModel } from "../model/Projects.model.js";
import { tasksModel } from "../model/Tasks.model.js";
import { commentsModel } from "../model/Comments.model.js";
import { labelsModel } from "../model/Labels.model.js";

const sequelize = new Sequelize("TodoData", "postgres", "123", {
  host: "localhost",
  dialect: "postgres",
  // logging: false
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Projects = projectsModel(sequelize, Sequelize);
db.Tasks = tasksModel(sequelize, Sequelize);
db.Comments = commentsModel(sequelize, Sequelize);
db.Labels = labelsModel(sequelize, Sequelize);

db.sequelize.sync();

export default db;
