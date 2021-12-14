import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Tasks } from "../entities/Tasks";

export const createTask = async (req: Request, res: Response) => {
    const task = await getRepository(Tasks).save(req.body);
    res.json(task);
};