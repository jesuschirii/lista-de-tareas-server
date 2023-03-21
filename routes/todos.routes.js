import express from "express";
const router = express.Router();
import todoControllers from "../controllers/todo.controllers.js";

router.post("/tareas", todoControllers.createTodo);
router.get("/tareas", todoControllers.getTodos);
router.put("/tareas/:id", todoControllers.updateTodo);
router.delete("/tareas/:id", todoControllers.removeTodo);

export default router;
