import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Tasks } from "../entities/Tasks";

export const listTasks = async (req: Request, res: Response) => {
    const tasks = await getRepository(Tasks).find();
    return res.json(tasks);
};