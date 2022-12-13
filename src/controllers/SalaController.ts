import Sala from '../models/Sala';
import { Request, Response } from 'express';

const gettAllSala = async (req: Request, res: Response) => {
  try {
    const sala = await Sala.find();
    res.json(sala);
  } catch (error) {
    res.json(error);
  }
};

const getSalaById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const sala = await Sala.findById(id);
    res.json(sala);
  } catch (error) {
    res.json(error);
  }
}

const createSala = async (req: Request, res: Response) => {
  const { sede, numsala} = req.body;
  const newSala = new Sala({
    sede,
    numsala,
 
  });
  try {
    const sala = await newSala.save();
    res.json(sala);
  } catch (error) {
    res.json(error);
  }
}

export { gettAllSala, createSala, getSalaById };