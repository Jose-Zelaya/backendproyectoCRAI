import Reserva from '../models/Reserva';
import { Request, Response } from 'express';

const gettAllReserva = async (req: Request, res: Response) => {
  try {
    const reserva = await Reserva.find();
    res.json(reserva);
  } catch (error) {
    res.json(error);
  }
};

const getReservaById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const reserva = await Reserva.findById(id);
    res.json(reserva);
  } catch (error) {
    res.json(error);
  }
}

const createReserva = async (req: Request, res: Response) => {
  console.log("ESTOS DATOS SON: ",req.body);
  const {id_sala, nombre, apellido, numcuenta, horas_reservadas, integrantes } = req.body;
  const newReserva = new Reserva({
    id_sala,
    nombre,
    apellido,
    numcuenta,
    horas_reservadas, 
    integrantes,
  });
  try {
    const reserva = await newReserva.save();
    res.json(reserva);
  } catch (error) {
    res.json(error);
  }
}

export { gettAllReserva, createReserva, getReservaById };