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
      attachment: {
        type: DataTypes.JSONB,
        defaultValue: null,
      },
      posted_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
      task_id: {
        type: DataTypes.UUID,
        defaultValue: null,
        references: {
          model: "Tasks",
          key: "id",
          onDelete: "CASCADE",
        },
      },
      project_id: {
        type: DataTypes.UUID,
        defaultValue: null,
        references: {
          model: "Projects",
          key: "id",
          onDelete: "CASCADE",
        },
      },
    },
    { timestamps: false }
  );
  return Comments;
};
