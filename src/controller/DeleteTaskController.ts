import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Tasks } from "../entities/Tasks";

export const deleteTask = async (req: Request, res: Response) => {
    const { id } = req.params;
    const task = await getRepository(Tasks).delete(id);

    if(task.affected === 1){
        const taskFinished = await getRepository(Tasks).findOne(id);
        return res.json({output: 'Task removed'});
    }

    return res.status(404).json( {output: 'Task not found'})
};