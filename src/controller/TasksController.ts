import { getRepository } from "typeorm";
import { Tasks } from "../entities/Tasks";
import { Request, Response } from "express";

export const listTasks = async (req: Request, res: Response) => {
    const tasks = await getRepository(Tasks).find();
    return res.json(tasks);
};

export const createTask = async (req: Request, res: Response) => {
    const task = await getRepository(Tasks).save(req.body);
    res.json(task);
};

export const findTask = async (req: Request, res: Response) => {
    const { id } = req.params;
    const task = await getRepository(Tasks).findOne(id);

    return res.json(task);
};

export const updateTask = async (req: Request, res: Response) => {
    const { id } = req.params;
    const task = await getRepository(Tasks).update(id, req.body);

    if(task.affected === 1){
        const taskUpdate = await getRepository(Tasks).findOne(id);
        return res.json(taskUpdate);
    }

    return res.status(404).json( {output: 'Task not found'})
};

export const finishedTask = async (req: Request, res: Response) => {
    const { id } = req.params;
    const task = await getRepository(Tasks).update(id, {finished: true});

    if(task.affected === 1){
        const taskFinished = await getRepository(Tasks).findOne(id);
        return res.json({output:"Finished"});
    }

    return res.status(404).json( {output: 'Task not found'})
};

export const deleteTask = async (req: Request, res: Response) => {
    const { id } = req.params;
    const task = await getRepository(Tasks).delete(id);

    if(task.affected === 1){
        const taskFinished = await getRepository(Tasks).findOne(id);
        return res.json({output: 'Task removed'});
    }

    return res.status(404).json( {output: 'Task not found'})
};