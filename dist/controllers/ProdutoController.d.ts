import { Request, Response } from "express";
import IController from "./IController";
declare class ProdutoController implements IController {
    router: import("express-serve-static-core").Router;
    constructor();
    initRoutes(): void;
    list(req: Request, res: Response): void;
    save(req: Request, res: Response): void;
}
declare const _default: ProdutoController;
export default _default;
