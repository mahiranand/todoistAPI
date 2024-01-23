import sequelize from "../config/config";
import { DataTypes } from "sequelize";

const Tasks = sequelize.define("Tasks", {
  creator_id: {
    type: DataTypes.STRING,
    defaultValue: null
  },
  assignee_id: {
    type: DataTypes.STRING,
    defaultValue: null
  },
  assigner_id: {
    type: DataTypes.STRING,
    defaultValue: null
  },
  comment_count: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  is_completed: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  description: {
    type: DataTypes.STRING,
    defaultValue: ""
  },
  content: {
    type: DataTypes.STRING,
    allowNull: false
  },
  due:{
    type: DataTypes.JSONB,
    
  }
},{
  updatedAt: false,
});
