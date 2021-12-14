import { Router, Request, Response} from "express";
import { createTask } from "./controller/CreateTaskController";
import { deleteTask } from "./controller/DeleteTaskController";
import { findTask } from "./controller/FindTaskIDController";
import { listTasks } from "./controller/ListTaskController";
import { updateTask } from "./controller/UpdateTaskController";

const routes = Router();

routes.get('/', (req: Request, res: Response) => {
    return res.json({message: "server is running!"})
});

routes.get('/tasks', listTasks);
routes.get('/tasks/:id', findTask);
routes.post('/tasks', createTask);
routes.put('/tasks/:id', updateTask);
routes.delete('/tasks/:id', deleteTask);

export default routes;