export const projectsModel = (sequelize, DataTypes) => {
  const Projects = sequelize.define(
    "Projects",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      comment_count: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      order: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      color: {
        type: DataTypes.STRING,
      },
      is_shared: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      is_favorite: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      parent_id: {
        type: DataTypes.STRING,
        defaultValue: null,
      },
      is_inbox_project: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      is_team_inbox: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      view_style: {
        type: DataTypes.STRING,
        defaultValue: "list",
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
  return Projects;
};
