import sequelize from "../config/config";
import { DataTypes } from "sequelize";

const Tasks = sequelize.define(
  "Tasks",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    comment_count: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    completed: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    due: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    label_ids: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      defaultValue: [],
    },
    order: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    priority: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
    },
    project_id: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    section_id: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    url: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
  },
  {
    timestamps: false,
  }
);
