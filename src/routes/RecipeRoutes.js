import pkg from 'express';
const { Router } = pkg;
import RecipeController from '../controllers/RecipeController.js';

const router = Router();

router.get('/', RecipeController.getAllRecipes);
router.post('/', RecipeController.addRecipe);
router.put('/:id', RecipeController.updatedRecipe);
router.delete('/:id', RecipeController.deleteRecipe);

export default router;
