export const commentsModel = (sequelize, DataTypes) => {
  const Comments = sequelize.define(
    "Comments",
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
      task_id: {
        type: DataTypes.STRING,
        defaultValue: null,
      },
      project_id: {
        type: DataTypes.STRING,
        defaultValue: null,
      },
      attachment: {
        type: DataTypes.JSONB,
        defaultValue: null,
      },
      posted_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
    },
    { timestamps: false }
  );
  return Comments;
};
