import { Request, Response, Router } from "express";
import IController from "./IController";
import Produto from "../domain/Produto";

class ProdutoController implements IController {
  public router = Router();

  constructor() {
    this.initRoutes();
  }

  public initRoutes() {
    this.router.get("/produtos/:id?", this.list);
    this.router.post("/produtos", this.save);
  }

  list(req: Request, res: Response) {
    const users = [
      {
        id: 1,
        name: "Maionese"
      },
      {
        id: 2,
        name: "Lenço de papel"
      },
      {
        id: 3,
        name: "Capacete"
      }
    ];

    if (req.params.id) {
      const id = parseInt(req.params.id);
      res.status(200).send(users.filter(x => x.id === id));
    }
    else {
      res.status(200).send(users);
    }
  };

  save(req: Request, res: Response) {
    try {
      const { body } = req;
      const novoProduto = new Produto(body.name, body.bar_code, body.productPicture, body.inStock, body.category);      
      res.status(201).send(novoProduto.id);
    } catch (error) {
      console.error('Produto.post', error);
      res.status(400).send(error.message);
    }
  }
}

export default new ProdutoController();
