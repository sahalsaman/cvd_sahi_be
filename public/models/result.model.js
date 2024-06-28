"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const ResultSchema = new mongoose_1.default.Schema({
    category: { type: String },
    program: { type: String },
    noOfResult: { type: String },
    f_name: { type: String },
    f_unit: { type: String },
    s_name: { type: String },
    s_unit: { type: String },
    t_name: { type: String },
    t_unit: { type: String },
}, {
    timestamps: true,
});
const ResultModel = mongoose_1.default.model("result", ResultSchema);
exports.default = ResultModel;
//# sourceMappingURL=result.model.js.map