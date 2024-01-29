import { Sequelize } from "sequelize";
import { projectsModel } from "../model/Projects.model.js";
import { tasksModel } from "../model/Tasks.model.js";
import { commentsModel } from "../model/Comments.model.js";
import { labelsModel } from "../model/Labels.model.js";
import { userModel } from "../model/Users.model.js";

const sequelize = new Sequelize("TodoData", "postgres", "123", {
  host: "localhost",
  dialect: "postgres",
  logging: false,
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Users = userModel(sequelize, Sequelize);
db.Projects = projectsModel(sequelize, Sequelize);
db.Tasks = tasksModel(sequelize, Sequelize);
db.Comments = commentsModel(sequelize, Sequelize);
db.Labels = labelsModel(sequelize, Sequelize);

db.Users.hasMany(db.Projects, { foreignKey: "user_id" });
db.Projects.belongsTo(db.Users, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

db.Projects.hasMany(db.Tasks, { foreignKey: "project_id" });
db.Tasks.belongsTo(db.Projects, {
  foreignKey: "project_id",
  onDelete: "CASCADE",
});

db.Tasks.hasMany(db.Comments, { foreignKey: "task_id" });
db.Comments.belongsTo(db.Tasks, {
  foreignKey: "task_id",
  onDelete: "CASCADE",
});

db.Projects.hasMany(db.Comments, { foreignKey: "project_id" });
db.Comments.belongsTo(db.Projects, {
  foreignKey: "project_id",
  onDelete: "CASCADE",
});

db.sequelize.sync();

export default db;
