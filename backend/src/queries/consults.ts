import { Users } from "../database/schema";
import { Request, Response } from "express";
export const queries = {
  allUsers: async (req, res) => {
    Users.find({}, (result, err) => {
      return err ? res.json(err) : res.json(result);
    });
  },
  order: async (req: Request, res: Response) => {
    Users.find({})
      .sort({ nombre: req.params.ord })
      .then((result: any) => {
        return res.json(result);
      });
  },
  put: async (req: Request, res: Response) => {
    Users.deleteOne({ _id: req.params.id }).then((result) => {
      return res.json(result);
    });
  },
  specificUser: async (req: Request, res: Response) => {
    Users.find({ _id: req.params.id }, (result, err) => {
      return err ? res.json(err) : res.json(result);
    });
  },
  update: async (req: Request, res: Response) => {
    Users.updateOne(
      { _id: req.params.id },
      { nombre: req.params.nombre, apellido: req.params.apellido, dni: req.params.dni, domicilio: req.params.domicilio }
    ).then((result) => {
      return res.json(result);
    });
  },
};
