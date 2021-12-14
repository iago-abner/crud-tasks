import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Tasks } from "../entities/Tasks";

export const updateTask = async (req: Request, res: Response) => {
    const { id } = req.params;
    const task = await getRepository(Tasks).update(id, req.body);

    if(task.affected === 1){
        const taskUpdate = await getRepository(Tasks).findOne(id);
        return res.json(taskUpdate);
    }

    return res.status(404).json( {output: 'Task not found'})
};