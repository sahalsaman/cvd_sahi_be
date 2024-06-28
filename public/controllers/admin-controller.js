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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminController = void 0;
const controller_base_1 = require("../utils/class/controller-base");
const admin_service_1 = require("../services/admin-service");
const validator_1 = require("../utils/functions/validator");
class AdminController extends controller_base_1.ControllerBase {
    constructor() {
        super(...arguments);
        this.adminService = new admin_service_1.AdminService();
        this.createResult = (request, response) => __awaiter(this, void 0, void 0, function* () {
            console.log("hi", request.body);
            const body = request.body;
            try {
                const required = ["category", "program", "noOfResult"];
                const validationError = (0, validator_1.bodyRequiredDataValidator)(body, required);
                if (validationError) {
                    return this.error(response, 400, undefined, validationError);
                }
                const auth = yield this.adminService.createResult(body);
                this.jsonResponse(response, null, auth);
            }
            catch (e) {
                this.error(response, 500, null, e);
            }
        });
        this.getResultList = (request, response) => __awaiter(this, void 0, void 0, function* () {
            const search = request.query.search;
            try {
                const list = yield this.adminService.getResultList(search);
                this.jsonResponse(response, null, { data: list });
            }
            catch (e) {
                // logger.error(e)
                this.error(response, 500, null, e);
            }
        });
        this.updateResult = (request, response) => __awaiter(this, void 0, void 0, function* () {
            console.log(request.body);
            const body = request.body;
            try {
                const required = ["category", "program", "noOfResult"];
                const validationError = (0, validator_1.bodyRequiredDataValidator)(body, required);
                if (validationError) {
                    return this.error(response, 400, undefined, validationError);
                }
                const res = yield this.adminService.updateResult(request.body._id, body);
                this.jsonResponse(response, null, { data: res });
            }
            catch (e) {
                // logger.error(e)
                this.error(response, 500, null, e);
            }
        });
        this.deleteResult = (request, response) => __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const res = yield this.adminService.deleteResult((_a = request === null || request === void 0 ? void 0 : request.query) === null || _a === void 0 ? void 0 : _a.id);
                this.jsonResponse(response, null, { data: res });
            }
            catch (e) {
                // logger.error(e)
                this.error(response, 500, null, e);
            }
        });
        this.createUnit = (request, response) => __awaiter(this, void 0, void 0, function* () {
            const body = request.body;
            try {
                const required = ["unit", "point"];
                const validationError = (0, validator_1.bodyRequiredDataValidator)(body, required);
                if (validationError) {
                    return this.error(response, 400, undefined, validationError);
                }
                const auth = yield this.adminService.createUnit(body);
                this.jsonResponse(response, null, auth);
            }
            catch (e) {
                this.error(response, 500, null, e);
            }
        });
        this.getUnitList = (request, response) => __awaiter(this, void 0, void 0, function* () {
            try {
                const list = yield this.adminService.getUnitList();
                this.jsonResponse(response, null, { data: list });
            }
            catch (e) {
                // logger.error(e)
                this.error(response, 500, null, e);
            }
        });
        this.updateUnit = (request, response) => __awaiter(this, void 0, void 0, function* () {
            try {
                const res = yield this.adminService.updateUnitpoint(request.body.id, request.body);
                this.jsonResponse(response, null, { data: res });
            }
            catch (e) {
                // logger.error(e)
                this.error(response, 500, null, e);
            }
        });
        this.deleteUnit = (request, response) => __awaiter(this, void 0, void 0, function* () {
            var _b;
            try {
                const res = yield this.adminService.deleteUnit((_b = request === null || request === void 0 ? void 0 : request.query) === null || _b === void 0 ? void 0 : _b.id);
                this.jsonResponse(response, null, { data: res });
            }
            catch (e) {
                // logger.error(e)
                this.error(response, 500, null, e);
            }
        });
    }
}
exports.AdminController = AdminController;
//# sourceMappingURL=admin-controller.js.map