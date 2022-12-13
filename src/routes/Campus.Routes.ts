import { Router } from "express";
import { gettAllCampus, createCampus, getCampusById } from "../controllers/CampusController";

const router = Router();

router.get('/api/campus/get-all-campus', gettAllCampus);
router.get('/api/campus/get-campus-by-id/:id', getCampusById);
router.post('/api/campus/create-campus', createCampus);

export default router;