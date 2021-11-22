import { Request, Response } from "express";
import { logger } from "../../app";
import db  from '../../database';

const getListOfHeroes = async (req: Request, res: Response): Promise<void> => {

  try {
    const heroes = await db.models.Heroes.findAll();
    res.send(JSON.stringify(heroes));
  } catch (error) {
    logger.error(error);
    res.sendStatus(500);
  }
};

export { getListOfHeroes };
