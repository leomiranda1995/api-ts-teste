import { Request, Response } from 'express';
import ProfessionalRepository from '../repositories/ProfessionalRepository';

class ProfessionalController {
  async getAll(req: Request, res: Response) {
    try {
      const professionals = await ProfessionalRepository.findAll();
      res.json(professionals);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  async getOne(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const professional = await ProfessionalRepository.findOne(id);

      if (professional) {
        res.json(professional);
      } else {
        res.status(404).json({ error: 'Professional not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  async create(req: Request, res: Response) {
    const professional = req.body;
    try {
      const createdProfessional = await ProfessionalRepository.create(professional);
      res.status(201).json(createdProfessional);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  async update(req: Request, res: Response) {
    const id = req.params.id;
    const professional = req.body;
    try {
      const updatedProfessional = await ProfessionalRepository.update(id, professional);

      if (updatedProfessional) {
        res.json(updatedProfessional);
      } else {
        res.status(404).json({ error: 'Professional not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  async delete(req: Request, res: Response) {
    const id = req.params.id;
    try {
      const rowCount = await ProfessionalRepository.delete(id);

      if (rowCount > 0) {
        res.status(204).send();
      } else {
        res.status(404).json({ error: 'Professional not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}

export default new ProfessionalController();
