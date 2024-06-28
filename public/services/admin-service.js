"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminService = void 0;
const result_model_1 = __importDefault(require("../models/result.model"));
const unit_model_1 = __importDefault(require("../models/unit.model"));
class AdminService {
    constructor() {
        this.createResult = (data) => __awaiter(this, void 0, void 0, function* () {
            return yield result_model_1.default.create(data);
        });
        this.getResultList = (search) => __awaiter(this, void 0, void 0, function* () {
            let filter = {};
            if (search) {
                filter = { $or: [{ name: { $regex: search, $options: 'i' } }] };
            }
            let list = yield result_model_1.default.find(filter).sort({ 'createdAt': -1 });
            return list;
        });
        this.updateResult = (id, data) => __awaiter(this, void 0, void 0, function* () {
            console.log(data);
            return result_model_1.default.findByIdAndUpdate(id, data);
        });
        this.deleteResult = (id) => __awaiter(this, void 0, void 0, function* () {
            return result_model_1.default.findByIdAndDelete(id);
        });
        this.createUnit = (data) => __awaiter(this, void 0, void 0, function* () {
            console.log(data);
            return yield unit_model_1.default.create(data);
        });
        this.getUnitList = () => __awaiter(this, void 0, void 0, function* () {
            let list = yield unit_model_1.default.find().sort({ 'point': -1 });
            return list;
        });
        this.updateUnitpoint = (id, data) => __awaiter(this, void 0, void 0, function* () {
            return unit_model_1.default.findByIdAndUpdate(id, data);
        });
        this.deleteUnit = (id) => __awaiter(this, void 0, void 0, function* () {
            return unit_model_1.default.findByIdAndDelete(id);
        });
    }
}
exports.AdminService = AdminService;
//# sourceMappingURL=admin-service.js.map