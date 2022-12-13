import { Router } from "express";
import { gettAllSala, createSala, getSalaById } from "../controllers/SalaController";

const router = Router();

router.get('/api/sala/get-all-sala', gettAllSala);
router.get('/api/sala/get-sala-by-id/:id', getSalaById);
router.post('/api/sala/create-sala', createSala);

export default router;