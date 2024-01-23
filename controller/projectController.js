import Project from "../model/Projects.model.js";

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
  Project.findByPk(req.params.id)
    .then((project) => {
      res.json(project);
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
};

const createProject = async (req, res) => {
  Project.create(req.body)
    .then((project) => {
      res.json(project);
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
};

const updateProject = async (req, res) => {
  Project.findByPk(req.params.id)
    .then((project) => {
      return project.update(req.body);
    })
    .then((project) => {
      res.json(project);
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
};

const deleteProject = async (req, res) => {
  Project.findByPk(req.params.id)
    .then((project) => {
      return project.destroy();
    })
    .then(() => {
      res.end();
    })
    .catch((err) => {
      res.status(404).json({ message: err.message });
    });
};

const deleteAllProjects = async (req, res) => {
  Project.destroy({
    where: {},
    truncate: false,
  })
    .then(() => {
      res.end();
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
};

export {
  createProject,
  deleteAllProjects,
  deleteProject,
  getAllProjects,
  getProjectById,
  updateProject,
};
