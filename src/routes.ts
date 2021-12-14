import { Router, Request, Response} from "express";
import { createTask, deleteTask, listTasks, finishedTask, findTask, updateTask } from "./controller/TasksController";

const routes = Router();

routes.get('/', (req: Request, res: Response) => {
    return res.json({message: "server is running!"})
})

routes.get('/tasks', listTasks);
routes.get('/tasks/:id', findTask);
routes.post('/tasks', createTask);
routes.put('/tasks/:id', updateTask);
routes.patch('/tasks/:id', finishedTask);
routes.delete('/tasks/:id', deleteTask);

export default routes;