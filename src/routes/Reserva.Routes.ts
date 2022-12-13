import { Router } from "express";
import { gettAllReserva, createReserva, getReservaById } from "../controllers/ReservaController";

const router = Router();

router.get('/api/reserva/get-all-reserva', gettAllReserva);
router.get('/api/reserva/get-reserva-by-id/:id', getReservaById);
router.post('/api/reserva/create-reserva', createReserva);

export default router;