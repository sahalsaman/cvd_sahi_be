"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const admin_router_1 = __importDefault(require("./admin/admin-router"));
// import user from './users/user-routes'
const endPoint = (app) => {
    app.get('/', (req, res) => {
        res.send("welcome to E-shop REST services");
        console.log("start");
    });
    app.use('/admin', admin_router_1.default);
};
exports.default = endPoint;
//# sourceMappingURL=index.js.map