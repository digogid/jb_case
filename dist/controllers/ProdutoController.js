"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var Produto_1 = require("../domain/Produto");
var ProdutoController = /** @class */ (function () {
    function ProdutoController() {
        this.router = express_1.Router();
        this.initRoutes();
    }
    ProdutoController.prototype.initRoutes = function () {
        this.router.get("/produtos", this.list);
        this.router.post("/produtos", this.save);
    };
    ProdutoController.prototype.list = function (req, res) {
        var users = [
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
            var id_1 = parseInt(req.params.id);
            res.status(200).send(users.filter(function (x) { return x.id === id_1; }));
        }
        res.status(200).send(users);
    };
    ;
    ProdutoController.prototype.save = function (req, res) {
        try {
            var body = req.body;
            console.log('req.body', req.body);
            var novoProduto = new Produto_1.default(body.name, body.bar_code, body.productPicture, body.inStock, body.category);
            console.log(novoProduto);
            res.status(201).send();
        }
        catch (error) {
            console.error('Produto.post', error);
            res.status(400).send(error.message);
        }
    };
    return ProdutoController;
}());
exports.default = new ProdutoController();
//# sourceMappingURL=ProdutoController.js.map