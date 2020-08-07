'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Book.belongsToMany(models.Recipe, { through: 'Book_Recipe' });
      /* models.book.belongsToMany(models.recipe, {
        through: {
          model: models.book_recipe,
          unique: false,
        },
        foreignKey: 'book_id',
      }); */
    }
  }
  Book.init(
    {
      user_id: DataTypes.INTEGER,
      recipe_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Book',
    }
  );
  return Book;
};
