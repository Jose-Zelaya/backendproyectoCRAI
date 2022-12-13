import Campus from '../models/Campus';
import { Request, Response } from 'express';

const gettAllCampus = async (req: Request, res: Response) => {
  try {
    const campus = await Campus.find();
    res.json(campus);
  } catch (error) {
    res.json(error);
  }
};

const getCampusById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const campus = await Campus.findById(id);
    res.json(campus);
  } catch (error) {
    res.json(error);
  }
}

const createCampus = async (req: Request, res: Response) => {
  const { nameImg, campusName, campusPlace, campusDirection, sedeName} = req.body;
  const newCampus = new Campus({
    nameImg,
    campusName,
    sedeName,
    campusPlace,
    campusDirection,
  });
  try {
    const campus = await newCampus.save();
    res.json(campus);
  } catch (error) {
    res.json(error);
  }
}

export { gettAllCampus, createCampus, getCampusById };
