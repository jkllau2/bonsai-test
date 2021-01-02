'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('brand_products', {
      brandId: {
        type: Sequelize.INTEGER
      },
      productId: {
        type: Sequelize.UUID
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('brand_products');
  }
};