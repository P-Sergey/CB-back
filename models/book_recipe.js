'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Book_Recipe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Book_Recipe.init(
    {
      book_id: DataTypes.INTEGER,
      recipe_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Book_Recipe',
    }
  );
  return Book_Recipe;
};
