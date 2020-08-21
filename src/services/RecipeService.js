import db from '../models/index';

class RecipeService {
  static async getAllRecipes() {
    try {
      return await db.Recipe.findAll();
    } catch (error) {
      throw error;
    }
  }

  static async addRecipe(newRecipe) {
    try {
      return await db.Recipe.create(newRecipe);
    } catch (error) {
      throw error;
    }
  }

  static async updateRecipe(id, updateRecipe) {
    try {
      const recipeToUpdate = await db.Recipe.findOne({
        where: { id: Number(id) },
      });

      if (recipeToUpdate) {
        await db.Recipe.update(updateRecipe, { where: { id: Number(id) } });
        return updateRecipe;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }

  static async deleteRecipe(id) {
    try {
      const recipeToDelete = await db.Recipe.findOne({
        where: { id: Number(id) },
      });

      if (recipeToDelete) {
        const deletedRecipe = await db.Recipe.destroy({
          where: { id: Number(id) },
        });
        return deletedRecipe;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }
}

export default RecipeService;
