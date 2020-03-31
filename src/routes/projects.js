import { Router} from 'express';
import { createProject, getProjects, getOneProject, deleteProject, updateProject } from '../controllers/projectsController';

const router = Router();
// /api/project
router.post('', createProject );
router.get('', getProjects );
router.get('/:id', getOneProject );
router.delete('/:id', deleteProject );
router.put('/:id', updateProject );


export default router;