"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var uuid_1 = require("uuid");
var Usuario = /** @class */ (function () {
    function Usuario(name, email, id) {
        this.id = (id !== null && id !== void 0 ? id : uuid_1.v4());
        this.name = name;
        this.email = email;
    }
    return Usuario;
}());
exports.default = Usuario;
//# sourceMappingURL=Usuario.js.map