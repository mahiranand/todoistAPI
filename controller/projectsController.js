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

const getProjectById = (req, res) => {
  Project.findByPk(req.params.id)
    .then((project) => {
      if (project === null)
        res.status(404).json({ message: "Project not found" });
      res.json(project);
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
};

const createProject = (req, res) => {
  Project.create(req.body)
    .then((project) => {
      res.json(project);
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
};

const updateProject = (req, res) => {
  Project.findByPk(req.params.id)
    .then((project) => {
      if (project === null) {
        res.status(404).json({ message: "Project not found" });
      } else {
        return project.update(req.body);
      }
    })
    .then((project) => {
      res.json(project);
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
};

const deleteProject = (req, res) => {
  Project.findByPk(req.params.id)
    .then((project) => {
      if (project === null) {
        res.status(404).json({ message: "Project not found" });
      } else {
        return project.destroy();
      }
    })
    .then(() => {
      res.end();
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
};

const deleteAllProjects = (req, res) => {
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
