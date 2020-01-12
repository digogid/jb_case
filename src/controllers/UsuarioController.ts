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
      const list = await this.repository.list(req.params?.id);
      if (list)
        res.send(list);
      else
        res.send(204);
    } catch (error) {
      console.error(`Usuario.get`, error);
      res.status(400).send(error.message);
    }
  };

  private save = async (req: Request, res: Response) => {
    try {
      const { body } = req;
      const novoUsuario = new Usuario(body.name, body.email);
      await this.repository.save(novoUsuario);
      res.status(201).send(novoUsuario.id);
    } catch (error) {
      console.error('Usuario.post', error);
      if (error.code === 'ER_DUP_ENTRY') {
        res.status(400).send('E-mail já cadastrado');
      }
      else {
        res.status(500).send(error.message);
      }
    }
  }
}

export default new UsuarioController();
