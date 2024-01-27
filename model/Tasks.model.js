export const tasksModel = (sequelize, DataTypes) => {
  const Tasks = sequelize.define(
    "Tasks",
    {
      creator_id: {
        type: DataTypes.STRING,
        defaultValue: null,
      },
      assignee_id: {
        type: DataTypes.STRING,
        defaultValue: null,
      },
      assigner_id: {
        type: DataTypes.STRING,
        defaultValue: null,
      },
      comment_count: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      is_completed: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      description: {
        type: DataTypes.STRING,
        defaultValue: "",
      },
      content: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      due: {
        type: DataTypes.JSONB,
        allowNull: false,
      },
      duration: {
        type: DataTypes.JSONB,
        defaultValue: null,
      },
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      labels: {
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
        validate: {
          min: 1,
          max: 4,
        },
      },
      section_id: {
        type: DataTypes.STRING,
        defaultValue: null,
      },
      parent_id: {
        type: DataTypes.STRING,
        defaultValue: null,
      },
      url: {
        type: DataTypes.STRING,
        defaultValue: null,
      },
      created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      timestamps: false,
    }
  );
  return Tasks;
};
