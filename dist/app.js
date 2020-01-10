"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var App = /** @class */ (function () {
    function App(appInit) {
        this.app = express();
        this.port = appInit.port;
        this.routes(appInit.controllers);
    }
    App.prototype.routes = function (controllers) {
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