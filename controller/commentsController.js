import db from "../config/config.js";

const Comments = db.Comments;

export const getComments = (req, res) => {
  if (req.query.task_id && req.query.project_id) {
    res.json({ message: "Please provide either task_id or project_id" });
  } else if (req.query.task_id) {
    Comments.findAll({
      where: { task_id: req.query.task_id },
    })
      .then((commments) => {
        res.json(commments);
      })
      .catch((err) => {
        res.status(500).json({ message: err.message });
      });
  } else if (req.query.project_id) {
    Comments.findAll({
      where: { project_id: req.query.project_id },
    })
      .then((commments) => {
        res.json(commments);
      })
      .catch((err) => {
        res.status(500).json({ message: err.message });
      });
  } else {
    res.json({ message: "Something went wrong" });
  }
};

export const createComment = (req, res) => {
  if (req.body.content === undefined || req.body.content.trim() === "") {
    res.status(400).json({ message: "Please provide content" });
  } else if (req.query.task_id && req.query.project_id) {
    res.json({ message: "Please provide either task_id or project_id" });
  } else if (req.query.task_id) {
    Comments.create({
      content: req.body.content,
      task_id: req.query.task_id,
      attachment: req.body.attachment,
    })
      .then((comment) => {
        res.json(comment);
      })
      .catch((err) => {
        res.status(500).json({ message: err.message });
      });
  } else if (req.query.project_id) {
    Comments.create({
      content: req.body.content,
      project_id: req.query.project_id,
      attachment: req.body.attachment,
    })
      .then((comment) => {
        res.json(comment);
      })
      .catch((err) => {
        res.status(500).json({ message: err.message });
      });
  } else {
    res.json({ message: "Something went wrong" });
  }
};

export const getCommentById = (req, res) => {
  Comments.findByPk(req.params.id)
    .then((comment) => {
      if (comment === null) {
        res.status(404).json({ message: "Comment not found" });
      } else {
        res.json(comment);
      }
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
};

export const updateComment = (req, res) => {
  Comments.findByPk(req.params.id)
    .then((comment) => {
      if (comment === null) {
        res.status(404).json({ message: "Comment not found" });
      } else {
        return comment.update(req.body);
      }
    })
    .then((comment) => {
      res.json(comment);
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
};

export const deleteComment = (req, res) => {
  Comments.findByPk(req.params.id)
    .then((comment) => {
      if (comment === null) {
        res.status(404).json({ message: "Comment not found" });
      } else {
        return comment.destroy();
      }
    })
    .then(() => {
      res.status(204).end();
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
};
