import { Request, Response } from "express";

const authenticationMiddleware = (req: Request, res: Response, next: ()=>void): void => {
    if (req.isAuthenticated()) {
      return next();
    }
    res.redirect("/login");
};

export default authenticationMiddleware;
