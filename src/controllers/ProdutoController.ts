import { Request, Response, Router } from "express";
import IController from "./IController";
import Produto from "../domain/Produto";
import ProdutoRepository from "../mysql/ProdutoRepository";

class ProdutoController implements IController {
  public router = Router();
  private repository: ProdutoRepository;

  constructor() {
    this.initRoutes();
    this.repository = new ProdutoRepository();
  }

  public initRoutes() {
    this.router.get("/produtos/:id?", this.list);
    this.router.post("/produtos", this.save);
  }

  private list = async (req: Request, res: Response) => {
    try {
      const list = await this.repository.list(req.params?.id);
      if (list) res.send(list);
      else res.send(204);
    } catch (error) {
      console.error(`Produto.get`, error);
      res.status(400).send(error.message);
    }
  };

  private save = async (req: Request, res: Response) => {
    try {
      const { body } = req;
      const novoProduto = new Produto(
        body.name,
        body.bar_code,
        body.productPicture,
        body.inStock,
        body.category
      );
      await this.repository.save(novoProduto);
      res.status(201).send(novoProduto.id);
    } catch (error) {
      console.error('Produto.post', error);
      if (error.code === 'ER_DUP_ENTRY') {
        res.status(400).send('Nome ou código de barras já cadastrado');
      }
      else {
        res.status(500).send(error.message);
      }
    }
  };
}

export default new ProdutoController();
