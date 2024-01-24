import Labels from "../model/Labels.model.js";

export const getAllLabels = (req, res) => {
  Labels.findAll()
    .then((labels) => {
      res.json(labels);
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
};

export const createLabel = (req, res) => {
  if (!req.body.name || req.body.name.trim() === "") {
    res.status(400).json({ message: "Name can not be empty!" });
    return;
  } else {
    Labels.create(req.body)
      .then((label) => {
        res.json(label);
      })
      .catch((err) => {
        res.status(500).json({ message: err.message });
      });
  }
};

export const getLabelById = (req, res) => {
  const id = req.params.id;

  Labels.findByPk(id)
    .then((label) => {
      if (!label) {
        res.status(404).json({ message: "Label not found!" });
      } else {
        res.json(label);
      }
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
};

export const updateLabel = (req, res) => {
  const id = req.params.id;

  Labels.findByPk(id)
    .then((label) => {
      if (!label) {
        res.status(404).json({ message: "Label not found!" });
      } else {
        return label.update(req.body);
      }
    })
    .then((label) => {
      res.json(label);
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
};

export const deleteLabel = (req, res) => {
  const id = req.params.id;

  Labels.findByPk(id)
    .then((label) => {
      if (!label) {
        res.status(404).json({ message: "Label not found!" });
      } else {
        return label.destroy();
      }
    })
    .then(() => {
      res.status(204).end();
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
};
