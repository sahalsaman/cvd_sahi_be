import { Router } from "express";
import { AdminController} from "../../controllers/admin-controller";

const router=Router()
const admin = new AdminController

// router.get('/me', (req, res) => admin.getStudentList(req, res))
router.get('/get-result-list', (req, res) => admin.getResultList(req, res))
router.post('/create-result', (req, res) => admin.createResult(req, res))
router.patch('/update-result', (req, res) => admin.updateResult(req, res))
router.delete('/delete-result', (req, res) => admin.deleteResult(req, res))


router.get('/get-point-list', (req, res) => admin.getUnitList(req, res))
router.post('/create-point', (req, res) => admin.createUnit(req, res))
router.patch('/update-point', (req, res) => admin.updateUnit(req, res))
router.delete('/delete-point', (req, res) => admin.deleteUnit(req, res))



export default router