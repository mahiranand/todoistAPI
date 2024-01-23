import Project from "../model/Project.model.js";

const getAllProjects = (req, res) => {
  Project.findAll()
    .then((projects) => {
      res.json(projects);
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
};

const getProjectById = async (req, res) => {
  try {
    const project = await Project.findByPk(req.params.id);
    res.json(project);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};

const createProject = async (req, res) => {
  try {
    const project = await Project.create(req.body);
    res.json(project);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};

const updateProject = async (req, res) => {
  try {
    const project = await Project.findByPk(req.params.id);
    await project.update(req.body);
    res.json(project);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};

const deleteProject = async (req, res) => {
  try {
    const project = await Project.findByPk(req.params.id);
    await project.destroy();
    res.json(project);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};

const deleteAllProjects = async (req, res) => {
  try {
    const projects = await Project.findAll();
    await projects.forEach((project) => project.destroy());
    res.json(projects);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};

export {
  createProject,
  deleteAllProjects,
  deleteProject,
  getAllProjects,
  getProjectById,
  updateProject,
};
