import pkg from 'express';
const { Router } = pkg;
import UserController from '../controllers/UserController.js';

const router = Router();

router.get('/', UserController.getAllUsers);
router.post('/', UserController.addUser);
router.put('/:id', UserController.updatedUser);
router.delete('/:id', UserController.deleteUser);

export default router;
