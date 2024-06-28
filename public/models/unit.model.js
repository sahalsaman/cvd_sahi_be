"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const UnitSchema = new mongoose_1.default.Schema({
    unit: { type: String },
    point: { type: String },
    totalResult: { type: String },
}, {
    timestamps: true,
});
const UnitModel = mongoose_1.default.model("unit", UnitSchema);
exports.default = UnitModel;
//# sourceMappingURL=unit.model.js.map