import express  from 'express';
import { getDogs, createDog, editDog, deleteDog } from '../controllers/dogs.js'
import login from '../middleware/login.js';

const router = express.Router();

router.get('/', getDogs);
router.post('/', createDog);
router.patch('/:id', login, editDog)
router.delete('/:id', deleteDog)

export default router;