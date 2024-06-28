"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const configMongodb = (url) => {
    mongoose_1.default.connect(url);
    var db = mongoose_1.default.connection;
    db.on('error', console.error.bind(console, "DB connection error"));
    db.once('open', function () {
        console.log("successfully connected to db");
    });
};
exports.default = configMongodb;
//# sourceMappingURL=index.js.map