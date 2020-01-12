"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var uuid_1 = require("uuid");
var Produto = /** @class */ (function () {
    function Produto(name, bar_code, productPicture, inStock, category, id) {
        this.id = (id !== null && id !== void 0 ? id : uuid_1.v4());
        this.name = name;
        this.bar_code = bar_code;
        this.productPicture = productPicture;
        this.inStock = inStock;
        this.category = category;
    }
    return Produto;
}());
exports.default = Produto;
//# sourceMappingURL=Produto.js.map