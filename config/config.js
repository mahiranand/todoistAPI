import { Sequelize } from "sequelize";

const sequelize = new Sequelize("TodoData", "postgres", "123", {
  host: "localhost",
  dialect: "postgres",
});

export default sequelize;