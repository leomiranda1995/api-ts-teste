import { Router } from "express";
import ProfessionalController from "./controller/ProfessionalController";

const router = Router();

router.get('/professionals',ProfessionalController.getAll);
router.get('/professionals/:id',ProfessionalController.getOne);
router.post('/professionals',ProfessionalController.create);
router.put('/professionals/:id',ProfessionalController.update);
router.delete('/professionals/:id',ProfessionalController.delete);

export = router;
