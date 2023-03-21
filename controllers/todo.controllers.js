import todoSchema from "../models/todo.js";

const createTodo = (req, res) => {
  const todo = todoSchema(req.body);
  todo
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((error) => res.json({ message: error }));
};

const getTodos = (req, res) => {
  todoSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
};

const updateTodo = (req, res) => {
  const { id } = req.params;
  const { todo } = req.body;
  todoSchema
    .updateOne({ _id: id }, { $set: { todo } })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
};

const removeTodo = (req, res) => {
  const { id } = req.params;
  todoSchema
    .findByIdAndRemove(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
};

export default {
  createTodo,
  getTodos,
  updateTodo,
  removeTodo,
};
