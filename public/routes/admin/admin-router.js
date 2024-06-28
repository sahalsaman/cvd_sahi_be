"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const admin_controller_1 = require("../../controllers/admin-controller");
const router = (0, express_1.Router)();
const admin = new admin_controller_1.AdminController;
// router.get('/me', (req, res) => admin.getStudentList(req, res))
router.get('/get-result-list', (req, res) => admin.getResultList(req, res));
router.post('/create-result', (req, res) => admin.createResult(req, res));
router.patch('/update-result', (req, res) => admin.updateResult(req, res));
router.delete('/delete-result', (req, res) => admin.deleteResult(req, res));
router.get('/get-point-list', (req, res) => admin.getUnitList(req, res));
router.post('/create-point', (req, res) => admin.createUnit(req, res));
router.patch('/update-point', (req, res) => admin.updateUnit(req, res));
router.delete('/delete-point', (req, res) => admin.deleteUnit(req, res));
exports.default = router;
//# sourceMappingURL=admin-router.js.map