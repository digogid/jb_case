import IController from "./IController";
declare class UsuarioController implements IController {
    router: import("express-serve-static-core").Router;
    private repository;
    constructor();
    initRoutes(): void;
    private list;
    private save;
}
declare const _default: UsuarioController;
export default _default;
