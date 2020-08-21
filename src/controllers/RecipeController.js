import RecipeService from '../services/RecipeService.js';
import Util from '../utils/Utils.js';

const util = new Util();

class RecipeController {
  static async getAllRecipes(req, res) {
    try {
      const allRecipes = await RecipeService.getAllRecipes();

      if (allRecipes.length > 0) {
        res.status(200).send(allRecipes);
      } else {
        res.status(200).send('No recipe found');
      }

      return util.send(res);
    } catch (error) {
      util.setError(400, 'Can not connect to database');
      return util.send(res);
    }
  }

  static async addRecipe(req, res) {
    if (
      !req.body.name ||
      !req.body.description ||
      !req.body.ingredients ||
      !req.body.cooking
    ) {
      util.setError(400, 'Please provide complete details');
      return util.send(res);
    }

    const newRecipe = req.body;

    try {
      const createdRecipe = await RecipeService.addRecipe(newRecipe);
      util.setSuccess(201, 'Recipe Added!', createdRecipe);

      return util.send(res);
    } catch (error) {
      util.setError(400, error.message);
      return util.send(res);
    }
  }

  static async updatedRecipe(req, res) {
    const alteredRecipe = req.body;
    const { id } = req.params;
    if (!Number(id)) {
      util.setError(400, 'Please input a valid numeric value');
      return util.send(res);
    }
    try {
      const updateRecipe = await RecipeService.updateRecipe(id, alteredRecipe);
      if (!updateRecipe) {
        util.setError(404, `Cannot find recipe with the id: ${id}`);
      } else {
        util.setSuccess(200, 'Recipe updated', updateRecipe);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }

  static async deleteRecipe(req, res) {
    const { id } = req.params;

    if (!Number(id)) {
      util.setError(400, 'Please provide a numeric value');
      return util.send(res);
    }

    try {
      const recipeToDelete = await RecipeService.deleteRecipe(id);

      if (recipeToDelete) {
        util.setSuccess(200, 'Recipe deleted');
      } else {
        util.setError(404, `Recipe with the id ${id} cannot be found`);
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }
}

export default RecipeController;
