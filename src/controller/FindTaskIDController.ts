import { getRepository } from "typeorm";
import { Tasks } from "../entities/Tasks";
import { Request, Response } from "express";

export const findTask = async (req: Request, res: Response) => {
    const { id } = req.params;
    const task = await getRepository(Tasks).findOne(id);

    return res.json(task);
};

