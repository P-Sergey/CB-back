'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('Book_Recipe', {
      BookId: {
        type: Sequelize.UUID,
        primaryKey: true,
      },
      RecipeId: {
        type: Sequelize.UUID,
        primaryKey: true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Book_Recipe');
  },
};
