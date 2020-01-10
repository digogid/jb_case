import { Request, Response, Router } from "express";
import IController from "./IController";
import Usuario from "../domain/Usuario";
import UsuarioRepository from '../mysql/usuarioRepository';

class UsuarioController implements IController {
  public router = Router();
  private repository: UsuarioRepository;

  constructor() {
    this.initRoutes();
    this.repository = new UsuarioRepository();
  }

  public initRoutes() {
    this.router.get("/usuarios/:id?", this.list);
    this.router.post("/usuarios", this.save);
  }

  private list = async (req: Request, res: Response) => {
    try {
      const lista = await this.repository.listar(req.params?.id);
      if (lista)
        res.send(lista);
      else
        res.send(204);
    } catch (error) {
      console.log(error);
      res.status(400).send(error.message);
    }
  };

  private save = (req: Request, res: Response) => {
    try {
      const { body } = req;
      const novoUsuario = new Usuario(body.name, body.email);      
      res.status(201).send(novoUsuario.id);
    } catch (error) {
      console.error('Usuario.post', error);
      res.status(400).send(error.message);
    }
  }
}

export default new UsuarioController();
