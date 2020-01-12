"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var App = /** @class */ (function () {
    function App(appInit) {
        this.app = express();
        this.port = appInit.port;
        this.registerMiddlewares(appInit.middlewares);
        this.registerRoutes(appInit.controllers);
    }
    App.prototype.registerMiddlewares = function (middleWares) {
        var _this = this;
        middleWares.forEach(function (middleWare) {
            _this.app.use(middleWare);
        });
    };
    App.prototype.registerRoutes = function (controllers) {
        var _this = this;
        controllers.forEach(function (controller) {
            _this.app.use("/", controller.router);
        });
    };
    App.prototype.listen = function () {
        var _this = this;
        this.app.listen(this.port, function () {
            console.log("App listening on the http://localhost:" + _this.port);
        });
    };
    return App;
}());
exports.default = App;
//# sourceMappingURL=app.js.map