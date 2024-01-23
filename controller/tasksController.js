import Tasks from "../model/Tasks.model.js";

export const getActiveTasks = (req, res) => {
  Tasks.findAll({
    where: {
      is_completed: false,
    },
  })
    .then((tasks) => {
      res.json(tasks);
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
};

export const createNewTask = (req, res) => {
  if (req.body.content === undefined) {
    res.json({ message: "Please provide content" });
  } else {
    const task = {
      ...req.body,
      due: {
        date: req.body.due_date,
        is_recurring: false,
        string: req.body.due_string,
        datetime: req.body.due_datetime,
      },
      project_id: req.params.projectId,
      duration: {
        amount: req.body.duration,
        unit: req.body.duration_unit,
      },
    };
    Tasks.create(task)
      .then((task) => {
        res.json(task);
      })
      .catch((err) => {
        res.status(500).json({ message: err.message });
      });
  }
};

export const getActiveTaskById = (req, res) => {
  Tasks.findOne({
    where: {
      id: req.params.id,
      is_completed: false,
    },
  })
    .then((task) => {
      if (task === null) {
        res.status(404).json({ message: "Task not found" });
      } else {
        res.json(task);
      }
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
};

export const updateATask = (req, res) => {
  Tasks.findByPk(req.params.id)
    .then((task) => {
      if (task === null) {
        res.status(404).json({ message: "Task not found" });
      } else {
        return task.update(req.body);
      }
    })
    .then((task) => {
      res.json(task);
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
};

export const closeATask = (req, res) => {
  Tasks.findByPk(req.params.id)
    .then((task) => {
      if (task === null) {
        res.status(404).json({ message: "Task not found" });
      } else {
        return task.update({ is_completed: true });
      }
    })
    .then((task) => {
      res.json(task);
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
};

export const reopenATask = (req, res) => {
  Tasks.findByPk(req.params.id)
    .then((task) => {
      if (task === null) {
        res.status(404).json({ message: "Task not found" });
      } else {
        return task.update({ is_completed: false });
      }
    })
    .then((task) => {
      res.json(task);
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
};

export const deleteATask = (req, res) => {
  Tasks.findByPk(req.params.id)
    .then((task) => {
      if (task === null) {
        res.status(404).json({ message: "Task not found" });
      } else {
        return task.destroy();
      }
    })
    .then(() => {
      res.status(204).end();
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
};
