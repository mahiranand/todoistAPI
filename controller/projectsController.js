import db from "../config/config.js";

const Project = db.Projects;

export const getAllProjects = (req, res) => {
  const userId = req.user_id;
  Project.findAll({ where: { user_id: userId } })
    .then((projects) => {
      res.json(projects);
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
};

export const getProjectById = (req, res) => {
  Project.findByPk(req.params.id)
    .then((project) => {
      if (project === null) {
        res.status(404).json({ message: "Project not found" });
      } else {
        res.json(project);
      }
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
};

export const createProject = (req, res) => {
  if (req.body.name === undefined || req.body.name.trim() === "") {
    res.status(400).json({ message: "Please provide name" });
  } else {
    Project.create({ ...req.body, user_id: req.user_id })
      .then((project) => {
        res.json(project);
      })
      .catch((err) => {
        res.status(500).json({ message: err.message });
      });
  }
};

export const updateProject = (req, res) => {
  Project.findByPk(req.params.id)
    .then((project) => {
      if (project === null) {
        res.status(404).json({ message: "Project not found" });
      } else if ((project.user_id = req.user_id)) {
        res.status(403).json({ message: "Forbidden" });
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

export const deleteProject = (req, res) => {
  Project.findByPk(req.params.id)
    .then((project) => {
      if (project === null) {
        res.status(404).json({ message: "Project not found" });
      } else if (project.user_id !== req.user_id) {
        res.status(403).json({ message: "Forbidden" });
      } else {
        return project.destroy();
      }
    })
    .then(() => {
      res.status(204).end();
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
};

export const deleteAllProjects = (req, res) => {
  Project.destroy({
    where: { user_id: req.user_id },
    truncate: false,
  })
    .then(() => {
      res.status(204).end();
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
};
