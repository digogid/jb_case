"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = require("./app");
var UsuarioController_1 = require("./controllers/UsuarioController");
var ProdutoController_1 = require("./controllers/ProdutoController");
var app = new app_1.default({
    port: 8088,
    controllers: [UsuarioController_1.default, ProdutoController_1.default]
});
app.listen();
//# sourceMappingURL=server.js.map