"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const configs_1 = __importDefault(require("./configs"));
const app = (0, express_1.default)();
const cors = require('cors');
// Allow requests from a specific domain
const corsOptions = {
    origin: '*'
};
app.use(cors(corsOptions));
var bodyParser = require('body-parser');
app.use(bodyParser.json());
configs_1.default.startServer(app);
//# sourceMappingURL=app.js.map