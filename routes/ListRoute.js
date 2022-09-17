import express from "express";
import {
    getTask,
    getTaskById,
    createTask,
    updateTask,
    deleteTask,
} from "../controller/ListController.js";

const route = express.Router();

route.get("/tasks", getTask);
route.get("/tasks/:id", getTaskById);
route.post("/tasks", createTask);
route.patch("/tasks/:id", updateTask);
route.delete("/tasks/:id", deleteTask);

export default route;
