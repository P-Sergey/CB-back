import pkg from 'express';
const { Router } = pkg;
import UserController from '../controllers/UserController.js';
import authCheck from '../middleware/authCheck.js';

const router = Router();

router.get('/', UserController.getAllUsers);
router.post('/', UserController.addUser);
router.post('/signIn', UserController.signInUser);
router.put('/:id', UserController.updatedUser);
router.delete('/:id', authCheck, UserController.deleteUser);

export default router;
