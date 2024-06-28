"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = __importDefault(require("../mongodb"));
const routes_1 = __importDefault(require("../../routes"));
const dotenv = __importStar(require("dotenv"));
const middlewares_1 = __importDefault(require("../../middlewares"));
dotenv.config();
exports.default = (app) => {
    let port = portNumber();
    let password = "ydEjlYTJtUXPiGuS";
    let user_name = "sahal";
    (0, mongodb_1.default)(`mongodb+srv://${user_name}:${password}@cluster0.fbngfbs.mongodb.net/?retryWrites=true&w=majority`);
    (0, routes_1.default)(app);
    (0, middlewares_1.default)(app);
    return app.listen(port, () => {
        console.log("start server ", port);
    });
};
const portNumber = () => {
    return 3200;
};
//# sourceMappingURL=index.js.map