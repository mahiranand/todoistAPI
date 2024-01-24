import { DataTypes } from "sequelize";
import sequelize from "../config/config.js";

const Labels = sequelize.define(
  "Labels",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    color: {
      type: DataTypes.STRING,
      defaultValue: "charcoal",
    },
    order: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    is_favorite: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    timestamps: false,
  }
);

sequelize.sync();

export default Labels;
