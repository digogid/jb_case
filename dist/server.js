"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bodyParser = require("body-parser");
var dotenv_1 = require("dotenv");
var path_1 = require("path");
var path = require('path');
var configPath = path_1.join(path.resolve(__dirname), './config', ".env");
dotenv_1.config({ path: configPath });
var app_1 = require("./app");
var UsuarioController_1 = require("./controllers/UsuarioController");
var ProdutoController_1 = require("./controllers/ProdutoController");
var app = new app_1.default({
    port: 8088,
    controllers: [UsuarioController_1.default, ProdutoController_1.default],
    middlewares: [
        bodyParser.json(),
        bodyParser.urlencoded({ extended: true })
    ]
});
app.listen();
//# sourceMappingURL=server.js.map