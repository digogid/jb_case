"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var UsuarioController = /** @class */ (function () {
    function UsuarioController() {
        this.router = express_1.Router();
        this.initRoutes();
    }
    UsuarioController.prototype.initRoutes = function () {
        this.router.get("/usuarios", this.list);
        this.router.post("/usuarios", this.save);
    };
    UsuarioController.prototype.list = function (req, res) {
        var users = [
            {
                id: 1,
                name: "Ali"
            },
            {
                id: 2,
                name: "Can"
            },
            {
                id: 3,
                name: "Ahmet"
            }
        ];
        if (req.params.id) {
            var id_1 = parseInt(req.params.id);
            res.status(200).send(users.filter(function (x) { return x.id === id_1; }));
        }
        res.status(200).send(users);
    };
    ;
    UsuarioController.prototype.save = function (req, res) {
        res.status(201).send();
    };
    return UsuarioController;
}());
exports.default = new UsuarioController();
//# sourceMappingURL=UsuarioController.js.map