import { Request, Response } from "express";
import { logger } from "../../app";
import db  from '../../database';

import { IAdminCreate } from "./types/IAdmin";

const getDefaultPage = async (req: Request, res: Response): Promise<void> => {
  res.render("default_ap")
};

const getList = async (req: Request, res: Response): Promise<void> => {
  try {
    const usersList = await db.models.Admin.findAll();
    res.send(JSON.stringify(usersList));
  } catch (error) {
    logger.error(error)
    res.sendStatus(500);
  }
};
const getCreate = async (req: Request, res: Response): Promise<void> => {
  res.send("Test data!")
};
const postCreate = async (req: Request, res: Response): Promise<void> => {
  const {
    email,
    name,
    birthDate,
    country, 
    city,
    avatarImg,
    password,
  } = req.body;

  const userData: IAdminCreate = {
    name, 
    email,
    birthDate, 
    country, 
    city,
    avatarImg,
    password,
  }
  
  try {
    await db.models.Admin.create(userData);
    res.sendStatus(200);
  } catch (error) {
    logger.error(error)
    res.sendStatus(500);
  }
};
const getEdit = async (req: Request, res: Response): Promise<void> => {
  const {params: {id} } = req;
  try {
    const user = await db.models.Admin.findByPk(id);
    res.send(JSON.stringify(user));
  } catch (error) {
    logger.error(error)
    res.sendStatus(500);
  }
};
const postEdit = async (req: Request, res: Response): Promise<void> => {
  const {
    body: {
      email,
      name,
      birthDate,
      country, 
      city,
      avatarImg,
    },
    params: {id}
  } = req;

  const userData: IAdminCreate = {
    email, 
    name, 
    birthDate, 
    country, 
    city,
    avatarImg,
  }
  try {
    await db.models.Admin.update(userData, { where: { id }});
    res.sendStatus(200);
  } catch (error) {
    logger.error(error)
    res.sendStatus(500);
  }
};
const deleteItem = async (req: Request, res: Response): Promise<void> => {
  const {id} = req.body;

  try {
    await db.models.Admin.destroy({ where: { id } })
    res.sendStatus(200);
  } catch (error) {
    logger.error(error)
    res.sendStatus(500);
  }
};

export { 
  getDefaultPage,
  getList,
  getCreate,
  postCreate,
  getEdit,
  postEdit,
  deleteItem,
}
