'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Recipe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Recipe.belongsToMany(models.Book, { through: 'Book_Recipe' });
      /* models.recipe.belongsToMany(models.book, {
        through: {
          model: models.book_recipe,
          unique: false,
        },
        foreignKey: 'recipe_id',
      }); */
    }
  }
  Recipe.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.TEXT,
      ingredients: DataTypes.TEXT,
      cooking: DataTypes.TEXT,
      book_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Recipe',
    }
  );
  return Recipe;
};
